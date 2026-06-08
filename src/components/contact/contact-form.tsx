"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission for now
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted successfully!");
    }, 1500);
  };

  const inputClasses =
    "w-full rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-5 py-4 text-[13px] font-light tracking-wide text-foreground outline-none backdrop-blur-md transition-all duration-300 placeholder:text-foreground/30 focus:border-foreground/30 focus:bg-foreground/[0.04]";
  
  const labelClasses =
    "mb-2 block pl-1 text-[10px] font-medium uppercase tracking-[0.2em] text-label-foreground";

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: EASE_OUT_EXPO }}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="John Doe"
              className={inputClasses}
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className={labelClasses}>
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Acme Corp"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="john@example.com"
              className={inputClasses}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Interested In */}
        <div>
          <label htmlFor="interest" className={labelClasses}>
            What are you interested in? *
          </label>
          <div className="relative">
            <select
              id="interest"
              required
              defaultValue=""
              className={`${inputClasses} appearance-none [&>option]:bg-background [&>option]:text-foreground`}
            >
              <option value="" disabled hidden>
                Select a service
              </option>
              <option value="ai-automation">AI Automation</option>
              <option value="ai-chatbot">AI Chatbot</option>
              <option value="ai-voice-agent">AI Voice Agent</option>
              <option value="whatsapp-automation">WhatsApp Automation</option>
              <option value="web-development">Website Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="custom-software">Custom Software</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-label-foreground">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Project Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              defaultValue=""
              className={`${inputClasses} appearance-none [&>option]:bg-background [&>option]:text-foreground`}
            >
              <option value="" disabled hidden>
                Select a budget range
              </option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-5k">$1,000 – $5,000</option>
              <option value="5k-10k">$5,000 – $10,000</option>
              <option value="10k-plus">$10,000+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-label-foreground">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <label htmlFor="details" className={labelClasses}>
            Project Details *
          </label>
          <textarea
            id="details"
            required
            rows={5}
            placeholder="Tell us a bit about your project..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex">
          <div className="group relative w-full sm:w-auto">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 -m-1.5 rounded-full bg-foreground opacity-10 blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-m-2 group-hover:opacity-25 group-hover:blur-lg" />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative z-10 flex h-12 w-full items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 px-8 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/80 transition-all duration-500 hover:border-foreground/40 hover:bg-foreground/10 hover:text-foreground disabled:opacity-50 sm:w-auto sm:px-12"
            >
              {isSubmitting ? "Sending..." : "Book Strategy Call"}
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
