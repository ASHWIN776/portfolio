import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');

  return rss({
    title: "Ashwin's Blog",
    description: 'Thoughts and Ideas',
    site: context.site,
    items: blog
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.oneLiner,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}