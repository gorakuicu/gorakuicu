import type { LinksFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';

import { LiveReload, useSWEffect } from '@remix-pwa/sw';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  // LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { enableMapSet } from 'immer';

import styles from '~/application/styles/index.css';

import { Providers } from './application/providers';
import { defaultMeta } from './shared/constants/default-meta';
import { ScrollToTop } from './shared/ui/common/scroll-to-top';
import { CookieNotificationCard } from './shared/ui/cookies/cookies-notification-card';
import { AgeVerificationModal } from './shared/ui/modals/age-verification';

enableMapSet();

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ href: cssBundleHref, rel: 'stylesheet' }] : []),
  { href: styles, rel: 'stylesheet' },
];

export const meta: MetaFunction = () => defaultMeta;

export default function App() {
  useSWEffect();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="#9750dd" name="theme-color" />
        <meta content="RTA-5042-1996-1400-1577-RTA" name="RATING" />
        <meta content="General" name="rating" />
        <meta content="Global" name="distribution" />
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/fonts/index.css" rel="stylesheet" type="text/css" />
        <link
          href="/images/favicons/apple-icon-57x57.png"
          rel="apple-touch-icon"
          sizes="57x57"
        />
        <link
          href="/images/favicons/apple-icon-60x60.png"
          rel="apple-touch-icon"
          sizes="60x60"
        />
        <link
          href="/images/favicons/apple-icon-72x72.png"
          rel="apple-touch-icon"
          sizes="72x72"
        />
        <link
          href="/images/favicons/apple-icon-76x76.png"
          rel="apple-touch-icon"
          sizes="76x76"
        />
        <link
          href="/images/favicons/apple-icon-114x114.png"
          rel="apple-touch-icon"
          sizes="114x114"
        />
        <link
          href="/images/favicons/apple-icon-120x120.png"
          rel="apple-touch-icon"
          sizes="120x120"
        />
        <link
          href="/images/favicons/apple-icon-144x144.png"
          rel="apple-touch-icon"
          sizes="144x144"
        />
        <link
          href="/images/favicons/apple-icon-152x152.png"
          rel="apple-touch-icon"
          sizes="152x152"
        />
        <link
          href="/images/favicons/apple-icon-180x180.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/images/favicons/apple-icon-precomposed.png"
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          type="image/png"
        />
        <Meta />
        <Links />
      </head>
      <body className="text-foreground bg-blurry-gradients bg-background dark min-h-screen">
        <Providers>
          <Outlet />
          <ScrollToTop />
          <AgeVerificationModal />
          <CookieNotificationCard />
          <ScrollRestoration />
          <Scripts />
        </Providers>
        <LiveReload port={8002} />
      </body>
    </html>
  );
}
