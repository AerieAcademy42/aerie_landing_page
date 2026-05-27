import { WhatsAppButton } from "@/components/whats-up-button";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Basic of Computational Design (Rhino + Grasshopper) | 2026",
  description:
    "Join 3000+ students who have trusted Aerie Academy to crack IITs, NITs & SPAs. Structured program for GATE 2026 Architecture & Planning.",
  generator: "v0.app",
  keywords: [
    "GATE 2026",
    "Architecture",
    "Planning",
    "IIT",
    "NIT",
    "SPA",
    "Coaching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased `}>
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
