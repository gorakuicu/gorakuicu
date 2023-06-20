import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';

export interface ITooltipProps {
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  content?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Tooltip({
  className = '',
  position = 'top',
  content = null,
  children = null,
}: ITooltipProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = useCallback(() => setShow(true), []);
  const handleHide = useCallback(() => setShow(false), []);

  if (!content) return <>{children}</>;

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-1',
    right: 'top-1/2 left-full transform -translate-y-1/2 ml-1',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-1',
    left: 'top-1/2 right-full transform -translate-y-1/2 mr-1',
  };

  const svgPositionClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2',
    right: 'top-1/2 right-full transform -translate-y-1/2 -translate-x-1/2',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2',
    left: 'top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2',
  };

  const cn = clsx(className, 'group relative inline-block cursor-pointer');

  const processedContent = Array.isArray(content) ? (
    <ul className="list-unstyled">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    content
  );

  return (
    <span className={cn} onMouseEnter={handleShow} onMouseLeave={handleHide}>
      {children}
      {content && (
        <AnimatePresence>
          {show && (
            <motion.div
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              className={`tooltip-content z-100 bg-primary pointer-events-none absolute w-max rounded-lg px-3 py-2 text-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 ${positionClasses[position]}`}
              exit={{ opacity: 0, y: 8, x: '-50%' }}
              initial={{ opacity: 0, y: 8, x: '-50%' }}
              transition={{ duration: 0.2 }}
            >
              {processedContent}
              <svg
                className={`absolute ${svgPositionClasses[position]} text-primary h-3 w-3`}
                viewBox="0 0 255 255"
                x="0px"
                y="0px"
              >
                <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </span>
  );
}
