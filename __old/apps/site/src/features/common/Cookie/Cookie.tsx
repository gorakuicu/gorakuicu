'use client';

import { motion } from 'framer-motion';
import { prefix } from 'inline-style-prefixer';
import { useCallback, useRef, useState } from 'react';

import Href from '~/features/common/Href';
import { useInterval } from '~/hooks/useInterval';
import { acceptCookie, checkCookie } from '~/utils/checkCookie';

export default function Cookie() {
  const ref = useRef<HTMLDivElement>(null);
  const [cookieHeight, setCookieHeight] = useState(0);
  const [acceptedCookie, setAcceptedCookie] = useState<boolean>(checkCookie() || false);

  const accept = useCallback(() => {
    try {
      acceptCookie();
    } catch (error) {
      console.error(error);
    } finally {
      setAcceptedCookie(checkCookie());
    }
  }, []);

  useInterval(
    () => {
      setCookieHeight(ref?.current?.clientHeight ?? 0);
      setAcceptedCookie(checkCookie());
    },
    2000,
    true,
  );

  if (acceptedCookie) return null;

  return (
    <div className="cookie" data-id="cookie" id="cookie" role="alert">
      <div style={prefix({ height: cookieHeight })} />
      <motion.div
        key="cookie"
        ref={ref}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50"
        initial={{ y: 100 }}
        transition={{
          y: { type: 'tween' },
          duration: 2,
        }}
      >
        <div className="flex items-center justify-center bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] px-4 py-2 text-white">
          <div className="drop-shadow-lg">
            <p className="shadow-black">
              This website uses cookies. See our{' '}
              <Href className="font-bold text-white hover:text-black" href="/terms">
                Terms of Service
              </Href>
              ,{' '}
              <Href className="font-bold text-white hover:text-black" href="/privacy">
                Privacy Policy
              </Href>
              ,{' '}
              <Href className="font-bold text-white hover:text-black" href="/cookie">
                Cookie Policy
              </Href>{' '}
            </p>
          </div>
          <button
            aria-controls="cookie"
            aria-expanded="false"
            aria-label="Accept cookie"
            className="btn btn-xs text-accent ml-2 h-auto p-4 text-center align-middle font-bold"
            onClick={accept}
          >
            Accept
          </button>
        </div>
      </motion.div>
    </div>
  );
}
