// Prepend the site's base path to a route. Use for ALL internal links so the
// site works under GitHub Pages at /ashish-ai-blog/ (and locally at /).
// Example: url('blog/hello') -> '/ashish-ai-blog/blog/hello'
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // strip trailing slash
  const clean = path.replace(/^\/+/, '');                    // strip leading slash
  if (!clean) return base + '/' || '/';
  return base + '/' + clean;
}
