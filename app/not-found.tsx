import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found | NexLoop",
  description: "This page does not exist. Browse our website design services or read the blog.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-[70vh] flex items-center justify-center px-4 sm:px-8 section-pad"
        style={{ background: "var(--bg)" }}
      >
        <div className="container-xl text-center max-w-lg">
          <p className="eyebrow mb-4">404</p>
          <h1 className="headline-lg">Page not found</h1>
          <p className="body-md mt-4" style={{ color: "var(--fg-secondary)" }}>
            The link may be broken or the page was moved. Try one of these instead.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-primary px-6 py-3 text-sm">
              Back to home <ArrowUpRight size={14} />
            </Link>
            <Link href="/blog" className="btn-ghost px-6 py-3 text-sm">
              Read the blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
