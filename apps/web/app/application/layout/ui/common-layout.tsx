import type { ChildrenProperties } from '~/shared/types/layout/common';

import { Footer } from '~/application/footer';
import { Header } from '~/application/header';

export function CommonLayout({ children }: ChildrenProperties) {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full flex-col px-6 py-8 md:w-3/5 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
