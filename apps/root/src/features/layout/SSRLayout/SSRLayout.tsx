import React from 'react';

import Metrics from '@/features/layout/Metrics';
import NoScript from '@/features/layout/NoScript';
import Providers from '@/utils/providers';

export default function SSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Metrics />
      <NoScript />
      <Providers>{children}</Providers>
    </>
  );
}
