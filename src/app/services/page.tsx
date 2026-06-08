import { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ProcessSection } from "@/components/services/process-section";
import { WhyNexLoop } from "@/components/services/why-nexloop";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services | NexLoop",
  description:
    "We design and build intelligent digital systems that help businesses automate operations, generate leads, improve customer experiences, and scale efficiently.",
};

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <WhyNexLoop />
      <ServicesCTA />
    </div>
  );
}
