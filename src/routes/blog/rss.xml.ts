import type { BlogPost } from "../../types/blog-post.type";

const loadBlogPosts = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return posts;
};

export const get = async () => {
  const blogPosts: BlogPost[] = await loadBlogPosts();

  const rssDocument = `
  <rss version="2.0">
  <channel>
   <title>Gitpod Blog</title>
   <description>Visit the Gitpod blog to learn about releases, tutorials, news and more.</description>
   <link>https://www.gitpod.io/blog</link>
   <copyright>${new Date().getFullYear()} Gitpod GmbH All rights reserved</copyright>
   <lastBuildDate>${new Date(blogPosts[0].date).toUTCString()}</lastBuildDate>
   <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
   <ttl>1800</ttl>
  
   <item>
    <title>Example entry</title>
    <description>Here is some text containing an interesting description.</description>
    <link>http://www.example.com/blog/post/1</link>
    <guid isPermaLink="false">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
    <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
   </item>
  
  </channel>
  </rss>`;

  return {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml",
    },
    body: rssDocument,
  };
};
