import {
  type ComponentType,
  Fragment,
  type ReactNode,
  createElement,
} from 'react';

import { list } from './list';

type ProvidersProperties = {
  children: ReactNode;
  providers?: ComponentType[];
};

export function Providers({
  children,
  providers = list as ComponentType[],
}: ProvidersProperties) {
  return createElement(Fragment, {}, wrapWithProviders(children, providers));
}

function wrapWithProviders(
  children: ReactNode,
  providers: ComponentType[],
): ReactNode {
  if (providers.length === 0) {
    return children;
  }

  const [Provider, ...rest] = providers;

  const element = wrapWithProviders(children, rest);

  return createElement(Provider as React.ElementType, {}, element);
}
