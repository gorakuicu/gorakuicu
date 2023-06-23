import clsx from 'clsx';
import { motion } from 'framer-motion';
import { prefix } from 'inline-style-prefixer';
import React, { memo } from 'react';

import Href from '~/features/common/Href';

export interface IContactIcon {
  svg: string;
  href?: string | undefined | boolean;
  className?: string;
  name?: string;
  notList?: boolean;
}

interface IChildren {
  children: React.ReactNode;
}

const style = prefix({
  background: 'rgba(255, 255, 255, 0.21)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5.3px)',
  border: '1px solid rgba(255, 255, 255, 0.19)',
  width: '100%',
});

const commonProps = {
  className:
    'bg-base-content font-pj relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-lg font-bold text-white duration-200 focus:outline-none',
  style,
};

const variants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ContactIcon({ svg, href = '', className = '', notList = false, ...props }: IContactIcon) {
  const classNames = clsx(className, 'group relative w-14');
  const Tag = notList ? motion.span : motion.li;

  const iconStyle = prefix({
    filter: 'invert(1)',
    height: 24,
    width: 24,
    backgroundImage: `url(${svg})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  const Component = href
    ? ({ children }: IChildren) => (
        <Href base href={href} showIcon={false} {...commonProps}>
          {children}
        </Href>
      )
    : ({ children }: IChildren) => <span {...commonProps}>{children}</span>;

  return (
    <Tag key="contact-icon" className={classNames} variants={variants} {...props}>
      <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-20 blur-lg transition-opacity duration-500 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
      <Component>
        <span style={iconStyle} />
      </Component>
    </Tag>
  );
}

export default memo(ContactIcon);
