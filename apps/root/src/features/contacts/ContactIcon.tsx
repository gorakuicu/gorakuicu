import clsx from 'clsx';
import { motion } from 'framer-motion';
import { prefix } from 'inline-style-prefixer';
import { memo } from 'react';

export interface IContactIcon {
  svg: string;
  href: string;
  className?: string;
  [key: string]: any;
}

const ContactIcon: React.FC<IContactIcon> = ({ svg, href, className = '', ...props }) => {
  const classNames = clsx(className, 'group', 'relative', 'w-14');

  return (
    <motion.li
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
      <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-20 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
      <a
        className="bg-base-content font-pj relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-lg font-bold text-white transition-all duration-200 focus:outline-none"
        href={href}
        role="button"
        style={prefix({
          background: 'rgba(255, 255, 255, 0.21)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5.3px)',
          border: '1px solid rgba(255, 255, 255, 0.19)',
          width: '100%',
        })}
        title={href}
      >
        <div
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
      </a>
    </motion.li>
  );
};

export default memo(ContactIcon);
