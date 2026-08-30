import { rm, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { paginateListObjectsV2, GetObjectCommand } from '@aws-sdk/client-s3';
import { getClient, BUCKET_NAME } from './lib/scwClient.mjs';

const mediaDir = 'media';
const client = getClient();

if (!process.argv.includes('--yes')) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(
    'This will DELETE everything in media/ and replace it with the bucket contents. Continue? (y/N) '
  );
  rl.close();

  if (answer.trim().toLowerCase() !== 'y') {
    console.log('Aborted.');
    process.exit(0);
  }
}

await rm(mediaDir, { recursive: true, force: true });
await mkdir(mediaDir, { recursive: true });

for await (const page of paginateListObjectsV2({ client }, { Bucket: BUCKET_NAME })) {
  for (const obj of page.Contents ?? []) {
    const localPath = join(mediaDir, obj.Key);
    await mkdir(dirname(localPath), { recursive: true });

    const { Body } = await client.send(
      new GetObjectCommand({ Bucket: BUCKET_NAME, Key: obj.Key })
    );
    await writeFile(localPath, Body);
    console.log(`Pulled ${obj.Key}`);
  }
}