'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo } from 'react';

import ArrowTRSquareIcon from '@/assets/ArrowTRSquareIcon';

export interface IHrefProps {
  ref?: React.Ref<HTMLAnchorElement>;
  id?: string;
  disabled?: boolean;
  active?: boolean;
  showIcon?: boolean;
  iconProps?: React.SVGProps<SVGSVGElement>;
  className?: string;
  href?: string | boolean | undefined;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const getHrefClassName = (active?: boolean, disabled?: boolean) =>
  clsx(
    'hover:text-accent text-base-200 inline-flex transition-colors duration-300',
    {
      'text-primary': active,
    },
    {
      'cursor-not-allowed': disabled,
      'pointer-events-none': disabled,
      'text-neutral': disabled,
      'hover:text-neutral': disabled,
    },
  );

const Href = ({
  id = '',
  disabled = false,
  active = false,
  showIcon = true,
  iconProps = {},
  className = '',
  href: hrefProp = '#',
  children = null,
  ...props
}: IHrefProps) => {
  const pathname = usePathname();

  const isHrefString = typeof hrefProp === 'string';
  const href = isHrefString && !disabled ? hrefProp : pathname;
  const externalReference = isHrefString && (href.startsWith('http') || href.startsWith('mailto'));

  const cn = clsx(getHrefClassName(active, disabled), className);
  const cnIcon = clsx('ml-1', iconProps.className);

  const Tag: React.ElementType = externalReference ? 'a' : Link;

  return (
    <Tag
      aria-label={href}
      className={cn}
      href={href}
      id={id + href}
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
