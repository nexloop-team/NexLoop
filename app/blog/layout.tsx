import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://nexloop.in/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
