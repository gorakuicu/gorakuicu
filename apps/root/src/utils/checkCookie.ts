'use client';

import { haveLocalStorage } from '@/utils/checkEnv';

export function acceptCookie() {
  if (haveLocalStorage()) {
    localStorage.setItem('allowCookie', 'true');
  }
}

export function checkCookie() {
  if (haveLocalStorage()) {
    return Boolean(localStorage.getItem('allowCookie'));
  }

  return false;
}
