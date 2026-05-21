import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const SITE_UPDATED = new Date("2026-05-21T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexloop.in";

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const latestBlogDate = blogPosts.reduce((latest, post) => {
    const d = new Date(post.publishedAt);
    return d > latest ? d : latest;
  }, new Date(0));

  return [
    {
      url: base,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: latestBlogDate > SITE_UPDATED ? latestBlogDate : SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
