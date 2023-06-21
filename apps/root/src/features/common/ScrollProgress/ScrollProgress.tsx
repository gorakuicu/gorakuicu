import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { throttle } from '@/utils/throttle';

export default function ScrollProgress() {
  const [scrollProgressPercent, setScrollProgressPercent] = useState(0);

  useEffect(() => {
    const updateScrollProgressBar = throttle(() => {
      if (!document) return;

      const scrollPosition = document?.body?.scrollTop || document?.documentElement?.scrollTop || 0;
      const scrollableHeight =
        document?.documentElement?.scrollHeight - document?.documentElement?.clientHeight || 1;
      const scrollProgress = scrollPosition / scrollableHeight;

      setScrollProgressPercent(Math.round(scrollProgress * 100));
    }, 60);

    if (window) window.addEventListener('scroll', updateScrollProgressBar);

    return () => {
      if (window) window.removeEventListener('scroll', updateScrollProgressBar);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="scroll-progress"
        animate={{ width: `${scrollProgressPercent || 0}%` }}
        className="bg-primary-focus fixed inset-x-0 top-0 z-50 h-0.5"
        initial={{ width: '0%' }}
        style={{
          backgroundImage: 'linear-gradient(to right, #4F46E577, #D53CF577)',
        }}
        transition={{ duration: 0.1 }}
      />
    </AnimatePresence>
  );
}
