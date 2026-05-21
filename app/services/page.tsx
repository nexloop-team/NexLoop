import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Website Design & Development Services | NexLoop",
  description:
    "Custom website design, Next.js development, mobile apps, and AI automation. NexLoop is a top web development agency in India for businesses that need leads, not just a pretty site.",
  alternates: { canonical: "https://nexloop.in/services" },
  openGraph: {
    url: "https://nexloop.in/services",
    title: "NexLoop Services - Website Design, Apps & AI",
    description:
      "Website design and development, product UI, WhatsApp automation, and AI chatbots from a design-led agency in India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <SubpageHero
        eyebrow="Services"
        title={
          <>
            Website design &amp; development{" "}
            <span className="brand-text">built to convert</span>
          </>
        }
        description="From marketing sites to apps and automation - one studio for design, engineering, and growth systems. No templates, fast delivery."
      />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
