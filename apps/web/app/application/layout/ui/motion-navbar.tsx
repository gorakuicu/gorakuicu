import type { NavbarProps } from '@nextui-org/react';

import { Navbar } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { forwardRef, memo } from 'react';

const MotionHeaderBase = memo(
  forwardRef<HTMLElement, Readonly<NavbarProps>>(
    (
      properties: Readonly<NavbarProps>,
      reference: React.ForwardedRef<HTMLElement>,
    ) => {
      return <Navbar ref={reference} {...properties} />;
    },
  ),
);

MotionHeaderBase.displayName = 'MotionHeaderBase';

const MotionHeader = motion(MotionHeaderBase);

MotionHeader.displayName = 'MotionHeader';

export { MotionHeader };
