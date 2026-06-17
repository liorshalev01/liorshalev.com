import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "@/lib/blog";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: "Lior Shalev — Blog",
    description:
      "Notes on security engineering, low-level systems, and building things that have to keep working.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}`,
    })),
  });
}
