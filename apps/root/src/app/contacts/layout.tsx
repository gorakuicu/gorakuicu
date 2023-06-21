import '@/styles/globals.css';

import React from 'react';

import SSRLayout from '@/features/layout/SSRLayout';

export const metadata = {
  title: 'Links, social media and contacts',
  description: 'Links, social media, and other contact information for aiko.icu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
