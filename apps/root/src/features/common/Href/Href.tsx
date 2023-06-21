import clsx from 'clsx';
import Link from 'next/link';
import React, { memo } from 'react';

import ArrowTRSquareIcon from '@/assets/ArrowTRSquareIcon';

export interface IHrefProps {
  ref?: React.Ref<HTMLAnchorElement>;
  id?: string;
  active?: boolean;
  showIcon?: boolean;
  iconProps?: React.SVGProps<SVGSVGElement>;
  className?: string;
  href?: string | boolean | undefined;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const getHrefClassName = (active: boolean) =>
  `hover:text-accent inline-flex transition-colors duration-300 ${
    active ? 'text-primary' : 'text-base-200 hover:text-secondary'
  }`;

const Href = ({
  id = '',
  active = false,
  showIcon = true,
  iconProps = {},
  className = '',
  href = '#',
  children = null,
  ...props
}: IHrefProps) => {
  const isHrefString = typeof href === 'string';
  const externalReference = isHrefString && (href.startsWith('http') || href.startsWith('mailto'));
  const cn = clsx(getHrefClassName(active), className);
  const cnIcon = clsx('ml-1', iconProps.className);
  const Tag: React.ElementType = externalReference ? 'a' : Link;

  return (
    <Tag
      aria-label={isHrefString ? href : undefined}
      className={cn}
      href={isHrefString ? href : '#'}
      id={id}
      {...(externalReference ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
      {externalReference && showIcon && (
        <ArrowTRSquareIcon height={16} width={16} {...iconProps} className={cnIcon} />
      )}
    </Tag>
  );
};

export default memo(Href);
