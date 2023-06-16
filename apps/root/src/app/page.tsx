'use client';

import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { Suspense, useState } from 'react';

import { useGoogleTag } from '@/hooks/useGoogleTag';
import SEO from '@/next-seo.config';
import { acceptNSFW, checkNSFW } from '@/utils/checkNSFW';

const Modal = dynamic(() => import('@/features/common/Modal'));
const Navbar = dynamic(() => import('@/features/common/Navbar/Navbar'));
const Spinner = dynamic(() => import('@/features/common/Spinner'));

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
        label: 'Arts',
        children: [
          {
            active: false,
            href: '#',
            label: 'Free',
          },
          {
            active: false,
            href: '#',
            label: 'NFT',
          },
          {
            active: false,
            href: '#',
            label: 'Paid',
          },
          {
            active: false,
            href: '#',
            label: 'Commissions',
          },
        ],
      },
      {
        active: false,
        href: '#',
        label: 'Links',
        children: [
          {
            active: false,
            href: '#',
            label: 'Social Media',
          },
          {
            active: false,
            href: '#',
            label: 'Contacts',
          },
          {
            active: false,
            href: '#',
            label: 'Communities',
          },
        ],
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
          description={
            <>
              This resource contains sensitive content.
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
        <Suspense fallback={<Spinner />}>
          <div
            className="flex min-h-screen flex-col items-center justify-between"
            style={{
              height: 10000,
            }}
          />
        </Suspense>
      </main>
    </>
  );
}
