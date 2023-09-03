import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import type { V2_MetaFunction } from '@remix-run/react';
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
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
];

export const meta: V2_MetaFunction = () => {
  return [
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1',
    },
    { title: 'New Remix App' },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <Providers>
          <main className="dark text-foreground bg-background">
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
