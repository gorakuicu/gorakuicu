import { checkHasWindow } from './checkEnv';

export function isBot() {
  if (checkHasWindow()) {
    const userAgent = window?.navigator?.userAgent || window?.navigator?.vendor || '';
    const regex =
      /bot|googlebot|crawler|spider|robot|crawling|Chrome-Lighthouse|Google Page Speed/i;

    return regex.test(userAgent);
  }

  return false;
}
