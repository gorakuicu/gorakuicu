import { useEffect, useRef } from 'react';

type TVoid = () => void;

export function useInterval(callback: TVoid, delay: number, runInitially = false) {
  const savedCallback = useRef<TVoid>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (runInitially) tick();

    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
}
