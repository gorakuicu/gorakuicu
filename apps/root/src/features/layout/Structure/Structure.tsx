'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { Suspense } from 'react';

import { navbarData } from '@/constants/navbar';
import CheckSensitiveContent from '@/features/single/CheckSensitiveContent';
import { useGoogleTag } from '@/hooks/useGoogleTag';
import SEO from '@/next-seo.config';

const Navbar = dynamic(() => import('@/features/layout/Navbar/Navbar'));
const Spinner = dynamic(() => import('@/features/common/Spinner'));
const Footer = dynamic(() => import('@/features/layout/Footer'));

export interface StructureProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Structure({ children, className }: StructureProps) {
  useGoogleTag();

  return (
    <Suspense fallback={<Spinner />}>
      <Navbar {...navbarData} />
      <main className={clsx('flex w-full flex-grow flex-col p-4 sm:p-6 md:p-8', className)}>
        <DefaultSeo {...SEO} />
        <CheckSensitiveContent />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
      <Footer />
    </Suspense>
  );
}
