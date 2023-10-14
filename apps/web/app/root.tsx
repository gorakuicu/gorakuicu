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
import { useNextuiFixes } from './shared/lib/hooks/use-nextui-fixes';
import { ScrollToTop } from './shared/ui/common/scroll-to-top';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ href: cssBundleHref, rel: 'stylesheet' }] : []),
  { href: styles, rel: 'stylesheet' },
];

export const meta: MetaFunction = () => defaultMeta;

export default function App() {
  useSWEffect();
  useNextuiFixes();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <link href="/site.webmanifest" rel="manifest" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground dark min-h-screen">
        <LiveReload />
        <Providers>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
