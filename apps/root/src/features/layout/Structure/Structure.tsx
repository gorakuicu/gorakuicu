'use client';

import clsx from 'clsx';
import { DefaultSeo } from 'next-seo';
import { Suspense } from 'react';

import { footerLinks } from '@/constants/footerLinks';
import { navbarData } from '@/constants/navbar';
import Cookie from '@/features/common/Cookie';
import Spinner from '@/features/common/Spinner';
import Footer from '@/features/layout/Footer';
import Navbar from '@/features/layout/Navbar';
import CheckSensitiveContent from '@/features/single/CheckSensitiveContent';
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
      <Navbar {...navbarData} />
      <main className={clsx('mx-auto flex w-4/6 flex-grow flex-col p-4 sm:p-6 md:p-8', className)}>
        <DefaultSeo {...SEO} />
        <CheckSensitiveContent />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
      <Footer links={footerLinks} />
      <Cookie />
    </>
  );
}
