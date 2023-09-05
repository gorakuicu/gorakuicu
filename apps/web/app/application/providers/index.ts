import type { NextUIProviderProps } from '@nextui-org/react';
import type { ComponentType, ReactNode } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { Fragment, createElement } from 'react';

type ProvidersProperties = {
  children: ReactNode;
  providers?: ComponentType<NextUIProviderProps>[];
};

export const list: ComponentType<NextUIProviderProps>[] = [NextUIProvider];

export function Providers({ children, providers = list }: ProvidersProperties) {
  return createElement(Fragment, {}, wrapWithProviders(children, providers));
}

function wrapWithProviders(
  children: ReactNode,
  providers: ComponentType<NextUIProviderProps>[],
): ReactNode {
  if (providers.length === 0) {
    return children;
  }

  const [Provider, ...rest] = providers;

  if (!Provider) {
    return children;
  }

  const element = wrapWithProviders(children, rest);

  return createElement(Provider, { children: element });
}
