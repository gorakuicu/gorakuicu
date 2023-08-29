import { useContext } from 'react';

import { MediaQueryContext } from '~/providers/MediaQueryProvider';

export function useMediaQuery() {
  return useContext(MediaQueryContext);
}
