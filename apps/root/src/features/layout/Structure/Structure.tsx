'use client';

import clsx from 'clsx';
import { DefaultSeo } from 'next-seo';
import { Suspense } from 'react';

import { internalLinks } from '@/constants/links';
import { navbarLinks } from '@/constants/links';
import Cookie from '@/features/common/Cookie';
import Spinner from '@/features/common/Spinner';
import Footer from '@/features/layout/Footer';
import Navbar from '@/features/layout/Navbar';
import CheckSensitiveContent from '@/features/single/CheckSensitiveContent';
import ScrollBack from '@/features/single/ScrollBack';
import { useGoogleTag } from '@/hooks/useGoogleTag';
import SEO from '@/next-seo.config';

export interface StructureProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Structure({ children, className }: StructureProps) {
  useGoogleTag();

  return (
    <>
      <Navbar {...navbarLinks} />
      <main className={clsx('mx-auto flex w-4/6 flex-grow flex-col p-4 sm:p-6 md:p-8', className)}>
        <DefaultSeo {...SEO} />
        <CheckSensitiveContent />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
      <Footer links={internalLinks} />
      <ScrollBack />
      <Cookie />
    </>
  );
}
