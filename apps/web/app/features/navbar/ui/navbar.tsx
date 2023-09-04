import { Spacer } from '@nextui-org/react';

import { NavbarBrand } from '~/shared/ui/brand/brand';

import { useScrollPosition } from '../lib/use-scroll-position';
import { MotionNavbar } from './motion-navbar';
import { NavbarLinks } from './navbar-links';

export function Navbar() {
  const { isScrolled, onChangeScroll } = useScrollPosition();

  const animationProperties = {
    animate: {
      borderRadius: isScrolled ? 0 : '1.5rem',
      transition: {
        duration: 0.2,
      },
      width: isScrolled ? 'auto' : 'max-content',
    },
    initial: {
      borderRadius: '1.5rem',
      width: 'max-content',
    },
  };

  return (
    <>
      <div className="h-8" />
      <MotionNavbar
        key="navbar"
        {...animationProperties}
        className="mx-auto w-max justify-around rounded-3xl bg-zinc-900/60"
        isBordered
        onScrollPositionChange={onChangeScroll}
      >
        <NavbarBrand />
        <Spacer x={2} />
        <NavbarLinks />
      </MotionNavbar>
      <div className="h-8" />
    </>
  );
}
