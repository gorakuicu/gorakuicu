import type { PanInfo } from 'framer-motion';

import { Image } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, memo } from 'react';

const sliderVariants = {
  active: { opacity: 1, scale: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0.2,
    scale: 1,
    x: direction > 0 ? '-10%' : '10%',
  }),
  incoming: (direction: number) => ({
    opacity: 0,
    scale: 1.2,
    x: direction > 0 ? '10%' : '-10%',
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const dragConstraints = {
  left: 0,
  right: 0,
};

interface PreviewProperties {
  currentImage: number;
  direction: number;
  dragEndHandler: (event: TouchEvent, dragInfo: PanInfo) => void;
  imageClassNames: { blurredImg: string; img: string; wrapper: string };
  onLoad: () => void;
  ref: React.Ref<HTMLImageElement>;
  src: string;
}

const PreviewForward = forwardRef<HTMLImageElement, PreviewProperties>(
  (
    { currentImage, direction, dragEndHandler, imageClassNames, onLoad, src },
    reference,
  ) => {
    return (
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          animate="active"
          className="mx-auto flex h-full max-h-[80%] w-full max-w-[98%] items-center justify-center"
          custom={direction}
          drag="x"
          dragConstraints={dragConstraints}
          key={currentImage}
          onDragEnd={dragEndHandler}
          transition={sliderTransition}
          variants={sliderVariants}
        >
          <Image
            alt=""
            classNames={imageClassNames}
            isBlurred
            onLoad={onLoad}
            radius="sm"
            ref={reference}
            src={src}
          />
        </motion.div>
      </AnimatePresence>
    );
  },
);

PreviewForward.displayName = 'PreviewForward';

const Preview = memo(PreviewForward);

Preview.displayName = 'Preview';

export { Preview };
