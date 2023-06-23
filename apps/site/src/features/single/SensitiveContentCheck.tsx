'use client';

import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

import Spinner from '@/features/common/Spinner';
import { useInterval } from '@/hooks/useInterval';
import { acceptSensitive, checkSensitive } from '@/utils/checkSensitive';
import { isBot } from '@/utils/isBot';

const Modal = dynamic(() => import('@/features/common/Modal'));

export default function SensitiveContentCheck() {
  const [acceptedSensitive, setAcceptedSensitive] = useState<boolean>(checkSensitive() || false);

  useInterval(
    () => {
      setAcceptedSensitive(checkSensitive());
    },
    2000,
    true,
  );

  return (
    <Suspense fallback={<Spinner />}>
      <label className="btn hidden" htmlFor="check-sensitive">
        Check Sensitive
      </label>
      <Modal
        blur={!isBot()}
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
