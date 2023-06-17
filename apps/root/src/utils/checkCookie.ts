'use client';

export function acceptCookie() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('allowCookie', 'true');
  }
}

export function checkCookie() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('allowCookie') === 'true';
  }

  return false;
}
