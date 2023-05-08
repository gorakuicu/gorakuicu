'use client';

export function acceptNSFW() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('acceptedNSFW', 'true');
  }
}

export function checkNSFW() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('acceptedNSFW') === 'true';
  }

  return true;
}
