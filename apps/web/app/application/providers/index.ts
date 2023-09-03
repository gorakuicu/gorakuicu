import {
  type ComponentType,
  createElement,
  Fragment,
  type ReactNode,
} from 'react';

import { list } from './list';

type ProvidersProperties = {
  providers?: ComponentType[];
  children: ReactNode;
};

export function Providers({
  providers = list as ComponentType[],
  children,
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
