import 'module-alias/register';

import { config } from '@keystone-6/core';
import dotenv from 'dotenv';

import { db, graphql, server, session, storage, withAuth } from './src/config';
import { lists } from './src/schemas';

dotenv.config({ path: '../../.env' });

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
