import React, { useEffect, useRef } from 'react';

type TVoid = () => void;

export function useTimeout(callback: TVoid, delay: number, deps: React.DependencyList = []) {
  const savedCallback = useRef<TVoid>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const id = setTimeout(tick, delay);

    return () => clearTimeout(id);
  }, [delay, ...deps]);
}
