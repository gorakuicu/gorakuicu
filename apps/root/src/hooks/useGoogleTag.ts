'use client';

import { useEffect } from 'react';

import { useScript } from '@/hooks/useScript';
import { checkHasWindow } from '@/utils/checkEnv';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const evnNotForGoogleTag =
  !process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ||
  !checkHasWindow() ||
  !window?.dataLayer ||
  process.env.NODE_ENV !== 'production';

export function useGoogleTag(delay?: number) {
  const src = `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`;

  useEffect(() => {
    if (evnNotForGoogleTag) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  }, []);

  const status = useScript(src, delay || 6000, evnNotForGoogleTag);

  return status;
}
