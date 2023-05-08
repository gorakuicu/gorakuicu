import type { GraphQLConfig } from '@keystone-6/core/types';

export const graphql: GraphQLConfig = {
  debug: process.env.NODE_ENV !== 'production',
  path: '/api/graphql',
  // apolloConfig: {
  //   debug: true,
  // },
};
