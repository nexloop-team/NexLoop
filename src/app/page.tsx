import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CTASection } from "@/components/sections/CTASection";

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
