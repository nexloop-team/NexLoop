import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact NexLoop | Free Website & App Consultation",
  description:
    "Contact NexLoop for a free 30-minute consultation on website design, web development, or AI automation. Reply within 24 hours. India-based, working globally.",
  alternates: { canonical: "https://nexloop.in/contact" },
  openGraph: {
    url: "https://nexloop.in/contact",
    title: "Contact NexLoop",
    description: "Book a free consultation for your website, app, or automation project.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <CTA />
      <Footer />
    </main>
  );
}
