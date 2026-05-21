import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["300","400","500","600","700","800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexloop.in"),
  title: {
    default: "NexLoop",
    template: "%s | NexLoop",
  },
  description:
    "NexLoop is a website design and development agency in India. Custom Next.js websites, mobile apps, and AI automation from expert web designers - fast delivery, no templates.",
  keywords: [
    "best website designer",
    "best website design agency",
    "website development agency",
    "web development agency India",
    "best web development company",
    "custom website designer",
    "website design studio",
    "Next.js website development",
    "professional website designer India",
    "mobile app development agency",
    "conversion-focused web design",
    "WhatsApp automation",
    "AI chatbot development",
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
    title: "NexLoop | Best Website Design & Development Agency in India",
    description:
      "NexLoop is a website design and development agency in India. Custom Next.js websites, mobile apps, and AI automation from expert web designers - fast delivery, no templates.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexLoop - Best website design and development agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexloopapp",
    creator: "@nexloopapp",
    title: "NexLoop | Best Website Design & Development Agency in India",
    description:
      "NexLoop is a website design and development agency in India. Custom Next.js websites, mobile apps, and AI automation from expert web designers - fast delivery, no templates.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexLoop",
  url: "https://nexloop.in",
  logo: "https://nexloop.in/icon1.png",
  description:
    "NexLoop is a website design and development agency in India building custom Next.js websites, mobile apps, and AI automation for growing businesses.",
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
  knowsAbout: [
    "Website Design",
    "Website Development",
    "Web Design Agency",
    "Mobile App Development",
    "Next.js Development",
    "UI/UX Design",
    "AI Automation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexLoop",
  url: "https://nexloop.in",
  description:
    "Best website design and development agency in India. Custom Next.js websites, mobile apps, and AI automation by NexLoop.",
  publisher: {
    "@type": "Organization",
    name: "NexLoop",
    url: "https://nexloop.in",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NexLoop - Website Design & Development Agency",
  url: "https://nexloop.in",
  description:
    "Award-quality website design and development agency in India. Custom Next.js sites, mobile apps, and business automation for brands that want to grow online.",
  areaServed: { "@type": "Country", name: "India" },
  serviceType: [
    "Website design",
    "Website development",
    "Web development agency",
    "Mobile app development",
  ],
  provider: {
    "@type": "Organization",
    name: "NexLoop",
    url: "https://nexloop.in",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NexLoop Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design & Development",
          description:
            "Custom Next.js websites with conversion-focused design, SEO structure, and performance built in from day one.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Apps & Mobile Apps",
          description:
            "Product UI, dashboards, and Flutter mobile apps with clear flows and launch-ready builds.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automation & AI",
          description:
            "WhatsApp flows, AI chatbots, and CRM automation that qualify leads and reduce manual follow-up.",
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
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
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
          <LenisProvider>
            <CustomCursor />
            {children}
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
