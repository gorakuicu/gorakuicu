import type { ImageProps } from '@nextui-org/react';

import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { forwardRef, memo } from 'react';

const MotionImageBase = memo(
  forwardRef<HTMLImageElement, ImageProps>(
    (properties: ImageProps, reference: React.Ref<HTMLImageElement>) => {
      return (
        <Image
          ref={reference as React.RefObject<HTMLImageElement>}
          {...properties}
        />
      );
    },
  ),
);

MotionImageBase.displayName = 'MotionImageBase';

const MotionImage = motion(MotionImageBase);

MotionImage.displayName = 'MotionImage';

export { MotionImage };
