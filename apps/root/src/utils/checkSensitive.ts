'use client';

import { haveLocalStorage } from '@/utils/checkEnv';

export function acceptSensitive() {
  if (haveLocalStorage()) {
    localStorage.setItem('acceptedSensitiveContent', 'true');
  }
}

export function checkSensitive() {
  if (haveLocalStorage()) {
    return Boolean(localStorage.getItem('acceptedSensitiveContent'));
  }

  return true;
}
