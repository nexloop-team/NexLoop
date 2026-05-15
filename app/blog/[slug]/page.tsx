import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts, getPostBySlug, getRelatedPosts, formatDate } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | NexLoop Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author, url: "https://nexloop.in" }],
    alternates: { canonical: `https://nexloop.in/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://nexloop.in/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 3);

  /* Structured data for SEO */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://nexloop.in",
    },
    publisher: {
      "@type": "Organization",
      name: "NexLoop",
      url: "https://nexloop.in",
      logo: { "@type": "ImageObject", url: "https://nexloop.in/icon.svg" },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `https://nexloop.in/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="min-h-screen" style={{ background: "var(--bg)" }}>

        {/* ── Hero ── */}
        <section className="relative pt-28 sm:pt-36 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 60% 0%, var(--accent-glow) 0%, transparent 55%)",
              filter: "blur(80px)",
            }}
          />
          <div className="container-xl relative z-10">
            {/* Back nav */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-all duration-200 group"
              style={{ color: "var(--fg-muted)" }}
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Back to Blog
            </Link>

            <div className="max-w-3xl">
              {/* Category + meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent)", border: "1px solid rgba(91,79,232,0.2)" }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 body-xs">
                  <Calendar size={11} /> {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5 body-xs">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>

              <h1 className="headline-lg" style={{ lineHeight: 1.1 }}>
                {post.title}
              </h1>
              <p className="body-xl mt-5">{post.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="highlight-tag flex items-center gap-1.5"
                  >
                    <Tag size={9} /> {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: post.authorColor }}
                >
                  {post.authorInitials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{post.author}</p>
                  <p className="body-xs">{post.authorRole}</p>
                </div>
                <ShareButton title={post.title} className="ml-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Cover Visual ── */}
        <section className="px-4 sm:px-8 mb-12">
          <div className="container-xl">
            <div
              className="w-full rounded-[20px] flex items-center justify-center relative overflow-hidden"
              style={{
                height: "clamp(180px, 30vw, 360px)",
                background: post.coverGradient,
              }}
            >
              <span className="text-7xl sm:text-8xl select-none" role="img" aria-label={post.title}>
                {post.coverIcon}
              </span>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "36px 36px",
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="px-4 sm:px-8 pb-16">
          <div className="container-xl">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

              {/* Main content */}
              <article className="max-w-none">
                <div className="prose-custom">
                  {/* Intro */}
                  <p
                    className="text-lg sm:text-xl leading-relaxed font-medium mb-10"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    {post.content.intro}
                  </p>

                  {/* Sections */}
                  {post.content.sections.map((section, i) => (
                    <div key={i} className="mb-10">
                      <h2
                        className="text-xl sm:text-2xl font-bold mb-4"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: "var(--fg)",
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {section.heading}
                      </h2>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--fg-secondary)", lineHeight: 1.85 }}
                      >
                        {section.body}
                      </p>
                    </div>
                  ))}

                  {/* Conclusion */}
                  <div
                    className="mt-12 p-6 sm:p-8 rounded-[16px] relative overflow-hidden"
                    style={{
                      background: "var(--accent-subtle)",
                      border: "1px solid rgba(91,79,232,0.2)",
                    }}
                  >
                    <div
                      className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
                      style={{
                        background: "var(--accent)",
                        filter: "blur(50px)",
                        transform: "translate(30%, -30%)",
                      }}
                    />
                    <p className="label mb-3" style={{ color: "var(--accent)" }}>Takeaway</p>
                    <p
                      className="text-base leading-relaxed relative z-10"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      {post.content.conclusion}
                    </p>
                    <Link
                      href="/#contact"
                      className="btn-primary mt-5 text-sm px-7 py-3.5 inline-flex"
                    >
                      Book free consultation <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-28 space-y-6">
                {/* CTA */}
                <div
                  className="p-6 rounded-[16px] text-center"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ background: "var(--accent-subtle)", border: "1px solid rgba(91,79,232,0.2)" }}
                  >
                    🚀
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--fg)" }}
                  >
                    Ready to implement this?
                  </h3>
                  <p className="body-sm mb-5">
                    Book a free 30-minute session. We&apos;ll build a custom plan for your business.
                  </p>
                  <Link href="/#contact" className="btn-primary text-sm w-full py-3">
                    Start free <ArrowUpRight size={13} />
                  </Link>
                </div>

                {/* Article tags */}
                <div
                  className="p-5 rounded-[16px]"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <p className="label mb-4">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="highlight-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div
                  className="p-5 rounded-[16px]"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <p className="label mb-4">Written by</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: post.authorColor }}
                    >
                      {post.authorInitials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{post.author}</p>
                      <p className="body-xs">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Related Posts ── */}
        <section
          className="px-4 sm:px-8 py-16 sm:py-20"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}
        >
          <div className="container-xl">
            <p className="label mb-8">Continue Reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <article className="blog-card h-full">
                    <div
                      className="relative h-36 flex items-center justify-center overflow-hidden"
                      style={{ background: rp.coverGradient, flexShrink: 0 }}
                    >
                      <span className="text-4xl" role="img">{rp.coverIcon}</span>
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 inline-block"
                        style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                      >
                        {rp.category}
                      </span>
                      <h3
                        className="text-sm font-bold leading-snug group-hover:text-[var(--accent)] transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--fg)" }}
                      >
                        {rp.title}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="body-xs">{rp.readTime}</span>
                        <span
                          className="text-xs font-semibold flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
                          style={{ color: "var(--accent)" }}
                        >
                          Read <ArrowUpRight size={11} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
