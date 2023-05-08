import '../styles/globals.css';

import React from 'react';

import Providers from '~/utils/providers';

export const metadata = {
  title: 'aikoicu - NSFW',
  description:
    'Not Safe For Work 18+ content (images, videos, etc.) from aikoicu for the aikoicu community and sell them as NFTs. or just enjoy them.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width" name="viewport" />
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
        <link href="/site.webmanifest?v=2" rel="manifest" />
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
        {/* eslint-disable-next-line react/no-danger */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.setAttribute("data-fr-theme", "dark")',
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
