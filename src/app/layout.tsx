import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  preload: true,
});

const BASE_URL = "https://nexloop.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NexLoop | AI Automation, Websites & Mobile Apps",
    template: "%s | NexLoop",
  },
  description:
    "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, voice agents, and business automation solutions for growing businesses.",
  keywords: [
    "AI automation",
    "website development",
    "mobile app development",
    "AI chatbots",
    "AI voice agents",
    "WhatsApp automation",
    "NexLoop",
    "digital agency India",
    "business automation",
    "Next.js development",
  ],
  authors: [
    { name: "Nikhil Wagh" },
    { name: "Atharva" },
  ],
  creator: "NexLoop",
  publisher: "NexLoop",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon.png",
    other: [
      { rel: "icon", type: "image/svg+xml", url: "/favicon/icon0.svg" },
      { rel: "icon", type: "image/png", url: "/favicon/icon1.png" },
    ],
  },
  manifest: "/favicon/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "NexLoop",
    title: "NexLoop | AI Automation, Websites & Mobile Apps",
    description:
      "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, voice agents, and business automation solutions for growing businesses.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexLoop – AI Automation, Websites & Mobile Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexloop",
    creator: "@nexloop",
    title: "NexLoop | AI Automation, Websites & Mobile Apps",
    description:
      "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, voice agents, and business automation solutions for growing businesses.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
    { media: "(prefers-color-scheme: light)", color: "#F8F8F6" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="bg-background font-sans font-normal text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GradientBackground />
          <Navbar />
          <SmoothScroll>
            <div className="flex min-h-screen flex-col">
              <main className="relative z-0 flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
