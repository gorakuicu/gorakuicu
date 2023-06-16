import '../styles/globals.css';

import clsx from 'clsx';
import { Fira_Sans, Inter, Lekton } from 'next/font/google';
import React from 'react';

import { evnNotForGoogleTag } from '@/hooks/useGoogleTag';
import Providers from '@/utils/providers';
import { addGlassStyle } from '@/utils/styles';

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

export const metadata = {
  title: 'aikoicu - NSFW',
  description:
    'Not Safe For Work 18+ content (images, videos, etc.) from aikoicu for the aikoicu community and sell them as NFTs. or just enjoy them.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`'dark' ${inter.variable} ${lekton.variable} ${firaCode.variable}`}
      lang="en"
    >
      <head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="#1f2937" name="theme-color" />
        <meta
          key="apple-mobile-web-app-title"
          content="aiko.icu"
          name="apple-mobile-web-app-title"
        />
        <link href="/apple-touch-icon.png?v=2" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png?v=2" rel="icon" sizes="32x32" type="image/png" />
        <link href="/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/favicon-196x196.png" rel="icon" sizes="196x196" type="image/png" />
        <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
        <link href="/favicon-128x128.png" rel="icon" sizes="128x128" type="image/png" />
        <link href="/favicon-16x16.png?v=2" rel="icon" sizes="16x16" type="image/png" />
        <link href="/manifest.json" rel="manifest" />
        <link color="#9750dd" href="/safari-pinned-tab.svg?v=2" rel="mask-icon" />
        <link href="/favicon.ico?v=2" rel="shortcut icon" />
        <meta content="#9750dd" name="msapplication-TileColor" />
        <meta content="/mstile-144x144.png" name="msapplication-TileImage" />
        <meta content="/mstile-310x310.png" name="msapplication-square310x310logo" />
        <meta content="#1f2937" name="theme-color" />
        <meta key="application-name" content="aiko.icu" name="application-name" />
        <meta content="NSFW - aiko.icu" name="description" />
        <meta content="aiko.icu" property="og:title" />
        <meta content="NSFW - aiko.icu" property="og:description" />
        <meta content="https://aiko.icu/social.jpg" property="og:image" />
        <meta content="1000" property="og:image:width" />
        <meta content="1000" property="og:image:height" />
        <meta content="aiko.icu" property="og:image:alt" />
        <meta content="aiko.icu" property="og:site_name" />
        <meta content="https://aiko.icu" property="og:url" />
        <meta content="website" property="og:type" />

        <link href="https://aiko.icu" rel="canonical" />
        <link
          href="http://aiko.icu/search/search.xml"
          rel="search"
          title="aiko.icu"
          type="application/search+xml"
        />
      </head>
      <body className={clsx(inter.className, 'background_gradient_assets')}>
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.setAttribute("data-fr-theme", "dark")',
          }}
        />
        <noscript>
          {!evnNotForGoogleTag && (
            <iframe
              height="0"
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
              width="0"
            />
          )}
          <span
            className={addGlassStyle(
              'fixed left-2/4 top-2/4 z-50 -translate-x-2/4 translate-y-2/4 rounded-3xl p-2 text-center align-middle text-red-500 shadow-sm',
            )}
          >
            This website requires JavaScript to be enabled to function properly.
          </span>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
