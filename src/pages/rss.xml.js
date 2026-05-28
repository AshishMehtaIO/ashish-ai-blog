import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => import.meta.env.DEV || !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Ashish — Writing',
    description: 'Notes on engineering, AI, and the things in between.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.pubDate,
      link: `${import.meta.env.BASE_URL.replace(/\/+$/, '')}/blog/${post.id}/`,
    })),
  });
}
