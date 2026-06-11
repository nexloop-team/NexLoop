import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutProcess } from "@/components/about/about-process";
import { AboutPrinciples } from "@/components/about/about-principles";
import { AboutFounders } from "@/components/about/about-founders";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About NexLoop | AI & Product Development Agency",
  description:
    "NexLoop is a product-focused digital agency founded by Nikhil Wagh and Atharva. We build websites, mobile apps, AI automations, chatbots, and voice agents for businesses ready to scale.",
  alternates: {
    canonical: "https://nexloop.in/about",
  },
  openGraph: {
    title: "About NexLoop | AI & Product Development Agency",
    description:
      "NexLoop is a product-focused digital agency founded by Nikhil Wagh and Atharva. We build websites, mobile apps, AI automations, chatbots, and voice agents for businesses ready to scale.",
    url: "https://nexloop.in/about",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About NexLoop – AI & Product Development Agency",
      },
    ],
  },
  twitter: {
    title: "About NexLoop | AI & Product Development Agency",
    description:
      "NexLoop is a product-focused digital agency founded by Nikhil Wagh and Atharva. We build websites, mobile apps, AI automations, chatbots, and voice agents for businesses ready to scale.",
    images: ["/images/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutProcess />
      <AboutPrinciples />
      <AboutFounders />
      <CTASection
        className="pt-16 pb-32 sm:pt-24"
        title="Let's Build Something Meaningful."
        description="Whether you're launching a product, modernizing operations, or exploring AI, NexLoop can help."
        action={{ text: "Book A Strategy Call", href: "/contact" }}
      />
    </>
  );
}
