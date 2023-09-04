import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    // general meta tags
    { title: "gorakuicu - 🥵 NSFW author's marketplace" },
    { content: "🥵 NSFW author's marketplace goraku.icu", name: 'description' },
    { content: 'gorakuicu', name: 'apple-mobile-web-app-title' },
    { content: 'gorakuicu', name: 'application-name' },
    { content: '#f1f0ef', name: 'msapplication-TileColor' },
    { content: '#9750dd', name: 'theme-color' },

    // open graph tags
    {
      content: "gorakuicu - 🥵 NSFW author's marketplace",
      property: 'og:title',
    },
    {
      content: "🥵 NSFW author's marketplace goraku.icu",
      property: 'og:description',
    },
    { content: 'https://goraku.icu', property: 'og:url' },
    { content: 'https://goraku.icu/meta/opengraph.png', property: 'og:image' },

    // twitter
    { content: 'summary_large_image', name: 'twitter:card' },
    {
      content: "gorakuicu - 🥵 NSFW author's marketplace",
      name: 'twitter:title',
    },
    {
      content: "🥵 NSFW author's marketplace goraku.icu",
      name: 'twitter:description',
    },
    {
      content: 'https://goraku.icu/meta/twitter.png',
      name: 'twitter:image',
    },
  ];
};
