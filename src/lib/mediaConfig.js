import { env } from '$env/dynamic/public';

const BASE_URL = (env.PUBLIC_MEDIA_BASE_URL ?? '').replace(/\/$/, '');

// idempotent: leaves already-absolute URLs untouched so callers can't double-prefix
export function resolveMediaUrl(path) {
  if (!path || /^https?:\/\//i.test(path)) return path;
  return BASE_URL + (path.startsWith('/') ? path : `/${path}`);
}
