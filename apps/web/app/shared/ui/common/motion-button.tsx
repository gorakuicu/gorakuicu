import type { ButtonProps } from '@nextui-org/react';

import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { forwardRef, memo } from 'react';

const MotionButtonBase = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (properties: ButtonProps, reference) => {
      return <Button ref={reference} {...properties} />;
    },
  ),
);

MotionButtonBase.displayName = 'MotionButtonBase';

const MotionButton = motion(MotionButtonBase);

MotionButton.displayName = 'MotionButton';

export { MotionButton };
