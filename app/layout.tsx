import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["300","400","500","600","700","800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexloop.in"),
  title: "NexLoop | AI Automation Agency - Chatbots, Leads & Growth",
  description:
    "NexLoop builds AI automation systems - chatbots, WhatsApp bots, voice agents & lead generation for modern businesses. 3x more leads. 48h delivery.",
  keywords: [
    // Primary
    "AI automation services",
    "business automation systems",
    "AI chatbot automation",
    "lead generation automation",
    "WhatsApp AI bot",
    "AI voice agent",
    "CRM automation",
    "intelligent automation",
    // Secondary
    "AI for small businesses",
    "AI automation agency",
    "automated lead capture",
    "conversational AI systems",
    "AI automation",
    "website development",
    "WhatsApp automation",
  ],
  authors: [{ name: "NexLoop", url: "https://nexloop.in" }],
  creator: "NexLoop",
  publisher: "NexLoop",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://nexloop.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://nexloop.in",
    siteName: "NexLoop",
    title: "NexLoop - AI Automation Partner for Growth-Focused Businesses",
    description:
      "NexLoop builds AI automation systems - chatbots, WhatsApp bots, voice agents & lead generation for modern businesses. 3x more leads. 48h delivery.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexLoop - AI Automation for Modern Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexloopapp",
    creator: "@nexloopapp",
    title: "NexLoop - AI Automation Partner for Growth-Focused Businesses",
    description:
      "NexLoop builds AI automation systems - chatbots, WhatsApp bots, voice agents & lead generation for modern businesses. 3x more leads. 48h delivery.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexLoop",
  url: "https://nexloop.in",
  logo: "https://nexloop.in/icon0.svg",
  description:
    "NexLoop is an AI automation agency that builds intelligent automation systems including AI chatbots, WhatsApp bots, voice agents, lead generation systems, and CRM automation for modern businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "team.nexloop@gmail.com",
    telephone: "+91-9511875269",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/nexloopapp",
    "https://linkedin.com/company/nexloop",
    "https://instagram.com/nexloopapp",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation Services",
  provider: {
    "@type": "Organization",
    name: "NexLoop",
    url: "https://nexloop.in",
  },
  name: "AI Automation & Business Automation Systems",
  description:
    "NexLoop provides end-to-end AI automation services including AI chatbot automation, WhatsApp AI bots, AI voice agents, lead generation automation, CRM automation, and business automation systems for growth-focused businesses.",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot Automation",
          description:
            "Conversational AI systems that automate customer interactions, qualify leads, and book appointments 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WhatsApp AI Bot",
          description:
            "Intelligent WhatsApp automation for lead qualification, follow-ups, and customer support via the WhatsApp Business API.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Voice Agent",
          description:
            "AI-powered voice agents that handle inbound and outbound calls, qualify prospects, and schedule meetings automatically.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Generation Automation",
          description:
            "Automated lead capture, qualification, and nurture systems that generate 3x more leads without manual effort.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Automation",
          description:
            "End-to-end CRM automation that syncs leads, triggers follow-ups, and keeps your pipeline updated automatically.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark" className={`${dmSans.variable} ${inter.variable}`}>
      <head>
        {/* Dark-only theme */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
