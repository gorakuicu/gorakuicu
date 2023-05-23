'use client';

import { useEffect } from 'react';

import { useScript } from './useScript';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function useGoogleTag(delay?: number) {
  const src = `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`;

  useEffect(() => {
    if (!window || !window.dataLayer) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  }, []);

  const status = useScript(src, delay || 6000);

  return status;
}
