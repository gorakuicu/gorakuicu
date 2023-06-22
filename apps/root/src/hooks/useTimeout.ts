import { useEffect, useRef } from 'react';

type TVoid = () => void;

export function useTimeout(callback: TVoid, delay: number, deps?: any[]) {
  const savedCallback = useRef(function () {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const id = setTimeout(tick, delay);

    return () => clearTimeout(id);
  }, [delay, ...(deps || [])]);
}
