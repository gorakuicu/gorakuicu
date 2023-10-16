import type { LinksFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';

import { useSWEffect } from '@remix-pwa/sw';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from '~/application/styles/index.css';

import { Providers } from './application/providers';
import { defaultMeta } from './shared/constants/default-meta';
import { ScrollToTop } from './shared/ui/common/scroll-to-top';

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
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/fonts/index.css" rel="stylesheet" type="text/css" />
        <Meta />
        <Links />
      </head>
      <body className="text-foreground bg-blurry-gradients bg-background dark min-h-screen">
        <Providers>
          <Outlet />
          <ScrollToTop />
          <ScrollRestoration />
          <LiveReload />
          <Scripts />
        </Providers>
      </body>
    </html>
  );
}
