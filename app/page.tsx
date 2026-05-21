import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import HeroMarquee from "@/components/HeroMarquee";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://nexloop.in" },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip" style={{ background: "var(--bg)" }}>
      <Navbar />
      <Showcase />
      <div className="desktop-only">
        <HeroMarquee />
      </div>
      <Portfolio />
      <Services />
      <About />
      <HowItWorks />
      <Testimonials />
      <BlogPreview />
      <CTA />
      <Footer />
    </main>
  );
}
