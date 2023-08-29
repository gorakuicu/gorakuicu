import '~/styles/globals.css';

import React from 'react';

import { url } from '~/constants/metadata';
import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'License GNU',
  description: 'License for goraku.icu code — GNU General Public License v3.0',
  alternates: {
    canonical: `${url}/license/gnu`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
