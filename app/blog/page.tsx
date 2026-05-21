import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts, formatDate } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | NexLoop - Web Design, Apps & Growth Insights",
  description:
    "Free guides on web design, Next.js websites, mobile apps, WhatsApp automation, and lead generation. Tips from NexLoop to grow traffic and conversions.",
  keywords: [
    "AI automation blog",
    "WhatsApp marketing automation",
    "web design trends 2026",
    "lead generation strategies",
    "CRM automation guide",
    "digital agency blog India",
    "AI chatbot guide",
    "NexLoop blog",
  ],
  alternates: { canonical: "https://nexloop.in/blog" },
  openGraph: {
    type: "website",
    url: "https://nexloop.in/blog",
    title: "NexLoop Blog - Web Design, Apps & Growth",
    description:
      "Expert guides on AI automation, WhatsApp marketing, web design, and lead generation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const categories = ["All", "AI Automation", "Marketing", "Design", "Lead Generation", "CRM", "Strategy"];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "NexLoop Blog",
  url: "https://nexloop.in/blog",
  description:
    "Articles on website design, mobile apps, AI automation, and digital growth for businesses in India and worldwide.",
  publisher: {
    "@type": "Organization",
    name: "NexLoop",
    url: "https://nexloop.in",
    logo: { "@type": "ImageObject", url: "https://nexloop.in/icon1.png" },
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://nexloop.in/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
  })),
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <Script
        id="schema-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main className="min-h-screen" style={{ background: "var(--bg)" }}>

        {/* ── Hero ── */}
        <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden">
          {/* Bg gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 60% 0%, var(--accent-glow) 0%, transparent 55%)",
              filter: "blur(80px)",
            }}
          />
          <div className="container-xl relative z-10">
            <div className="max-w-3xl">
              <span className="eyebrow mb-6">NexLoop Blog</span>
              <h1 className="headline-xl mt-6 leading-tight">
                Insights on{" "}
                <span className="brand-text">websites, apps</span>{" "}
                &amp; growth.
              </h1>
              <p className="body-xl mt-5 max-w-xl">
                Practical guides on web design, Next.js development, automation, and marketing - built to help your site rank and convert.
              </p>
            </div>

            {/* Category pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200"
                  style={{
                    background: i === 0 ? "var(--accent)" : "var(--bg-elevated)",
                    color: i === 0 ? "#fff" : "var(--fg-secondary)",
                    border: i === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Post ── */}
        {featured && (
          <section className="px-4 sm:px-8 pb-16 sm:pb-20">
            <div className="container-xl">
              <p className="label mb-6">Featured Article</p>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div
                  className="blog-card overflow-hidden"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Visual */}
                    <div
                      className="relative h-56 md:h-auto min-h-[280px] flex items-center justify-center overflow-hidden"
                      style={{ background: featured.coverGradient }}
                    >
                      <div className="text-center">
                        <span className="text-7xl" role="img" aria-label={featured.title}>
                          {featured.coverIcon}
                        </span>
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                            backgroundSize: "32px 32px",
                          }}
                        />
                      </div>
                      <span
                        className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.2)", color: "#fff", backdropFilter: "blur(8px)" }}
                      >
                        {featured.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-4 mb-5">
                        <span className="flex items-center gap-1.5 body-xs">
                          <Calendar size={11} /> {formatDate(featured.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1.5 body-xs">
                          <Clock size={11} /> {featured.readTime}
                        </span>
                      </div>
                      <h2
                        className="headline-md group-hover:text-[var(--accent)] transition-colors duration-300"
                        style={{ lineHeight: 1.25 }}
                      >
                        {featured.title}
                      </h2>
                      <p className="body-md mt-4 line-clamp-3">{featured.description}</p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {featured.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="highlight-tag flex items-center gap-1"
                          >
                            <Tag size={9} /> {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-7 flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                          style={{ background: featured.authorColor }}
                        >
                          {featured.authorInitials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                            {featured.author}
                          </p>
                          <p className="body-xs">{featured.authorRole}</p>
                        </div>
                        <span
                          className="ml-auto flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                          style={{ color: "var(--accent)" }}
                        >
                          Read article <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── Post Grid ── */}
        <section className="px-4 sm:px-8 pb-24 sm:pb-32">
          <div className="container-xl">
            <p className="label mb-8">All Articles</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="blog-card h-full">
                    {/* Cover */}
                    <div
                      className="relative h-44 flex items-center justify-center overflow-hidden"
                      style={{ background: post.coverGradient, flexShrink: 0 }}
                    >
                      <span className="text-5xl" role="img" aria-label={post.title}>
                        {post.coverIcon}
                      </span>
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.2)", color: "#fff", backdropFilter: "blur(8px)" }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="flex items-center gap-1 body-xs">
                          <Clock size={10} /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1 body-xs">
                          <Calendar size={10} /> {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <h2
                        className="text-base font-bold leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors duration-300"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--fg)" }}
                      >
                        {post.title}
                      </h2>
                      <p className="body-sm line-clamp-2 flex-1">{post.description}</p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="highlight-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                            style={{ background: post.authorColor }}
                          >
                            {post.authorInitials}
                          </div>
                          <p className="text-xs font-medium" style={{ color: "var(--fg-secondary)" }}>
                            {post.author}
                          </p>
                        </div>
                        <span
                          className="flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
                          style={{ color: "var(--accent)" }}
                        >
                          Read <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <section className="px-4 sm:px-8 pb-24 sm:pb-32">
          <div className="container-xl">
            <div
              className="rounded-[24px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, #818CF8 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 max-w-xl mx-auto">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.03em" }}
                >
                  Ready to automate your business?
                </h2>
                <p className="mt-3 text-white/80 text-base">
                  Book a free 30-minute strategy call. We&apos;ll map out exactly which automations will 3x your leads.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-sm font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ color: "var(--accent)" }}
                >
                  Book free consultation <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
