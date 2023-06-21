'use client';

import { checkHasLocalStorage } from '@/utils/checkEnv';

export function acceptCookie() {
  if (checkHasLocalStorage()) {
    localStorage.setItem('allowCookie', 'true');
  }
}

export function checkCookie() {
  if (checkHasLocalStorage()) {
    return Boolean(localStorage.getItem('allowCookie'));
  }

  return false;
}
