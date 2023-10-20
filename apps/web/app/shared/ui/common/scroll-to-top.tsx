import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import { memo, useCallback, useEffect } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';

import { useScrollPosition } from '~/shared/lib/hooks/use-scroll-position';

export const ScrollToTop = memo(() => {
  const { isScrolled, onChangeScroll } = useScrollPosition();

  const handleScroll = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      onChangeScroll(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onChangeScroll]);

  return (
    <Button
      aria-label="scroll-to-top-button"
      className={clsx('fixed bottom-5 right-5 capitalize', {
        hidden: !isScrolled,
      })}
      color="primary"
      isIconOnly
      onClick={handleScroll}
      size="sm"
      variant="shadow"
    >
      <AiFillCaretUp />
    </Button>
  );
});

ScrollToTop.displayName = 'ScrollToTop';
