import clsx from 'clsx';
import { motion } from 'framer-motion';
import { prefix } from 'inline-style-prefixer';
import { memo } from 'react';

import Href from '../common/Href';

export interface IContactIcon {
  svg: string;
  href?: string | undefined | boolean;
  className?: string;
  name?: string;
  notList?: boolean;
}

const ContactIcon: React.FC<IContactIcon> = ({
  svg,
  href = '',
  className = '',
  notList = false,
  ...props
}) => {
  const classNames = clsx(className, 'group', 'relative', 'w-14');
  const Tag = notList ? motion.span : motion.li;

  const commonProps = {
    className:
      'bg-base-content font-pj relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-lg font-bold text-white transition-all duration-200 focus:outline-none',
    style: prefix({
      background: 'rgba(255, 255, 255, 0.21)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5.3px)',
      border: '1px solid rgba(255, 255, 255, 0.19)',
      width: '100%',
    }),
  };

  const LinkComponent = href
    ? ({ children }: { children: React.ReactNode }) => (
        <Href href={href} showIcon={false} {...commonProps}>
          {children}
        </Href>
      )
    : ({ children }: { children: React.ReactNode }) => <span {...commonProps}>{children}</span>;

  return (
    <Tag
      className={classNames}
      variants={{
        hidden: { y: -10, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      {...props}
    >
      <span className="animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-20 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
      <LinkComponent>
        <span
          style={prefix({
            filter: 'invert(1)',
            height: 24,
            width: 24,
            backgroundImage: `url(${svg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          })}
        />
      </LinkComponent>
    </Tag>
  );
};

export default memo(ContactIcon);
