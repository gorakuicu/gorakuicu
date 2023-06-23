'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useInterval } from '@/hooks/useInterval';
import { keygen } from '@/utils/keygen';

export interface IIridescentText {
  strings: string[];
  speed?: number;
}

export default function IridescentText({ strings, speed = 2500 }: IIridescentText) {
  const [index, setIndex] = useState(0);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    if (strings?.length) setKeys(strings.map(() => keygen()));
  }, [strings]);

  useInterval(
    () => {
      if (strings?.length) setIndex((prevIndex) => (prevIndex + 1) % strings?.length);
    },
    speed,
    true,
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keys[index]}
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
