import clsx from 'clsx';
import { motion } from 'framer-motion';
import { memo } from 'react';

import uuid from '~/utils/uuid';

import ContactIcon, { IContactIcon } from './ContactIcon';

export interface IContactIconList {
  contacts: IContactIcon[];
  className?: string;
}

const ContactIconList: React.FC<IContactIconList> = ({ contacts, className = '' }) => {
  if (!contacts?.length) return null;

  const classNames = clsx(
    className,
    'columns-4',
    'gap-2',
    'space-y-2',
    'sm:columns-6',
    'md:columns-6',
    'lg:columns-4',
    'xl:columns-6',
  );

  return (
    <motion.ul
      animate="visible"
      className={classNames}
      initial="hidden"
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {contacts?.map((icon) => (
        <ContactIcon key={uuid()} {...icon} />
      ))}
    </motion.ul>
  );
};

export default memo(ContactIconList);
