import type { NavbarProps } from '@nextui-org/react';

import { Navbar } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const MotionNavbarBase = forwardRef<HTMLElement, NavbarProps>(
  (properties, reference) => {
    return <Navbar ref={reference} {...properties} />;
  },
);

MotionNavbarBase.displayName = 'MotionNavbarBase';

MotionNavbarBase.displayName = 'MotionNavbarBase';

const MotionNavbar = motion(MotionNavbarBase);

MotionNavbar.displayName = 'MotionNavbar';

export { MotionNavbar };
