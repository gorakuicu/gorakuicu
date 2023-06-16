import '../styles/globals.css';

import React from 'react';

import SSRLayout from '@/features/layout/SSRLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
