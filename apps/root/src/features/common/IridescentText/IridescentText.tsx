'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import uuid from '~/utils/uuid';

export interface IIridescentText {
  strings: string[];
  speed?: number;
}

export default function IridescentText({ strings, speed = 2500 }: IIridescentText) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = index + 1;

      setIndex(nextIndex === strings.length ? 0 : nextIndex);
    }, speed);

    return () => clearInterval(interval);
  }, [index]);

  const key = useMemo(() => `${uuid()}___${index}`, [index]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -4, opacity: 0 }}
        initial={{ y: -2, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-xs font-bold">{strings?.[index] || ''}</p>
      </motion.div>
    </AnimatePresence>
  );
}
