import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About NexLoop | Website Design & Development Agency",
  description:
    "Meet NexLoop - a design-led website design and development agency in India. Custom Next.js sites, apps, and automation with clear process and 24-hour replies.",
  alternates: { canonical: "https://nexloop.in/about" },
  openGraph: {
    url: "https://nexloop.in/about",
    title: "About NexLoop",
    description: "Design-led digital product studio - websites, apps, and AI automation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <SubpageHero
        eyebrow="About"
        title={
          <>
            A small studio with{" "}
            <span className="brand-text">big craft standards</span>
          </>
        }
        description="We help businesses look credible online from day one - combining product thinking, custom engineering, and automation where it saves real time."
      />
      <About />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
