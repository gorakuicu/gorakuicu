import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    // general meta tags
    { title: "gorakuicu - 🥵 NSFW author's marketplace" },
    { name: 'description', content: "🥵 NSFW author's marketplace goraku.icu" },
    { name: 'apple-mobile-web-app-title', content: 'gorakuicu' },
    { name: 'application-name', content: 'gorakuicu' },
    { name: 'msapplication-TileColor', content: '#f1f0ef' },
    { name: 'theme-color', content: '#9750dd' },

    // favicon and icon specific
    {
      tagName: 'link',
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      tagName: 'link',
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      tagName: 'link',
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-chrome-192x192.png',
    },
    {
      tagName: 'link',
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      tagName: 'link',
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      tagName: 'link',
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#9750dd',
    },

    // open graph tags
    {
      property: 'og:title',
      content: "gorakuicu - 🥵 NSFW author's marketplace",
    },
    {
      property: 'og:description',
      content: "🥵 NSFW author's marketplace goraku.icu",
    },
    { property: 'og:url', content: 'https://goraku.icu' },
    { property: 'og:image', content: 'https://goraku.icu/meta/opengraph.png' },

    // twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: "gorakuicu - 🥵 NSFW author's marketplace",
    },
    {
      name: 'twitter:description',
      content: "🥵 NSFW author's marketplace goraku.icu",
    },
    {
      name: 'twitter:image',
      content: 'https://goraku.icu/meta/twitter.png',
    },
  ];
};
