import type { LoaderFunctionArgs } from '@remix-run/node';

import { generateSitemap } from '@nasa-gcn/remix-seo';
import { routes } from '@remix-run/dev/server-build';

import { CANONICAL_URL } from '~/shared/constants/common';

export function loader({ request }: LoaderFunctionArgs) {
  return generateSitemap(request, routes, {
    siteUrl: CANONICAL_URL,
  });
}
