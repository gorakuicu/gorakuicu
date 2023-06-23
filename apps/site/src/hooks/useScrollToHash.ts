'use strict';
import { useEffect } from 'react';

export function useScrollToHash() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const urlObject = new URL(window.location.href);
        const hash = (urlObject?.hash || '#').replace(/#/, '');

        const element = document.getElementById(hash);

        if (element) element.scrollIntoView();
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
}
