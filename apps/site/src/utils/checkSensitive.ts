'use client';

import { checkHasLocalStorage } from '~/utils/checkEnv';

export function acceptSensitive() {
  if (checkHasLocalStorage()) {
    localStorage.setItem('acceptedSensitiveContent', 'true');
  }
}

export function checkSensitive() {
  if (checkHasLocalStorage()) {
    return Boolean(localStorage.getItem('acceptedSensitiveContent'));
  }

  return true;
}
