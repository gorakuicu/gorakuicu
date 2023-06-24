import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import ContactIcon, { IContactIcon } from '~/features/contacts/ContactIcon';
import { useOnScreen } from '~/hooks/useOnScreen';
import { keygen } from '~/utils/keygen';

export interface ILinkIconList extends React.HTMLAttributes<HTMLUListElement> {
  animateWhenVisible?: boolean;
  contacts: IContactIcon[];
}

const variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.03,
    },
  },
};

function LinkIconList({ contacts, className = '', animateWhenVisible }: ILinkIconList) {
  const [ref, visible] = useOnScreen<HTMLUListElement>(true);

  const animate = animateWhenVisible && visible ? 'visible' : 'hidden';

  const classNames = clsx(
    className,
    'gap-2',
    'grid',
    'grid-cols-4',
    'sm:grid-cols-6',
    'md:grid-cols-6',
    'lg:grid-cols-9',
    'xl:grid-cols-6',
    '2xl:grid-cols-9',
  );

  if (!contacts?.length) return null;

  return (
    <motion.ul
      key="link-icon-list"
      ref={ref}
      animate={animate}
      className={classNames}
      initial="hidden"
      variants={variants}
    >
      {contacts.map(({ href = '#', svg = '' }) => (
        <ContactIcon key={keygen(href, svg)} href={href} svg={svg} />
      ))}
    </motion.ul>
  );
}

export default LinkIconList;
