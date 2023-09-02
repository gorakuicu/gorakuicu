import type { ChildrenProperties } from '~/shared/types/layout/common';

import { Header } from './header';

export function CommonLayout(properties: ChildrenProperties) {
  const { children } = properties;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
