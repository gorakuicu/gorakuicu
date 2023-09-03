import { Spacer } from '@nextui-org/react';

import { NavbarBrand } from '~/shared/ui/brand/brand';

import { useScrollPosition } from '../lib/use-scroll-position';
import { MotionNavbar } from './motion-navbar';
import { NavbarLinks } from './navbar-links';

export function Navbar() {
  const { isScrolled = false, onChangeScroll = () => {} } = useScrollPosition();

  const animationProperties = {
    initial: true,
    animate: {
      width: isScrolled ? 'auto' : 'max-content',
      borderRadius: isScrolled ? 0 : '1.5rem',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <div className="h-8" />
      <MotionNavbar
        {...animationProperties}
        isBordered
        className="bg-gray-800 bg-opacity-50 mx-auto justify-around"
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
