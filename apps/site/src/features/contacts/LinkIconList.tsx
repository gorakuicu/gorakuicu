import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { memo } from 'react';

import ContactIcon, { IContactIcon } from '~/features/contacts/ContactIcon';
import { useOnScreen } from '~/hooks/useOnScreen';
import { keygen } from '~/utils/keygen';

export interface ILinkIconList {
  ref?: React.Ref<HTMLUListElement>;
  animateWhenVisible?: boolean;
  contacts: IContactIcon[];
  className?: string;
}

const variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.02,
    },
  },
};

const LinkIconList: React.FC<ILinkIconList> = ({
  contacts,
  className = '',
  animateWhenVisible,
}) => {
  const [ref, visible] = useOnScreen<HTMLUListElement>(true);

  const animate = animateWhenVisible && visible ? 'visible' : 'hidden';

  const classNames = clsx(
    className,
    'columns-3',
    'gap-2',
    'space-y-2',
    'sm:columns-6',
    'md:columns-6',
    'lg:columns-4',
    'xl:columns-6',
  );

  if (!contacts?.length) return null;

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.ul
        key="link-icon-list"
        ref={ref}
        animate={animate}
        className={classNames}
        initial="hidden"
        variants={variants}
      >
        {contacts.map(({ href = '#', svg = '', ...icon }) => (
          <ContactIcon key={keygen(href, svg)} href={href} svg={svg} {...icon} />
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default memo(LinkIconList);
