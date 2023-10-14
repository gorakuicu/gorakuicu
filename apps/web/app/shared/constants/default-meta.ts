import {
  BRAND_NAME,
  CANONICAL_URL,
  DESCRIPTION_EMOJI,
  DOMAIN,
} from '~/shared/constants/common';

export const defaultMeta = [
  // general meta tags
  { title: `${BRAND_NAME} - ${DESCRIPTION_EMOJI}` },
  { content: `${DESCRIPTION_EMOJI} ${DOMAIN}`, name: 'description' },
  { content: BRAND_NAME, name: 'apple-mobile-web-app-title' },
  { content: BRAND_NAME, name: 'application-name' },
  { content: '#f1f0ef', name: 'msapplication-TileColor' },
  { content: '#9750dd', name: 'theme-color' },

  // open graph tags
  {
    content: `${BRAND_NAME} - ${DESCRIPTION_EMOJI}`,
    property: 'og:title',
  },
  {
    content: `${DESCRIPTION_EMOJI} ${DOMAIN}`,
    property: 'og:description',
  },
  { content: CANONICAL_URL, property: 'og:url' },
  { content: `${CANONICAL_URL}/meta/opengraph.png`, property: 'og:image' },

  // twitter
  { content: 'summary_large_image', name: 'twitter:card' },
  {
    content: `${BRAND_NAME} - ${DESCRIPTION_EMOJI}`,
    name: 'twitter:title',
  },
  {
    content: `${DESCRIPTION_EMOJI} ${DOMAIN}`,
    name: 'twitter:description',
  },
  {
    content: `${CANONICAL_URL}/meta/twitter.png`,
    name: 'twitter:image',
  },
];
