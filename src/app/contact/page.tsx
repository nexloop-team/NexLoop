import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | NexLoop",
  description:
    "Book a free strategy call with NexLoop. Tell us about your business, project, or automation goals and we'll help you identify the fastest path to growth.",
};

export default function ContactPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[96rem] flex-col px-6 pb-24 pt-32 sm:px-10 sm:pt-40 lg:px-14 lg:pt-48">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 xl:gap-24">
        {/* Left Side: Hero Content */}
        <div className="flex flex-col">
          <ContactHero />
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
