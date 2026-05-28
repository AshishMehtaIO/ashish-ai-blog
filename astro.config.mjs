import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Deployed at https://ashishmehtaio.github.io/ashish-ai-blog/
// `site` = origin only, `base` = the repo subpath (without trailing slash).
const SITE_URL = 'https://ashishmehtaio.github.io';
const BASE = '/ashish-ai-blog';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'ignore',
  // Old VERL-centric slugs → new systems-framed slugs. Astro emits meta-refresh
  // redirect pages (works on GitHub Pages). Redirect *targets* must include the
  // base path (Astro does not prepend it to redirect values in static output).
  redirects: {
    '/blog/verl-mental-model': BASE + '/blog/llm-rl-systems-overview',
    '/blog/verl-algorithm-zoo': BASE + '/blog/llm-rl-algorithm-interface',
    '/blog/verl-reward-functions': BASE + '/blog/llm-rl-reward-design',
    '/blog/verl-multi-turn-agentloop': BASE + '/blog/llm-rl-multi-turn',
    '/blog/verl-environments-tools': BASE + '/blog/llm-rl-environments',
    '/blog/verl-backends-internals': BASE + '/blog/llm-rl-engines',
    '/blog/verl-scaling-async': BASE + '/blog/llm-rl-scaling',
    '/blog/verl-debugging-evaluation': BASE + '/blog/llm-rl-observability',
    '/series/llm-rl': BASE + '/series/llm-rl-systems',
  },
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      wrap: true,
    },
  },
});
