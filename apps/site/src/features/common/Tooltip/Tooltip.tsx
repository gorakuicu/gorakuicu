import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';

import TriangleIcon from '~/assets/TriangleIcon';
import { keygen } from '~/utils/keygen';

export interface ITooltipProps {
  ref?: React.RefObject<HTMLDivElement> | null;
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

  const processContent = (content: React.ReactNode) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-unstyled">
          {content.map((item, index) => (
            <li key={keygen(item, index)}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return content;
    }
  };
  const processedContent = processContent(content);

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
  const tooltipClass = `tooltip-content z-100 bg-primary pointer-events-none absolute w-max rounded-lg px-3 py-2 text-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 ${positionClasses[position]}`;

  return (
    <span className={cn} onMouseEnter={handleShow} onMouseLeave={handleHide}>
      {children}
      {content && (
        <AnimatePresence>
          {show && (
            <motion.div
              key="tooltip"
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              className={tooltipClass}
              exit={{ opacity: 0, y: 8, x: '-50%' }}
              initial={{ opacity: 0, y: 8, x: '-50%' }}
              transition={{ duration: 0.2 }}
            >
              {processedContent}
              <TriangleIcon
                className={`absolute ${svgPositionClasses[position]} text-primary h-3 w-3`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </span>
  );
}
