import React from 'react';

import NoScript from '~/features/layout/NoScript';
import Providers from '~/providers';

export default function SSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoScript />
      <Providers>{children}</Providers>
    </>
  );
}
