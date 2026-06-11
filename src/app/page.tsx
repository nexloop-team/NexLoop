import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "NexLoop | AI Automation, Websites & Mobile Apps",
  description:
    "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, voice agents, and business automation solutions for growing businesses.",
  alternates: {
    canonical: "https://nexloop.in",
  },
  openGraph: {
    title: "NexLoop | AI Automation, Websites & Mobile Apps",
    description:
      "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, voice agents, and business automation solutions for growing businesses.",
    url: "https://nexloop.in",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexLoop – AI Automation, Websites & Mobile Apps",
      },
    ],
  },
  twitter: {
    title: "NexLoop | AI Automation, Websites & Mobile Apps",
    description:
      "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, voice agents, and business automation solutions for growing businesses.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <CTASection
        badge={{ text: "Let's Build Something Great" }}
        title="Ready To Automate, Scale & Grow?"
        description="Whether you need AI automation, a custom website, a mobile application, or a complete digital system, NexLoop can help you turn ideas into scalable solutions."
        action={{ text: "Book A Strategy Call", href: "/contact" }}
      />
    </>
  );
}
