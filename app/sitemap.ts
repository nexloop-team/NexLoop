import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexloop.in";
  const now = new Date();

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const latestBlogDate = blogPosts.reduce(
    (latest, post) => {
      const d = new Date(post.publishedAt);
      return d > latest ? d : latest;
    },
    new Date(0)
  );

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: latestBlogDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
