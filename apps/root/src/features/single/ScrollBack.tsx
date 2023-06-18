import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function ScrollBack() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(document.documentElement.scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.button
        animate={visible ? 'visible' : 'hidden'}
        className="bg-primary fixed bottom-4 right-4 rounded-full p-2 text-white shadow-xl drop-shadow-xl"
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={variants}
        onClick={scrollToTop}
      >
        <svg
          className="mx-auto h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
      </motion.button>
    </AnimatePresence>
  );
}
