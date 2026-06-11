import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ProcessSection } from "@/components/services/process-section";
import { WhyNexLoop } from "@/components/services/why-nexloop";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services | NexLoop – Websites, Apps & AI Automation",
  description:
    "NexLoop offers website development, mobile app development, AI automation, AI chatbots, AI voice agents, and WhatsApp automation. We design and build intelligent digital systems that help businesses automate operations, generate leads, and scale efficiently.",
  alternates: {
    canonical: "https://nexloop.in/services",
  },
  openGraph: {
    title: "Services | NexLoop – Websites, Apps & AI Automation",
    description:
      "NexLoop offers website development, mobile app development, AI automation, AI chatbots, AI voice agents, and WhatsApp automation for growing businesses.",
    url: "https://nexloop.in/services",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexLoop Services – AI Automation, Websites & Mobile Apps",
      },
    ],
  },
  twitter: {
    title: "Services | NexLoop – Websites, Apps & AI Automation",
    description:
      "NexLoop offers website development, mobile app development, AI automation, AI chatbots, AI voice agents, and WhatsApp automation for growing businesses.",
    images: ["/images/og-image.png"],
  },
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
