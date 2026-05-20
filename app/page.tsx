import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import HeroMarquee from "@/components/HeroMarquee";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
      <div className="desktop-only">
        <HowItWorks />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
