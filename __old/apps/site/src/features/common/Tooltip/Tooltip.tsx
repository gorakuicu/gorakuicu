import clsx from 'clsx';
import React from 'react';

import TriangleIcon from '~/assets/TriangleIcon';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: 'top' | 'bottom' | 'left' | 'right';
  tooltip?: React.ReactNode;
}

export default function Tooltip({
  className = '',
  position = 'top',
  tooltip = null,
  children = null,
}: ITooltipProps) {
  if (!tooltip) return <>{children}</>;

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-1 translate-y-2 group-hover:translate-y-0',
    right: 'top-1/2 left-full transform -translate-y-1/2 ml-1',
    bottom:
      'top-full left-1/2 transform -translate-x-1/2 mt-1 translate-y-2 group-hover:translate-y-0',
    left: 'top-1/2 right-full transform -translate-y-1/2 mr-1',
  };

  const svgPositionClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2',
    right: 'top-1/2 right-full transform -translate-y-1/2 -translate-x-1/2',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2',
    left: 'top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2',
  };

  const cn = clsx(className, 'group relative inline-block');
  const tooltipClass = `z-40 bg-primary absolute w-max rounded-lg px-3 py-2 text-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-200 ${positionClasses[position]}`;

  return (
    <span className={cn}>
      {children}
      {tooltip && (
        <span className={tooltipClass}>
          {Array.isArray(tooltip)
            ? tooltip.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                </React.Fragment>
              ))
            : tooltip}
          <TriangleIcon
            className={`absolute ${svgPositionClasses[position]} text-primary h-3 w-3`}
          />
        </span>
      )}
    </span>
  );
}
