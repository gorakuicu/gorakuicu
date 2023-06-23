import '~/styles/globals.css';

import React from 'react';

import { url } from '~/constants/metadata';
import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for aiko.icu',
  alternates: {
    canonical: `${url}/terms`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
