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

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.85 },
    { path: "/about", priority: 0.85 },
    { path: "/contact", priority: 0.9 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [
    {
      url: base,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticPages,
    {
      url: `${base}/blog`,
      lastModified: latestBlogDate > SITE_UPDATED ? latestBlogDate : SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
