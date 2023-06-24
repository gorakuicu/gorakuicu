import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import { checkHasWindow } from '~/utils/checkEnv';
import { throttle } from '~/utils/throttle';

export default function ScrollProgress() {
  const [scrollProgressPercent, setScrollProgressPercent] = useState(0);

  const updateScrollProgressBar = useCallback(
    throttle(() => {
      if (!document) return;

      const scrollPosition = document?.body?.scrollTop || document?.documentElement?.scrollTop || 0;
      const scrollableHeight =
        document?.documentElement?.scrollHeight - document?.documentElement?.clientHeight || 1;
      const scrollProgress = scrollPosition / scrollableHeight;

      setScrollProgressPercent(Math.round(scrollProgress * 100));
    }, 60),
    [],
  );

  useEffect(() => {
    const hasWindow = checkHasWindow();

    if (hasWindow) window.addEventListener('scroll', updateScrollProgressBar);

    return () => {
      if (hasWindow) window.removeEventListener('scroll', updateScrollProgressBar);
    };
  }, []);

  return (
    <motion.div
      key="scroll-progress"
      animate={{ width: `${scrollProgressPercent || 0}%` }}
      className="bg-primary-focus fixed inset-x-0 top-0 z-40 h-0.5 opacity-40"
      initial={{ width: '0%' }}
      style={{
        backgroundImage: 'linear-gradient(to right, #4F46E5, #D53CF5)',
      }}
      transition={{ duration: 0.1 }}
    />
  );
}
