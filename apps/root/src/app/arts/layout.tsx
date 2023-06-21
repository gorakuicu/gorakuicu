import '@/styles/globals.css';

import React from 'react';

import SSRLayout from '@/features/layout/SSRLayout';

export const metadata = {
  title: 'Arts, crafts, NFT and other NSFW works',
  description:
    'Arts, crafts, NFT and other NSFW works by aiko.icu, including but not limited to: photography, drawings, paintings, sculptures, and other works of art.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
