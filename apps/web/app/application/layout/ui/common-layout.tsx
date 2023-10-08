import clsx from 'clsx';

import type { ChildrenProperties } from '~/shared/types/layout/common';

import { Footer } from '~/application/footer';
import { Header } from '~/application/header';

export function CommonLayout({
  children,
  mdx,
}: ChildrenProperties & { mdx?: boolean }) {
  return (
    <>
      <Header />
      <main
        className={clsx(
          'mx-auto flex w-full flex-col py-8 sm:px-6 md:w-3/4 lg:px-8',
          mdx && 'mdx',
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
