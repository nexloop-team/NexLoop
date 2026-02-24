import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KeywordServices from "@/components/KeywordServices";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="separator mx-auto max-w-5xl" />
      <Services />
      <div className="separator mx-auto max-w-5xl" />
      <KeywordServices />
      <div className="separator mx-auto max-w-5xl" />
      <HowItWorks />
      <div className="separator mx-auto max-w-5xl" />
      <Benefits />
      <div className="separator mx-auto max-w-5xl" />
      <UseCases />
      <div className="separator mx-auto max-w-5xl" />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
