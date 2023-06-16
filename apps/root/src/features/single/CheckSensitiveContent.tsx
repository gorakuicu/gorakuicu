import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

import Spinner from '@/features/common/Spinner';
import { acceptNSFW, checkNSFW } from '@/utils/checkNSFW';

const Modal = dynamic(() => import('@/features/common/Modal'));

export default function CheckSensitiveContent() {
  const [acceptedNSFW, setAcceptedNSFW] = useState<boolean>(checkNSFW());

  return (
    <Suspense fallback={<Spinner />}>
      <label className="btn hidden" htmlFor="check-nsfw">
        Check NSFW
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
        id="check-nsfw"
        opened={!acceptedNSFW}
        submit={{
          label: 'Yes',
          action: () => {
            acceptNSFW();
            setAcceptedNSFW(true);
          },
        }}
        title="NSFW"
      />
    </Suspense>
  );
}
