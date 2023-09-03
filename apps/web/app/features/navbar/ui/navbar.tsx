import { Spacer } from '@nextui-org/react';

import { NavbarBrand } from '~/shared/ui/brand/brand';

import { useScrollPosition } from '../lib/use-scroll-position';
import { MotionNavbar } from './motion-navbar';
import { NavbarLinks } from './navbar-links';

export function Navbar() {
  const { isScrolled = false, onChangeScroll = () => {} } = useScrollPosition();

  const animationProperties = {
    animate: {
      borderRadius: isScrolled ? 0 : '1.5rem',
      transition: {
        duration: 0.2,
      },
      width: isScrolled ? 'auto' : 'max-content',
    },
    initial: true,
  };

  return (
    <>
      <div className="h-8" />
      <MotionNavbar
        {...animationProperties}
        className="mx-auto justify-around bg-zinc-900/60"
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
