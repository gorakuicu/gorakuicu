import { usePathname } from 'next/navigation';

import { checkHasWindow } from '@/utils/checkEnv';

type TActivePath = (href: string | undefined, strong?: boolean) => boolean;

export function useActivePath(): TActivePath {
  const currentPathname = usePathname();
  const hasWindow = checkHasWindow();

  if (!hasWindow) return () => false;
  const currentHash = window.location.hash;

  const checkActivePath = (href: string | undefined, strong = false): boolean => {
    // Ensure href is a string before processing
    if (typeof href !== 'string') return false;

    // Normalize href by removing query and hash fragments
    const normalizedHref = (() => {
      if (strong) return href.split('?')[0].split('#')[0];

      return href;
    })();

    // Return false if href is not valid or is an empty anchor
    if (!normalizedHref || normalizedHref === '#') return false;

    // Check for exact match with root path
    if (normalizedHref === '/') return currentPathname === normalizedHref;

    // If 'strong' is true, check for exact match, otherwise check if currentPathname starts with normalizedHref
    return strong
      ? currentPathname === normalizedHref
      : (currentPathname + currentHash).startsWith(normalizedHref);
  };

  // Use useCallback to memoize the function, so it doesn't get recreated on every render
  return checkActivePath;
}
