import { S3Client } from '@aws-sdk/client-s3';

export function getClient() {
  return new S3Client({
    region: process.env.BUCKET_REGION,
    endpoint: process.env.BUCKET_ENDPOINT,
    credentials: {
      accessKeyId: process.env.BUCKET_ACCESS_KEY,
      secretAccessKey: process.env.BUCKET_SECRET_KEY
    }
  });
}

export const BUCKET_NAME = process.env.BUCKET_NAME;