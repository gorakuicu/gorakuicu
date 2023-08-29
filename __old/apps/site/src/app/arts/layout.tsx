import '~/styles/globals.css';

import React from 'react';

import { url } from '~/constants/metadata';
import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'Arts, crafts, NFT and other NSFW works',
  description:
    'Arts, crafts, NFT and other NSFW works by goraku.icu, including but not limited to: photography, drawings, paintings, sculptures, and other works of art.',
  alternates: {
    canonical: `${url}/arts`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
