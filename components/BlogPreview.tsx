import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getLatestPosts, formatDate } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section id="insights" className="relative section-pad px-4 sm:px-8 section-alt overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="section-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="eyebrow mb-5">Blog</span>
            <h2 className="headline-lg mt-5">
              Guides on <span className="brand-text">web design</span>, apps &amp; growth
            </h2>
            <p className="body-lg mt-4 max-w-xl hidden md:block" style={{ color: "var(--fg-secondary)" }}>
              Practical articles on websites, automation, and marketing - written to help you rank and convert.
            </p>
          </div>
          <Link href="/blog" className="btn-ghost px-6 py-3 text-sm shrink-0 self-start sm:self-auto">
            View all articles <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <article className="blog-card h-full flex flex-col">
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden shrink-0"
                  style={{ background: post.coverGradient }}
                >
                  <span className="text-4xl" role="img" aria-hidden>
                    {post.coverIcon}
                  </span>
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.2)", color: "#fff", backdropFilter: "blur(8px)" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-1 body-xs">
                      <Calendar size={10} /> {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1 body-xs">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold leading-snug group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--fg)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="body-sm mt-2 line-clamp-2 flex-1" style={{ color: "var(--fg-muted)" }}>
                    {post.description}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                    style={{ color: "var(--accent)" }}
                  >
                    Read article <ArrowUpRight size={12} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="body-md mt-8 text-center md:hidden" style={{ color: "var(--fg-secondary)" }}>
          <Link href="/blog" className="brand-text font-medium hover:underline">
            Browse all articles on the blog →
          </Link>
        </p>
      </div>
    </section>
  );
}
