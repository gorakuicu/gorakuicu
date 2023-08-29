import clsx from 'clsx';
import React from 'react';

interface IProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ChevronIcon({ direction = 'up', className = '', ...props }: IProps) {
  const cn = clsx('mx-auto h-6 w-6', className, {
    'rotate-180': direction === 'down',
    '-rotate-90': direction === 'left',
    'rotate-90': direction === 'right',
  });

  return (
    <svg
      className={cn}
      fill="none"
      height={16}
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  );
}
