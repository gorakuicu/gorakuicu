import { Chip, Spacer } from '@nextui-org/react';
import clsx from 'clsx';
import { memo } from 'react';

import { Navbar } from '~/features/navbar/ui/navbar';
import { useScrollPosition } from '~/shared/lib/hooks/use-scroll-position';
import { NavbarBrand } from '~/shared/ui/brand/brand';
import { Description } from '~/shared/ui/brand/description';

import { MotionHeader } from './motion-navbar';

const descriptionClassNames = {
  container: '!m-0',
  text: '!text-inherit',
};

export const Header = memo(() => {
  const { isScrolled, onChangeScroll } = useScrollPosition();

  const animationProperties = {
    animate: {
      borderRadius: isScrolled ? 0 : '1.5rem',
      transition: {
        duration: 0.2,
      },
      width: isScrolled ? '100%' : 'max-content',
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
        className="add-texture mx-auto w-max rounded-3xl bg-[#1A1A1A]/50 backdrop-blur-md"
        isBordered
        onScrollPositionChange={onChangeScroll}
      >
        <div className="flex w-full justify-between">
          <NavbarBrand />
          <Spacer x={4} />
          <Chip
            className={clsx('my-auto hidden md:flex', {
              '!hidden': !isScrolled,
            })}
          >
            <Description classNames={descriptionClassNames} />
          </Chip>
          <Spacer x={2} />
          <Navbar />
        </div>
      </MotionHeader>
      <div className="h-8" />
    </>
  );
});

Header.displayName = 'Header';
