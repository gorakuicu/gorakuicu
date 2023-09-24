import type { Meta } from '@storybook/react';

// import { randLine } from '@ngneat/falso';

import { Footer } from './footer';

export default {
  component: ({ children }) => (
    <>
      {/* {randLine({ length: 14 })} */}
      <Footer />
      {children}
    </>
  ),
} satisfies Meta<typeof Footer>;

export const Basic = {};
