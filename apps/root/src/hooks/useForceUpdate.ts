import { useCallback, useReducer } from 'react';

export function useForceUpdate() {
  const [, set] = useReducer((x) => x + 1, 0);

  return useCallback(() => set(), []);
}
