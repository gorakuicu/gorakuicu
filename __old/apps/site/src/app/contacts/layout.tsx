import '~/styles/globals.css';

import React from 'react';

import { url } from '~/constants/metadata';
import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'Links, social media and contacts',
  description: 'Links, social media, and other contact information for goraku.icu',
  alternates: {
    canonical: `${url}/contacts`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
