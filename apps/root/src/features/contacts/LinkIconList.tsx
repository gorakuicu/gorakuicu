import clsx from 'clsx';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

import { useOnScreen } from '@/hooks/useOnScreen';
import uuid from '@/utils/uuid';

import ContactIcon, { IContactIcon } from './ContactIcon';

export interface ILinkIconList {
  ref?: React.Ref<HTMLUListElement>;
  animateWhenVisible?: boolean;
  contacts: IContactIcon[];
  className?: string;
}

const LinkIconList: React.FC<ILinkIconList> = ({
  contacts,
  className = '',
  animateWhenVisible,
}) => {
  const [ref, visible] = useOnScreen<HTMLUListElement>();

  const animate = useMemo(() => {
    if (!animateWhenVisible) return 'visible';

    return visible ? 'visible' : 'hidden';
  }, [visible]);

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
      ref={ref}
      animate={animate}
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
      {contacts?.length > 0 && contacts?.map((icon) => <ContactIcon key={uuid()} {...icon} />)}
    </motion.ul>
  );
};

export default memo(LinkIconList);
