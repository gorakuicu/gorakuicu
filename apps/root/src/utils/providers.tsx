'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <IconContext.Provider value={useMemo(() => ({ color: 'white' }), [])}>
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}
