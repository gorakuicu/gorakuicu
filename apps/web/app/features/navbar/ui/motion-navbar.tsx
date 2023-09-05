import type { NavbarProps } from '@nextui-org/react';

import { Navbar } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { forwardRef, memo } from 'react';

const MotionNavbarBase = memo(
  forwardRef<HTMLElement, Readonly<NavbarProps>>(
    (
      properties: Readonly<NavbarProps>,
      reference: React.ForwardedRef<HTMLElement>,
    ) => {
      return <Navbar ref={reference} {...properties} />;
    },
  ),
);

MotionNavbarBase.displayName = 'MotionNavbarBase';

const MotionNavbar = motion(MotionNavbarBase);

MotionNavbar.displayName = 'MotionNavbar';

export { MotionNavbar };
