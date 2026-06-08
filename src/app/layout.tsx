import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "NexLoop | AI Automation, Web & App Development Agency",
  description:
    "AI automation, websites, mobile apps, and digital experiences for ambitious businesses.",
  keywords: [
    "AI automation",
    "web development",
    "mobile app development",
    "digital experiences",
    "NexLoop",
  ],
  authors: [{ name: "NexLoop" }],
  openGraph: {
    title: "NexLoop | We Build Intelligent Systems",
    description:
      "AI automation, websites, mobile apps, and digital experiences for ambitious businesses.",
    type: "website",
    locale: "en_US",
    siteName: "NexLoop",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexLoop | We Build Intelligent Systems",
    description:
      "AI automation, websites, mobile apps, and digital experiences for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
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
