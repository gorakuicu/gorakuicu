import type { LinksFunction } from '@remix-run/node';
import type { V2_MetaFunction } from '@remix-run/react';

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

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ href: cssBundleHref, rel: 'stylesheet' }] : []),
  { href: styles, rel: 'stylesheet' },
];

export const meta: V2_MetaFunction = () => {
  return [
    {
      content: 'width=device-width,initial-scale=1',
      name: 'viewport',
    },
    { title: 'New Remix App' },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <Providers>
          <main className="bg-background text-foreground dark">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </main>
        </Providers>
      </body>
    </html>
  );
}
