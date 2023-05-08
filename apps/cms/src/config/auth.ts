import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import { randomBytes } from 'crypto';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'email id isAdmin createdAt',
  secretField: 'password',
  initFirstItem: {
    fields: ['email', 'password', 'isAdmin'],
    itemData: { isAdmin: true },
    skipKeystoneWelcome: true,
  },
});

const session = statelessSessions({
  maxAge: 60 * 60 * 24 * 30,
  secret:
    process.env.SESSION_SECRET ||
    (process.env.NODE_ENV !== 'production' && randomBytes(32).toString('hex')),
  // secure: process.env.NODE_ENV === 'production',
  secure: false,
  sameSite: 'lax',
});

export { session, withAuth };
