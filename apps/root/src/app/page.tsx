'use client';

import { DefaultSeo } from 'next-seo';
import { Suspense, useState } from 'react';

import Modal from '~/features/common/Modal';
import Navbar from '~/features/common/Navbar/Navbar';
import Spinner from '~/features/common/Spinner';
import { useGoogleTag } from '~/hooks/useGoogleTag';
import SEO from '~/next-seo.config';
import { acceptNSFW, checkNSFW } from '~/utils/checkNSFW';

export default function Home() {
  useGoogleTag();

  const [acceptedNSFW, setAcceptedNSFW] = useState<boolean>(checkNSFW());

  const navbarMock = {
    label: 'aikoicu',
    menu: [
      {
        active: true,
        href: '#',
        label: 'Home',
      },
      {
        active: false,
        href: '#',
        label: 'About',
      },
    ],
    social: [
      {
        alt: 'Twitter',
        href: 'https://twitter.com/aikoicu',
        src: '/assets/twitter.svg',
      },
    ],
  };

  return (
    <>
      <Navbar {...navbarMock} />
      <main className="flex min-h-screen w-full flex-grow flex-col p-4 sm:p-6 md:p-8">
        <DefaultSeo {...SEO} />
        <label className="btn hidden" htmlFor="check-nsfw">
          Check NSFW
        </label>
        <Modal
          blur
          description="Are you 18+?"
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
        <Suspense fallback={<Spinner />}>
          <div className="flex min-h-screen flex-col items-center justify-between">1</div>
        </Suspense>
      </main>
    </>
  );
}
