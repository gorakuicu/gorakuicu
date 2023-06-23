import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

import ChevronIcon from '~/assets/ChevronIcon';
import { checkHasWindow } from '~/utils/checkEnv';

// Move constants outside of the component to avoid unnecessary re-renders
const scrollThreshold = 300;
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const scrollToTopOptions: ScrollToOptions = { top: 0, behavior: 'smooth' };
const buttonTransition = { duration: 0.3 };

export default function ScrollBack() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible(document.documentElement.scrollTop > scrollThreshold);
  }, []);

  const scrollToTop = useCallback(() => {
    const hasWindow = checkHasWindow();

    if (hasWindow) window.scrollTo(scrollToTopOptions);
  }, []);

  useEffect(() => {
    const hasWindow = checkHasWindow();

    if (hasWindow) window.addEventListener('scroll', toggleVisible);

    return () => {
      if (hasWindow) window.removeEventListener('scroll', toggleVisible);
    };
  }, [toggleVisible]);

  return (
    <AnimatePresence>
      <motion.button
        key="scroll-back"
        animate={visible ? 'visible' : 'hidden'}
        className="bg-primary fixed bottom-4 right-4 rounded-full p-2 text-white shadow-xl drop-shadow-xl"
        initial="hidden"
        transition={buttonTransition}
        variants={variants}
        onClick={scrollToTop}
      >
        <ChevronIcon direction="up" />
      </motion.button>
    </AnimatePresence>
  );
}
