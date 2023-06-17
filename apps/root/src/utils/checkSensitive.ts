'use client';

export function acceptSensitive() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('acceptedSensitiveContent', 'true');
  }
}

export function checkSensitive() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('acceptedSensitiveContent') === 'true';
  }

  return true;
}
