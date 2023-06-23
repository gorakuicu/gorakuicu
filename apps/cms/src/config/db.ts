import { BaseKeystoneTypeInfo, DatabaseConfig } from '@keystone-6/core/types';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const DATABASE_LOCAL = process?.env?.DATABASE_LOCAL === '1';
const DATABASE_URL = DATABASE_LOCAL ? process?.env?.DATABASE_LOCAL_URL : process?.env?.DATABASE_URL;
// const DATABASE_SHADOW_URL = DATABASE_LOCAL
//   ? process?.env?.DATABASE_LOCAL_SHADOW_URL
//   : process?.env?.DATABASE_SHADOW_URL;

process.env.DATABASE_URL = DATABASE_URL;
// process.env.DATABASE_SHADOW_URL = DATABASE_SHADOW_URL;

export const db: DatabaseConfig<BaseKeystoneTypeInfo> = {
  provider: 'postgresql',
  url: process.env.DATABASE_URL || '',
  // shadowDatabaseUrl: DATABASE_SHADOW_URL || '',
  idField: { kind: 'uuid' },
  enableLogging: true,
  // useMigrations: true,
};
