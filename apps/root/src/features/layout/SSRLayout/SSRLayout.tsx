import clsx from 'clsx';
import { Fira_Sans, Inter, Lekton } from 'next/font/google';
import React from 'react';

import Head from '@/features/layout/Head';
import Metrics from '@/features/layout/Metrics';
import NoScript from '@/features/layout/NoScript';
import Providers from '@/utils/providers';

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

export default function SSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`'dark' ${inter.variable} ${lekton.variable} ${firaCode.variable}`}
      lang="en"
    >
      <Head />
      <body className={clsx(inter.className, 'background_gradient_assets')}>
        <Metrics />
        <NoScript />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
