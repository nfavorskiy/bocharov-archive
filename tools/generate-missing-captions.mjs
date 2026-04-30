import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const i18nPath = path.join(root, 'src/lib/i18n.js');

const galleries = [
  {
    key: 'watercolors1940_1970',
    dir: path.join(root, 'static/images/watercolors1940_1970')
  },
  {
    key: 'watercolors1980_2010',
    dir: path.join(root, 'static/images/watercolors1980_2010')
  }
];

const source = await fs.readFile(i18nPath, 'utf8');

function extractCaptionKeys(locale, galleryKey) {
  const localeStart = source.indexOf(`${locale}: {`);
  if (localeStart === -1) return new Set();

  const nextLocale = locale === 'ru' ? '\n  en: {' : '\n};';
  const localeEnd = source.indexOf(nextLocale, localeStart + 1);
  const localeBlock = source.slice(localeStart, localeEnd === -1 ? source.length : localeEnd);

  const galleryMatch = localeBlock.match(
    new RegExp(
      `${galleryKey}\\s*:\\s*\\{[\\s\\S]*?captions\\s*:\\s*\\{([\\s\\S]*?)\\}\\s*\\}`,
      'm'
    )
  );

  if (!galleryMatch) return new Set();

  const keys = new Set();
  const keyRe = /'([^']+)'\s*:/g;
  let m;
  while ((m = keyRe.exec(galleryMatch[1])) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

function toCaption(filename) {
  return filename.replace(/\.[^.]+$/i, '');
}

for (const locale of ['ru', 'en']) {
  console.log(`\n===== ${locale.toUpperCase()} =====`);

  for (const g of galleries) {
    const files = (await fs.readdir(g.dir))
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    const existing = extractCaptionKeys(locale, g.key);
    const missing = files.filter((f) => !existing.has(f));

    console.log(`\n${g.key} missing: ${missing.length}`);
    console.log('captions: {');
    for (const f of missing) {
      const v = toCaption(f).replaceAll("'", "\\'");
      const k = f.replaceAll("'", "\\'");
      console.log(`  '${k}': '${v}',`);
    }
    console.log('}');
  }
}