import type { LoaderFunction } from '@remix-run/node';

import { json } from '@remix-run/node';

import { BRAND_NAME, DESCRIPTION } from '~/shared/constants/common';

export let loader: LoaderFunction = async () => {
  return json(
    {
      background_color: '#232325',
      description: DESCRIPTION,
      display: 'standalone',
      icons: [
        {
          color: '#9750dd',
          href: '/safari-pinned-tab.svg',
          rel: 'mask-icon',
          tagName: 'link',
        },
        {
          href: '/favicon-16x16.png',
          rel: 'icon',
          sizes: '16x16',
          tagName: 'link',
          type: 'image/png',
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          tagName: 'link',
          type: 'image/png',
        },
        {
          density: '0.75',
          sizes: '36x36',
          src: '/android-icon-36x36.png',
          type: 'image/png',
        },
        {
          density: '1.0',
          sizes: '48x48',
          src: '/android-icon-48x48.png',
          type: 'image/png',
        },
        {
          density: '1.5',
          sizes: '72x72',
          src: '/android-icon-72x72.png',
          type: 'image/png',
        },
        {
          density: '2.0',
          sizes: '96x96',
          src: '/android-icon-96x96.png',
          type: 'image/png',
        },
        {
          density: '2.0',
          sizes: '128x128',
          src: '/android-icon-128x128.png',
          type: 'image/png',
        },
        {
          density: '3.0',
          sizes: '144x144',
          src: '/android-icon-144x144.png',
          type: 'image/png',
        },
        {
          density: '4.0',
          sizes: '192x192',
          src: '/android-icon-192x192.png',
          type: 'image/png',
        },
        {
          density: '4.0',
          sizes: '384x384',
          src: '/android-icon-384x384.png',
          type: 'image/png',
        },
        {
          density: '5.0',
          sizes: '512x512',
          src: '/android-icon-512x512.png',
          type: 'image/png',
        },
      ],
      name: BRAND_NAME,
      short_name: BRAND_NAME,
      shortcuts: [
        {
          icons: [
            {
              purpose: 'any monochrome',
              sizes: '96x96',
              src: '/android-icon-96x96.png',
              type: 'image/png',
            },
          ],
          name: 'Homepage',
          url: '/',
        },
      ],
      start_url: '/',
      theme_color: '#9b4eef',
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    },
  );
};
