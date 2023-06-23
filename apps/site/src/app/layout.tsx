import '@/styles/globals.css';

import clsx from 'clsx';
import { Fira_Sans, Inter, Lekton } from 'next/font/google';
import React from 'react';

import { mt } from '@/constants/metadata';
import Head from '@/features/layout/Head';
import SSRLayout from '@/features/layout/SSRLayout';

const firaCode = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-code',
});

const lekton = Lekton({
  weight: ['700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-label',
});

const inter = Inter({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-common',
});

export const metadata = mt;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`'dark' ${inter.variable} ${lekton.variable} ${firaCode.variable}`}
      lang="en"
    >
      <Head />
      <body className={clsx(inter.className, 'background_gradient_assets')}>
        <SSRLayout>{children}</SSRLayout>
      </body>
    </html>
  );
}
