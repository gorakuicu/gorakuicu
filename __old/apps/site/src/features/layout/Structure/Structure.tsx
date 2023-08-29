'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { internalLinks, navbarLinks } from '~/constants/links';
import Spinner from '~/features/common/Spinner/Spinner';
import Footer from '~/features/layout/Footer';
import Navbar from '~/features/layout/Navbar';

const Cookie = dynamic(() => import('~/features/common/Cookie'));
const SensitiveContentCheck = dynamic(() => import('~/features/single/SensitiveContentCheck'));
const ScrollBack = dynamic(() => import('~/features/single/ScrollBack'));

export interface IStructureProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Structure({ children, className }: IStructureProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar {...navbarLinks} />
      <main className={clsx('mx-auto flex w-4/6 flex-grow flex-col p-4 md:p-6 lg:p-8', className)}>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
      <Footer links={internalLinks} />
      <ScrollBack />
      <SensitiveContentCheck />
      <Cookie />
    </Suspense>
  );
}
