import type { ChildrenProperties } from '~/shared/types/layout/common';

import { Footer } from '~/application/footer';
import { Header } from '~/application/header';

export function CommonLayout({ children }: ChildrenProperties) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
