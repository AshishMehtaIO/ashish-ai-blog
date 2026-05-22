# Blog

Personal blog. Built with [Astro](https://astro.build), styled after the
[Thinking Machines blog](https://thinkingmachines.ai/blog/) aesthetic.

## Local development

```sh
npm install
npm run dev    # http://localhost:4321
npm run build  # output in ./dist
```

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/blog/`:

```yaml
---
title: "My post"
description: "Short summary for OG/SEO"
pubDate: 2026-05-22
tags: ["thinking"]
draft: false
---
```

For Tufte-style sidenotes in MDX:

```mdx
import Sidenote from '../../components/Sidenote.astro';

The point in the prose.<Sidenote id="sn-1">The aside that lives in the margin.</Sidenote>
```

Math: write `$inline$` or `$$display$$` — KaTeX is wired up.

## Deploy

Pushed to `main` → built and deployed by `.github/workflows/deploy.yml`.

Before deploying:

1. Update `SITE_URL` in `astro.config.mjs` to your final URL
   (e.g. `https://USERNAME.github.io/blog` for project pages, or your custom domain).
2. In the repo's **Settings → Pages**, set source to **GitHub Actions**.

## Stack

| Concern            | Tool                                      |
| ------------------ | ----------------------------------------- |
| Generator          | Astro 5                                   |
| Content            | Content collections (Markdown + MDX)      |
| Math               | `remark-math` + `rehype-katex`            |
| Syntax highlighting| Shiki (built into Astro)                  |
| Body font          | Source Serif 4 (variable)                 |
| UI font            | Inter                                     |
| Display font       | Chakra Petch                              |
| Hosting            | GitHub Pages via Actions                  |
