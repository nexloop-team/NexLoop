import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import LogoTicker from "@/components/LogoTicker";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)" }}>
      <Navbar />
      <Showcase />
      <LogoTicker />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
