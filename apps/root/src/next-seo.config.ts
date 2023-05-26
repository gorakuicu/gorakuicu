import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'aiko.icu',
  titleTemplate: '%s',
  description: 'NSFW',
  canonical: 'https://aiko.icu',
  themeColor: '#1f2937',
  defaultTitle: 'aiko.icu',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico?v=2',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png?v=2',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png?v=2',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-196x196.png',
      sizes: '196x196',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png?v=2',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest?v=2',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg?v=2',
      color: '#9750dd',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico?v=2',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#9750dd',
    },
    {
      name: 'msapplication-TileImage',
      content: '/mstile-144x144.png',
    },
    {
      name: 'msapplication-square310x310logo',
      content: '/mstile-310x310.png',
    },
    {
      name: 'theme-color',
      content: '#1f2937',
    },
    {
      name: 'application-name',
      content: 'aiko.icu',
    },
    {
      name: 'description',
      content: 'NSFW',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://aiko.icu',
    siteName: 'aiko.icu',
    title: 'aiko.icu',
    description: 'NSFW',
    images: [
      {
        url: 'https://aiko.icu/social.jpg',
        width: 1000,
        height: 1000,
        alt: 'aiko.icu',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
