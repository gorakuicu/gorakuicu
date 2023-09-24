import type { ChildrenProperties } from '~/shared/types/layout/common';

import { Footer } from '~/application/footer';
import { Header } from '~/application/header';

export function CommonLayout(properties: ChildrenProperties) {
  const { children } = properties;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
