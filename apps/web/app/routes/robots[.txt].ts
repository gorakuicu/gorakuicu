import { generateRobotsTxt } from '@nasa-gcn/remix-seo';

import { CANONICAL_URL } from '~/shared/constants/common';

export function loader() {
  return generateRobotsTxt([
    {
      type: 'sitemap',
      value: `${CANONICAL_URL}/sitemap.xml`,
    },
    { type: 'disallow', value: '/api' },
  ]);
}
