'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { internalLinks } from '@/constants/links';
import { navbarLinks } from '@/constants/links';
import Spinner from '@/features/common/Spinner/Spinner';
import Footer from '@/features/layout/Footer';
import Navbar from '@/features/layout/Navbar';
import { useGoogleTag } from '@/hooks/useGoogleTag';

const Cookie = dynamic(() => import('@/features/common/Cookie'));
const CheckSensitiveContent = dynamic(() => import('@/features/single/CheckSensitiveContent'));
const ScrollBack = dynamic(() => import('@/features/single/ScrollBack'));

export interface StructureProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Structure({ children, className }: StructureProps) {
  useGoogleTag();

  return (
    <Suspense fallback={<Spinner />}>
      <Navbar {...navbarLinks} />
      <main className={clsx('mx-auto flex w-4/6 flex-grow flex-col p-4 sm:p-6 md:p-8', className)}>
        <CheckSensitiveContent />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
      <Footer links={internalLinks} />
      <ScrollBack />
      <Cookie />
    </Suspense>
  );
}
