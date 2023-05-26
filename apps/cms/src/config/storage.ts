import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

import { StorageConfig } from '@keystone-6/core/types';

const S3_ACCESS_KEY = process?.env?.S3_ACCESS_KEY;
const S3_SECRET_KEY = process?.env?.S3_SECRET_KEY;
const S3_ENDPOINT = process?.env?.S3_REGION + '.' + process?.env?.S3_DOMAIN;
const S3_BUCKET = process?.env?.S3_BUCKET;
const S3_DIRECTORY = process?.env?.S3_DIRECTORY;
const S3_REGION = process?.env?.S3_REGION;
const S3_CDN = process?.env?.S3_CDN;

export const storage: Record<string, StorageConfig> = {
  s3image: {
    kind: 's3',
    type: 'image',
    bucketName: S3_BUCKET || '',
    region: S3_REGION || '',
    accessKeyId: S3_ACCESS_KEY || '',
    secretAccessKey: S3_SECRET_KEY || '',
    endpoint: `https://${S3_BUCKET}.${S3_ENDPOINT}/${S3_DIRECTORY}`,
    generateUrl: (path: string) => `https://${S3_CDN}}/${path}`,
    signed: { expiry: 5000 },
    forcePathStyle: true,
  },
  s3file: {
    kind: 's3',
    type: 'file',
    bucketName: S3_BUCKET || '',
    region: S3_REGION || '',
    accessKeyId: S3_ACCESS_KEY || '',
    secretAccessKey: S3_SECRET_KEY || '',
    endpoint: `https://${S3_BUCKET}.${S3_ENDPOINT}/${S3_DIRECTORY}`,
    generateUrl: (path: string) => `https://${S3_CDN}}/${path}`,
    signed: { expiry: 5000 },
    forcePathStyle: true,
  },
};
