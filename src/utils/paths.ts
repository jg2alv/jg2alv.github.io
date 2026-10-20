export function withBase(path = '/') {
  if (/^(?:https?:|mailto:|tel:|#)/.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${base}${cleanPath}`.replace(/\/{2,}/g, '/') : base;
}
