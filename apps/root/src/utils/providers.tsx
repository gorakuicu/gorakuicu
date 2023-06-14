'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';

import ScrollProgress from '~/features/common/ScrollProgress';
import useQueryClient from '~/hooks/useQueryClient';

export default function Providers({ children }: { children: React.ReactNode }) {
  const client = useQueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <IconContext.Provider value={useMemo(() => ({ color: 'white' }), [])}>
        <QueryClientProvider client={client}>
          <ScrollProgress />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}
