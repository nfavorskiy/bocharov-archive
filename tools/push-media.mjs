import { readdir, readFile } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';
import { PutObjectCommand, paginateListObjectsV2, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getClient, BUCKET_NAME } from './lib/scwClient.mjs';

const mediaDir = 'media';
const client = getClient();
const noPrune = process.argv.includes('--no-prune');

// first arg that isn't a flag = optional subfolder to scope the push to
const target = process.argv.slice(2).find((a) => !a.startsWith('--'));
const scopedDir = target ? join(mediaDir, target) : mediaDir;
const keyPrefix = target ? relative(mediaDir, scopedDir).replace(/\\/g, '/') : undefined;

const CONTENT_TYPES = {
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const localKeys = new Set();

for await (const filePath of walk(scopedDir)) {
  const key = relative(mediaDir, filePath).replace(/\\/g, '/');
  localKeys.add(key);

  await client.send(new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: await readFile(filePath),
    ContentType: CONTENT_TYPES[extname(filePath).toLowerCase()] ?? 'application/octet-stream'
  }));
  console.log(`Pushed ${key}`);
}

if (!noPrune) {
  // restrict listing to the scoped prefix so a partial push can't wipe unrelated remote files
  for await (const page of paginateListObjectsV2({ client }, { Bucket: BUCKET_NAME, Prefix: keyPrefix })) {
    for (const obj of page.Contents ?? []) {
      if (!localKeys.has(obj.Key)) {
        await client.send(new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: obj.Key }));
        console.log(`Deleted remote ${obj.Key} (not present locally)`);
      }
    }
  }
}