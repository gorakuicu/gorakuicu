import type { ChipProps } from '@nextui-org/react';

import { Chip } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export interface IMessageProperties {
  content: string;
  duration?: number;
  onClose: () => void;
  type?: ChipProps['color'];
}

const messageVariants = {
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.6, y: 30 },
  initial: { opacity: 0, scale: 0.6, y: 30 },
  transition: { duration: 0.4 },
};

export const Message = ({
  content,
  duration = 4000,
  onClose,
  type,
}: IMessageProperties) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        {...messageVariants}
        className="fixed inset-x-2 bottom-1/4 z-50 flex items-center justify-center"
      >
        <Chip color={type} onClick={onClose} size="lg" variant="faded">
          {content}
        </Chip>
      </motion.div>
    </AnimatePresence>
  );
};
