import '@/styles/globals.css';

import React from 'react';

import SSRLayout from '@/features/layout/SSRLayout';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for aiko.icu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
