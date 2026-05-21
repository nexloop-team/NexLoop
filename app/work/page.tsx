import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Website & App Projects | NexLoop",
  description:
    "See NexLoop portfolio - custom websites, web apps, and digital products for brands that need premium design and measurable results.",
  alternates: { canonical: "https://nexloop.in/work" },
  openGraph: {
    url: "https://nexloop.in/work",
    title: "NexLoop Portfolio",
    description: "Selected website and product work from NexLoop.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <SubpageHero
        eyebrow="Work"
        title={
          <>
            Projects built with{" "}
            <span className="brand-text">clarity and intent</span>
          </>
        }
        description="A sample of websites and digital products we've designed and shipped - focused on trust, speed, and conversion."
      />
      <Portfolio />
      <section className="section-pad px-4 sm:px-8 pb-20">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="body-md" style={{ color: "var(--fg-secondary)" }}>
            Ready for a site or product at this level?
          </p>
          <Link href="/contact" className="btn-primary px-6 py-3 text-sm gap-1.5">
            Start a project <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
