import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexLoop — Intelligent AI Automation for Modern Businesses",
  description:
    "NexLoop brings AI automation to your fingertips. We build high-converting websites and AI systems that capture leads, automate conversations, and grow your revenue 24/7.",
  keywords: [
    "AI automation",
    "website development",
    "lead generation",
    "chatbot",
    "WhatsApp automation",
    "voice agents",
  ],
  openGraph: {
    title: "NexLoop — Intelligent AI Automation",
    description: "We build AI systems that generate leads automatically.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
