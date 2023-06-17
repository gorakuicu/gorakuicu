'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { acceptCookie, checkCookie } from '@/utils/checkCookie';

import Href from '../Href/Href';

export default function Cookie() {
  const ref = useRef<HTMLDivElement>(null);
  const [cookieHeight, setCookieHeight] = useState(0);

  const [acceptedCookie, setAcceptedCookie] = useState<boolean>(checkCookie() || true);

  const accept = useCallback(() => {
    try {
      acceptCookie();
    } catch (error) {
      console.error(error);
    } finally {
      setAcceptedCookie(checkCookie());
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieHeight(ref?.current?.clientHeight ?? 0);
      setAcceptedCookie(checkCookie());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (acceptedCookie) return null;

  return (
    <div className="cookie" data-id="cookie" id="cookie" role="alert">
      <div style={{ height: cookieHeight }} />
      <motion.div
        ref={ref}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50"
        initial={{ y: 100 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] py-2 text-center text-white">
          <div className="drop-shadow-lg">
            <p className="shadow-black">
              This website uses cookies. See our{' '}
              <Href className="font-bold text-white hover:text-black" href="/privacy">
                Privacy Policy
              </Href>
              ,{' '}
              <Href className="font-bold text-white hover:text-black" href="/terms">
                Terms of Service
              </Href>
              ,{' '}
              <Href className="font-bold text-white hover:text-black" href="/cookie">
                Cookie Policy
              </Href>{' '}
              and{' '}
            </p>
          </div>
          <button className="btn btn-xs text-accent ml-2 font-bold" onClick={accept}>
            Accept
          </button>
        </div>
      </motion.div>
    </div>
  );
}
