import { useCallback, useEffect, useMemo, useState } from 'react';

import { checkHasWindow } from '@/utils/checkEnv';

export const useMediaQuery = (widthProp: number | string) => {
  const width = typeof widthProp === 'number' ? `${widthProp}px` : widthProp;
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => setTargetReached(!!e.matches), []);

  useEffect(() => {
    const hasWindow = checkHasWindow();

    if (!hasWindow) return;

    const media = window.matchMedia(`(max-width: ${width})`);

    media.addEventListener('change', updateTarget);
    if (media.matches) setTargetReached(true);

    return () => {
      if (hasWindow) media.removeEventListener('change', updateTarget);
    };
  }, []);

  return useMemo(() => targetReached, [targetReached]);
};
