'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';

import Spinner from '@/features/common/Spinner';
import { acceptSensitive, checkSensitive } from '@/utils/checkSensitive';

const Modal = dynamic(() => import('@/features/common/Modal'));

export default function CheckSensitiveContent() {
  const [acceptedSensitive, setAcceptedSensitive] = useState<boolean>(checkSensitive());

  useEffect(() => {
    const interval = setInterval(() => {
      setAcceptedSensitive(checkSensitive());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <label className="btn hidden" htmlFor="check-sensitive">
        Check Sensitive
      </label>
      <Modal
        blur
        description={
          <>
            🍓 This resource contains sensitive content.
            <br />
            Do you want to continue?
          </>
        }
        id="check-sensitive"
        opened={!acceptedSensitive}
        submit={{
          label: 'Yes',
          action: () => {
            acceptSensitive();
            setAcceptedSensitive(true);
          },
        }}
        title="Sensitive"
      />
    </Suspense>
  );
}
