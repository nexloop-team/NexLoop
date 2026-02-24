"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  business: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", email: "", business: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/25 bg-white/[0.04] border border-white/10 focus:border-purple-500/50 focus:bg-purple-500/[0.04] focus:outline-none transition-all duration-200";

  return (
    <section id="contact" className="relative py-16 sm:py-28 px-4 sm:px-6">
      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(90,20,180,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div
          className="relative glass-card overflow-hidden p-6 sm:p-8 md:p-12"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-12">
            {/* Left: Copy */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-label">Get Started</span>
                <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                  Stop Missing Leads.
                  <br />
                  <span className="gradient-text">Start Automating.</span>
                </h2>
                <p className="mt-4 text-white/45 text-sm leading-relaxed max-w-md">
                  Book a free 30-minute consultation. We&apos;ll analyze your
                  business, show you exactly what AI can automate, and give you a
                  custom growth plan — no strings attached.
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    "Custom AI automation strategy",
                    "Website conversion audit",
                    "48-hour project kickoff",
                    "No long-term contracts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle size={15} className="text-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Contact info */}
                <div className="mt-8 flex flex-col gap-2.5">
                  <a
                    href="mailto:team.nexloop@gmail.com"
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors group w-fit"
                  >
                    <div className="w-7 h-7 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                      <Mail size={13} className="text-purple-400" />
                    </div>
                    team.nexloop@gmail.com
                  </a>
                  <a
                    href="tel:+919511875269"
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors group w-fit"
                  >
                    <div className="w-7 h-7 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                      <Phone size={13} className="text-purple-400" />
                    </div>
                    +91 9511875269
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1 lg:max-w-sm"
            >
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">You&apos;re all set!</h3>
                  <p className="text-white/45 text-sm max-w-xs">
                    We received your request and will be in touch within 24
                    hours to schedule your free consultation.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-purple-400 hover:text-white transition-colors"
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/40 font-medium">Your Name *</label>
                    <input type="text" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/40 font-medium">Email Address *</label>
                    <input type="email" name="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/40 font-medium">Business Type</label>
                    <input type="text" name="business" placeholder="e.g. Real Estate Agency" value={form.business} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/40 font-medium">What do you need? *</label>
                    <textarea name="message" placeholder="Tell us about your goals..." value={form.message} onChange={handleChange} required rows={4} className={`${inputClass} resize-none`} />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/8 border border-red-500/20 rounded-lg px-4 py-3">
                      <AlertCircle size={14} />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary mt-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={15} className="animate-spin" />Sending...</>
                    ) : (
                      <>Book Free Consultation <ArrowUpRight size={15} /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-white/25">No spam. No commitment.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
