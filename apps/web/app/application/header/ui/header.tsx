import { Spacer } from '@nextui-org/react';
import { memo } from 'react';

import { useScrollPosition } from '~/features/navbar/lib/use-scroll-position';
import { Navbar } from '~/features/navbar/ui/navbar';
import { NavbarBrand } from '~/shared/ui/brand/brand';

import { MotionHeader } from './motion-navbar';

export const Header = memo(() => {
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
      <MotionHeader
        key="navbar"
        {...animationProperties}
        className="mx-auto w-max justify-around rounded-3xl bg-zinc-900/60"
        isBordered
        onScrollPositionChange={onChangeScroll}
      >
        <NavbarBrand />
        <Spacer x={2} />
        <Navbar />
      </MotionHeader>
      <div className="h-8" />
    </>
  );
});

Header.displayName = 'Header';
