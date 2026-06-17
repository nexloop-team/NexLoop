"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, interest, details }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setSubmitted(true);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setInterest("");
      setDetails("");
    } catch (err) {
      console.error(err);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
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
            value={details}
            onChange={(e) => setDetails(e.target.value)}
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
              {isSubmitting ? "Sending..." : submitted ? "Sent" : "Book Strategy Call"}
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
