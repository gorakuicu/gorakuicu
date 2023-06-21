import type { Metadata } from 'next';

const domain = 'aiko.icu';
const url = `https://${domain}`;

const mt: Metadata = {
  title: {
    template: '%s — aikoicu',
    default: 'aikoicu',
    absolute: 'aikoicu — NSFW 18+ arts',
  },
  description:
    'Not Safe For Work 18+ content (images, videos, etc.) from aikoicu for the aikoicu community and sell them as NFTs. or just enjoy them.',
  generator: 'aikoicu',
  applicationName: 'aikoicu',
  category: 'NSFW',
  referrer: 'origin-when-cross-origin',
  keywords: ['aikoicu', 'aiko.icu', 'nsfw', 'aiko', 'aiko icu'],
  authors: [{ name: 'aikoicu' }],
  colorScheme: 'dark',
  creator: 'aikoicu',
  publisher: 'aikoicu',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://aiko.icu'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  icons: {
    icon: '/favicon-128x128.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  openGraph: {
    title: 'aiko.icu',
    description:
      'Not Safe For Work 18+ content (images, videos, etc.) from aikoicu for the aikoicu community and sell them as NFTs. or just enjoy them.',
    url: 'https://aiko.icu',
    siteName: 'aiko.icu',
    images: [
      {
        url: 'https://aiko.icu/social.jpg',
        width: 1000,
        height: 1000,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aiko.icu',
    description:
      'Not Safe For Work 18+ content (images, videos, etc.) from aikoicu for the aikoicu community and sell them as NFTs. or just enjoy them.',
    images: ['https://aiko.icu/social.jpg'],
  },
  appleWebApp: {
    title: 'aiko.icu',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-icon.png',
      {
        url: '/assets/startup/apple-touch-icon.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
    },
  },
  manifest: 'https://aiko.icu/manifest.json',
};

export { domain, mt, url };
