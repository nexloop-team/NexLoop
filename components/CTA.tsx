"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle, AlertCircle, Mail, Phone, X, Shield, Clock, Star } from "lucide-react";

interface FormState { name: string; email: string; business: string; message: string; }
type Status = "idle" | "loading" | "success" | "error";

const guarantees = [
  { icon: Shield, text: "No contracts, cancel anytime" },
  { icon: Clock, text: "48-hour kickoff guarantee" },
  { icon: Star, text: "Free consultation included" },
];

export default function CTA() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", business: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSticky, setShowSticky] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const formY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const formOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  useEffect(() => {
    const onScroll = () => {
      if (stickyDismissed) return;
      const sectionTop = ref.current?.getBoundingClientRect().top ?? 999;
      setShowSticky(window.scrollY > 500 && sectionTop > window.innerHeight * 1.2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [stickyDismissed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
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

  return (
    <>
      {showSticky && !stickyDismissed && (
        <motion.div initial={{ y: 80 }} animate={{ y: 0 }} className="sticky-cta-bar md:hidden">
          <a href="#contact" className="btn-primary flex-1 py-3 text-sm text-center">Start a project <ArrowUpRight size={13} /></a>
          <button onClick={() => setStickyDismissed(true)} className="w-9 h-9 flex items-center justify-center rounded-full" style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}><X size={13} /></button>
        </motion.div>
      )}

      <section id="contact" ref={ref} className="relative section-pad px-5 sm:px-8 section-gradient-2 grain-overlay overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6" style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border)', color: 'var(--fg-secondary)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} /> Get in touch
              </div>
              <h2 className="headline-lg">Have a project?<br /><span className="brand-text">Let&apos;s talk.</span></h2>
              <p className="body-lg mt-4 max-w-md">Book a free 30-minute consultation. We&apos;ll analyze your business and give you a custom roadmap — no strings attached.</p>

              <div className="mt-8 space-y-3">
                {guarantees.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border)' }}>
                      <Icon size={14} className="brand-text" />
                    </div>
                    <span className="body-md">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2">
                <a href="mailto:team.nexloop@gmail.com" className="flex items-center gap-2 body-sm hover:brand-text transition-colors" style={{ color: 'var(--fg-muted)' }}>
                  <Mail size={14} /> team.nexloop@gmail.com
                </a>
                <a href="tel:+919511875269" className="flex items-center gap-2 body-sm hover:brand-text transition-colors" style={{ color: 'var(--fg-muted)' }}>
                  <Phone size={14} /> +91 9511875269
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div style={{ y: formY, opacity: formOpacity }} className="flex-1 lg:max-w-md">
              {status === "success" ? (
                <div className="card p-10 flex flex-col items-center text-center gap-4">
                  <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-subtle)' }}>
                      <CheckCircle size={28} className="brand-text" />
                    </div>
                  </motion.div>
                  <h3 className="headline-md">You&apos;re all set.</h3>
                  <p className="body-md">We&apos;ll be in touch within 24 hours to schedule your free consultation.</p>
                  <button onClick={() => setStatus("idle")} className="body-sm brand-text mt-2 cursor-pointer hover:underline">Submit another →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 sm:p-8 flex flex-col gap-4">
                  <div><label className="label mb-1.5 block">Name *</label><input required name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="input-field" /></div>
                  <div><label className="label mb-1.5 block">Email *</label><input required name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} className="input-field" /></div>
                  <div><label className="label mb-1.5 block">Business type</label><input name="business" placeholder="e.g. Real Estate Agency" value={form.business} onChange={handleChange} className="input-field" /></div>
                  <div><label className="label mb-1.5 block">What do you need? *</label><textarea required name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} rows={4} className="input-field resize-none" /></div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl" style={{ color: '#EF4444', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                      <AlertCircle size={14} />{errorMsg}
                    </div>
                  )}
                  <button type="submit" disabled={status === "loading"} className="btn-primary py-3.5 mt-1 disabled:opacity-50">
                    {status === "loading" ? <><Loader2 size={15} className="animate-spin" />Sending...</> : <>Send message <ArrowUpRight size={14} /></>}
                  </button>
                  <p className="text-center body-sm">Free consultation · No contracts</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
