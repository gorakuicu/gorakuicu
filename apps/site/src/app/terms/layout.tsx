import '~/styles/globals.css';

import React from 'react';

import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for aiko.icu',
  alternates: {
    canonical: 'https://aiko.icu/terms',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
