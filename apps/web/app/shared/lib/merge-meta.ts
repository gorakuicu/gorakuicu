import type { LoaderFunction, MetaFunction } from '@remix-run/node';
// import { defaultMeta } from '~/shared/constants/default-meta';

// defaultMeta = [
//   // general meta tags
//   { title: `${BRAND_NAME} - ${DESCRIPTION_EMOJI}` },
//   { content: `${DESCRIPTION_EMOJI} ${DOMAIN}`, name: 'description' },
//   { content: BRAND_NAME, name: 'apple-mobile-web-app-title' },
//   { content: BRAND_NAME, name: 'application-name' },
//   { content: '#f1f0ef', name: 'msapplication-TileColor' },
//   { content: '#9750dd', name: 'theme-color' },

//   // open graph tags
//   {
//     content: `${BRAND_NAME} - ${DESCRIPTION_EMOJI}`,
//     property: 'og:title',
//   },
//   {
//     content: `${DESCRIPTION_EMOJI} ${DOMAIN}`,
//     property: 'og:description',
//   },
//   { content: CANONICAL_URL, property: 'og:url' },
//   { content: `${CANONICAL_URL}/meta/opengraph.png`, property: 'og:image' },

//   // twitter
//   { content: 'summary_large_image', name: 'twitter:card' },
//   {
//     content: `${BRAND_NAME} - ${DESCRIPTION_EMOJI}`,
//     name: 'twitter:title',
//   },
//   {
//     content: `${DESCRIPTION_EMOJI} ${DOMAIN}`,
//     name: 'twitter:description',
//   },
//   {
//     content: `${CANONICAL_URL}/meta/twitter.png`,
//     name: 'twitter:image',
//   },
// ];

export const mergeMeta = <
  Loader extends LoaderFunction | unknown = unknown,
  ParentsLoaders extends Record<string, LoaderFunction | unknown> = Record<
    string,
    unknown
  >,
>(
  leafMetaFunction: MetaFunction<Loader, ParentsLoaders> = () => [],
): MetaFunction<Loader, ParentsLoaders> => {
  return (argument) => {
    let leafMeta = leafMetaFunction(argument);

    return argument.matches.reduceRight((accumulator, match) => {
      for (let parentMeta of match.meta) {
        let index = accumulator.findIndex(
          (meta) =>
            ('name' in meta &&
              'name' in parentMeta &&
              meta.name === parentMeta.name) ||
            ('property' in meta &&
              'property' in parentMeta &&
              meta.property === parentMeta.property) ||
            ('title' in meta && 'title' in parentMeta),
        );
        if (index == -1) {
          // Parent meta not found in acc, so add it
          accumulator.push(parentMeta);
        }
      }
      return accumulator;
    }, leafMeta);
  };
};
