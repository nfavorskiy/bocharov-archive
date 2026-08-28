import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { env } from '$env/dynamic/private';
import { resolveMediaUrl } from './mediaConfig.js';

let client;

// lazy singleton so routes/tests that never call this never need S3 credentials
function getClient() {
  if (!client) {
    client = new S3Client({
      region: env.BUCKET_REGION,
      endpoint: env.BUCKET_ENDPOINT,
      credentials: {
        accessKeyId: env.BUCKET_ACCESS_KEY,
        secretAccessKey: env.BUCKET_SECRET_KEY
      }
    });
  }
  return client;
}

export async function buildGalleryImages({ prefix, thumbBase, fullBase }) {
  const { Contents = [] } = await getClient().send(
    new ListObjectsV2Command({ Bucket: env.BUCKET_NAME, Prefix: prefix })
  );

  return Contents
    .map((obj) => obj.Key.split('/').pop())
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((filename) => ({
      filename,
      thumbSrc: resolveMediaUrl(thumbBase + '/' + encodeURI(filename)),
      fullSrc: resolveMediaUrl(fullBase + '/' + encodeURI(filename))
    }));
}