import '../styles/globals.css';

import React from 'react';

import metadataBase from '@/constants/metadata';
import SSRLayout from '@/features/layout/SSRLayout';

export const metadata = metadataBase;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
