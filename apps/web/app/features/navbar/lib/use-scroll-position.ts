import { useCallback, useDeferredValue, useState } from 'react';

export function useScrollPosition() {
  const [isScrolled, setIsScrolled] = useState(false);

  const onChangeScroll = useCallback(
    (position: number) => {
      const intPosition = Number.parseInt(position.toString(), 10);

      const reached = intPosition > 32;

      if (!reached) {
        setIsScrolled(false);
      } else if (reached && !isScrolled) {
        setIsScrolled(true);
      }
    },
    [isScrolled],
  );

  return useDeferredValue({ isScrolled, onChangeScroll });
}
