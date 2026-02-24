"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Mic, Users, Zap, Database, Globe } from "lucide-react";

const services = [
    {
        icon: MessageSquare,
        title: "AI Chatbot Automation",
        description:
            "Deploy conversational AI systems powered by large language models to handle customer queries, qualify leads, and book appointments around the clock — without a human in the loop.",
        keyword: "AI chatbot automation",
        link: {
            label: "Built on OpenAI technology",
            href: "https://openai.com/products",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: Globe,
        title: "WhatsApp AI Bot",
        description:
            "Engage customers where they already are. Our WhatsApp AI bots use the official WhatsApp Business API to send automated follow-ups, qualify leads, and run full drip sequences — all within WhatsApp.",
        keyword: "WhatsApp AI bot",
        link: {
            label: "WhatsApp Business API",
            href: "https://business.whatsapp.com/",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: Mic,
        title: "AI Voice Agent",
        description:
            "AI voice agents that handle inbound calls, answer FAQs, qualify prospects, and book meetings — giving every caller an instant, consistent experience 24/7 without additional staff.",
        keyword: "AI voice agent",
        link: {
            label: "Powered by Google Cloud AI",
            href: "https://cloud.google.com/speech-to-text",
            rel: "noopener noreferrer",
        },
    },
    {
        icon: Users,
        title: "Lead Generation Automation",
        description:
            "End-to-end automated lead capture systems that attract, engage, and convert visitors across your website, WhatsApp, and social channels — with smart qualification built in from the first touchpoint.",
        keyword: "lead generation automation",
        link: null,
    },
    {
        icon: Database,
        title: "CRM Automation",
        description:
            "Eliminate manual data entry forever. Our CRM automation pipelines sync contacts, log interactions, trigger follow-ups, and update deal stages automatically — keeping your pipeline clean and current.",
        keyword: "CRM automation",
        link: null,
    },
    {
        icon: Zap,
        title: "Business Automation Systems",
        description:
            "For small businesses and agencies that need a complete stack: we build custom business automation systems combining AI chatbots, WhatsApp bots, voice agents, and CRM automation into one cohesive platform.",
        keyword: "business automation systems",
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
        <section id="ai-automation-services" className="relative py-28 px-6">
            <div className="relative max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label">AI Automation Agency</span>
                    <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                        Complete AI Automation
                        <br />
                        <span className="gradient-text">Services for Every Business</span>
                    </h2>
                    <p className="mt-4 text-white/45 text-base max-w-2xl mx-auto leading-relaxed">
                        NexLoop is your end-to-end <strong className="text-white/60 font-medium">AI automation agency</strong> — delivering AI for small businesses
                        through to enterprise teams. From <strong className="text-white/60 font-medium">automated lead capture</strong> to full{" "}
                        <strong className="text-white/60 font-medium">conversational AI systems</strong>, we handle the entire stack.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            className="group glass-card p-6 flex flex-col gap-4 shine-sweep"
                        >
                            {/* Icon */}
                            <div className="w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600/25 transition-colors">
                                <s.icon size={20} className="text-purple-400" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                                {s.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/40 text-sm leading-relaxed flex-1">
                                {s.description}
                            </p>

                            {/* Authority link or CTA */}
                            {s.link ? (
                                <a
                                    href={s.link.href}
                                    target="_blank"
                                    rel={s.link.rel}
                                    className="flex items-center gap-1.5 text-xs font-medium text-purple-400/70 hover:text-purple-300 transition-colors w-fit group/link mt-auto"
                                >
                                    {s.link.label}
                                    <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            ) : (
                                <a
                                    href="#contact"
                                    className="flex items-center gap-1.5 text-xs font-medium text-purple-400/70 hover:text-purple-300 transition-colors w-fit mt-auto group/link"
                                >
                                    Get started
                                    <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom trust line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/25 text-xs tracking-wide">
                        NexLoop AI automation services integrate with{" "}
                        <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400/60 hover:text-purple-300 transition-colors">OpenAI</a>,{" "}
                        <a href="https://business.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400/60 hover:text-purple-300 transition-colors">WhatsApp Business API</a>, and{" "}
                        <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400/60 hover:text-purple-300 transition-colors">Google Cloud</a>{" "}
                        — industry-leading infrastructure your modern business can depend on.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
