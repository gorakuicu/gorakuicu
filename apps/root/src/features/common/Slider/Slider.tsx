'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { prefix } from 'inline-style-prefixer';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';

import { useInterval } from '@/hooks/useInterval';
import { keygen } from '@/utils/keygen';

import css from './Slider.module.css';

export interface ISlider {
  images: string[];
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  delay?: number;
  objectFit?: CSSStyleDeclaration['objectFit'];
}

function wrap(min: number, max: number, value: number) {
  const rangeSize = max - min;

  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

// Move out functions that do not need to be recreated on each render
const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0.2 }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const transition = {
  x: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 0.5,
  },
  opacity: { duration: 0.1 },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export default function Slider({
  images,
  width = '100%',
  height = 300,
  autoplay: autoplayProp = true,
  delay = 6000,
  className = '',
  style = {},
  objectFit = 'cover',
  ...props
}: ISlider & React.HTMLAttributes<HTMLDivElement>) {
  const [[page, direction], setPage] = useState<number[]>([0, 0]);
  const [autoplay, setAutoplay] = useState<boolean>(autoplayProp);

  const imageIndex = useMemo<number>(() => wrap(0, images.length, page), [images.length, page]);

  const paginate = useCallback(
    (newDirection: number) => setPage([page + newDirection, newDirection]),
    [page],
  );

  const classNames = clsx(
    className,
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'rounded-3xl',
  );

  useInterval(
    () => {
      if (autoplay) paginate(1);
    },
    delay,
    autoplay,
  );

  const onMouseEnter = useCallback(() => autoplayProp && setAutoplay(false), []);
  const onMouseLeave = useCallback(() => setAutoplay(autoplayProp), [autoplayProp]);

  // Add basic input data check for safety
  if (!Array.isArray(images) || images.length === 0) {
    console.error('[Slider] requires a non-empty array of images.');

    return null;
  }

  return (
    <div
      {...props}
      className={classNames}
      style={prefix({
        width,
        height,
        ...style,
      })}
      onBlur={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={keygen(page)}
          animate="center"
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1.2}
          exit="exit"
          initial="enter"
          style={
            prefix({
              position: 'absolute',
              width: '100%',
              height,
              objectFit,
            }) as React.CSSProperties
          }
          transition={transition}
          variants={variants}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            fill
            alt={images?.[imageIndex]}
            className="rounded-3xl"
            draggable={false}
            priority={imageIndex === 0}
            src={images?.[imageIndex]}
            style={prefix({ objectFit: 'cover' })}
          />
        </motion.div>
      </AnimatePresence>
      <div
        className={css.next}
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
          paginate(1);
        }}
        onKeyDown={() => {}}
      >
        ‣
      </div>
      <div
        className={css.prev}
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
          paginate(-1);
        }}
        onKeyDown={() => {}}
      >
        ‣
      </div>
      <div className={css.dots}>
        {images.map((_, i) => (
          <div
            key={keygen()}
            className={clsx(css.dot, { [css.dot__active]: i === imageIndex })}
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              setPage([i, i - page]);
            }}
            onKeyDown={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
