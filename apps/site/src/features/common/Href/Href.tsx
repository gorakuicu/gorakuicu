'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo } from 'react';

import ArrowTRSquareIcon from '@/assets/ArrowTRSquareIcon';
import { url } from '@/constants/metadata';

export interface IHrefProps {
  id?: string;
  base?: boolean;
  disabled?: boolean;
  active?: boolean;
  showIcon?: boolean;
  iconProps?: React.SVGProps<SVGSVGElement>;
  className?: string;
  href?: string | boolean | undefined;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Href = ({
  id = '',
  base = false,
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

  const externalReference =
    isHrefString && (href.startsWith('http') || href.startsWith('mailto')) && !href.startsWith(url);

  const cn = clsx(
    'hover:text-accent inline-flex transition-colors duration-300',
    {
      'text-secondary': !base,
    },
    {
      'text-base-300': base,
    },
    {
      '!text-primary': active,
    },
    {
      '!cursor-not-allowed': disabled,
      '!pointer-events-none': disabled,
      '!text-neutral': disabled,
      '!hover:text-neutral': disabled,
    },
    className,
  );

  const cnIcon = clsx('ml-1', iconProps.className);

  const Tag: React.ElementType = externalReference ? 'a' : Link;

  return (
    <Tag
      aria-label={href}
      href={href}
      id={id + href}
      {...(externalReference ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
      className={cn}
    >
      {children}
      {externalReference && showIcon && (
        <ArrowTRSquareIcon height={16} width={16} {...iconProps} className={cnIcon} />
      )}
    </Tag>
  );
};

export default memo(Href);
