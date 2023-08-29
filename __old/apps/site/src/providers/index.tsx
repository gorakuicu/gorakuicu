'use client';

import { MDXProvider } from '@mdx-js/react';
import { Props } from '@mdx-js/react/lib';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import Href from '~/features/common/Href';
import ScrollProgress from '~/features/common/ScrollProgress';
import useQueryClient from '~/hooks/useQueryClient';

import { MediaQueryProvider } from './MediaQueryProvider';

interface ProviderProps {
  children: React.ReactNode;
}

const components: Props['components'] = {
  a: (props) => <Href {...props} />,
};

export default function Providers({ children }: ProviderProps) {
  const client = useQueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={client}>
        <MediaQueryProvider>
          <MDXProvider components={components}>
            <ScrollProgress />
            {children}
          </MDXProvider>
        </MediaQueryProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
