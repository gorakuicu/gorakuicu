import dotenv from 'dotenv';
dotenv.config({ path: '../../.env.local' });

import { config } from '@keystone-6/core';

import { db, graphql, server, session, storage, withAuth } from './src/config';
import { lists } from './src/schemas';

export default withAuth(
  config({
    lists,
    server,
    session,
    db,
    storage,
    graphql,
  }),
);
