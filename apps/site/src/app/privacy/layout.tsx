import '~/styles/globals.css';

import React from 'react';

import { url } from '~/constants/metadata';
import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for aiko.icu',
  alternates: {
    canonical: `${url}/privacy`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
