"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Mic, Users, Zap, Database, Globe } from "lucide-react";

const services = [
    {
        icon: MessageSquare,
        title: "AI Chatbot Automation",
        description:
            "Deploy conversational AI systems powered by large language models to handle queries, qualify leads, and book appointments around the clock.",
        link: { label: "Built on OpenAI technology", href: "https://openai.com/products", rel: "noopener noreferrer" },
    },
    {
        icon: Globe,
        title: "WhatsApp AI Bot",
        description:
            "Engage customers on WhatsApp. Our AI bots use the official WhatsApp Business API to send automated follow-ups, qualify leads, and run drip sequences.",
        link: { label: "WhatsApp Business API", href: "https://business.whatsapp.com/", rel: "noopener noreferrer" },
    },
    {
        icon: Mic,
        title: "AI Voice Agent",
        description:
            "AI voice agents that handle inbound calls, answer FAQs, qualify prospects, and book meetings — giving every caller an instant experience 24/7.",
        link: { label: "Powered by Google Cloud AI", href: "https://cloud.google.com/speech-to-text", rel: "noopener noreferrer" },
    },
    {
        icon: Users,
        title: "Lead Generation Automation",
        description:
            "End-to-end automated lead capture systems that attract, engage, and convert visitors across your website, WhatsApp, and social channels.",
        link: null,
    },
    {
        icon: Database,
        title: "CRM Automation",
        description:
            "Eliminate manual data entry. Our CRM automation pipelines sync contacts, log interactions, trigger follow-ups, and update deal stages automatically.",
        link: null,
    },
    {
        icon: Zap,
        title: "Business Automation Systems",
        description:
            "We build custom business automation systems combining AI chatbots, WhatsApp bots, voice agents, and CRM automation into one cohesive platform.",
        link: null,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] },
    }),
};

export default function KeywordServices() {
    return (
        <section id="ai-automation-services" className="relative py-16 sm:py-28 px-4 sm:px-6">
            <div className="relative max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="section-label">AI Automation Agency</span>
                    <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                        Complete AI Automation
                        <br />
                        <span className="gradient-text">Services for Every Business</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-white/45 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        NexLoop is your end-to-end <strong className="text-white/60 font-medium">AI automation agency</strong> — from{" "}
                        <strong className="text-white/60 font-medium">automated lead capture</strong> to full{" "}
                        <strong className="text-white/60 font-medium">conversational AI systems</strong>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            className="group glass-card p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shine-sweep"
                        >
                            <div className="flex items-center gap-3 sm:block">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center sm:mb-4 group-hover:bg-purple-600/25 transition-colors flex-shrink-0">
                                    <s.icon size={18} className="text-purple-400" />
                                </div>
                                {/* Title inline with icon on mobile */}
                                <div className="text-base sm:hidden font-bold text-white tracking-tight leading-snug">
                                    {s.title}
                                </div>
                            </div>

                            {/* Title standalone on desktop */}
                            <div className="hidden sm:block text-lg font-bold text-white tracking-tight leading-snug">
                                {s.title}
                            </div>

                            <p className="text-white/40 text-xs sm:text-sm leading-relaxed flex-1">
                                {s.description}
                            </p>

                            {s.link ? (
                                <a
                                    href={s.link.href}
                                    target="_blank"
                                    rel={s.link.rel}
                                    className="flex items-center gap-1.5 text-xs font-medium text-purple-400/70 hover:text-purple-300 transition-colors w-fit group/link mt-auto min-h-[44px] items-center"
                                >
                                    {s.link.label}
                                    <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            ) : (
                                <a
                                    href="#contact"
                                    className="flex items-center gap-1.5 text-xs font-medium text-purple-400/70 hover:text-purple-300 transition-colors w-fit mt-auto group/link min-h-[44px] items-center"
                                >
                                    Get started
                                    <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 sm:mt-12 text-center px-2"
                >
                    <p className="text-white/25 text-xs tracking-wide leading-relaxed">
                        Integrates with{" "}
                        <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400/60 hover:text-purple-300 transition-colors">OpenAI</a>,{" "}
                        <a href="https://business.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400/60 hover:text-purple-300 transition-colors">WhatsApp Business API</a>, and{" "}
                        <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400/60 hover:text-purple-300 transition-colors">Google Cloud</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
