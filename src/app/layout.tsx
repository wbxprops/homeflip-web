import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homeflip.ai - Consistent Off-Market Deals Powered by Probate",
  description: "The simplified, guided, AI-powered system for real estate investors who want consistent deal flow without the chaos.",
  openGraph: {
    title: "Homeflip.ai - Consistent Off-Market Deals Powered by Probate",
    description: "The simplified, guided, AI-powered system for real estate investors who want consistent deal flow without the chaos.",
    type: "website",
    locale: "en_US",
    siteName: "Homeflip.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeflip.ai - Consistent Off-Market Deals Powered by Probate",
    description: "The simplified, guided, AI-powered system for real estate investors who want consistent deal flow without the chaos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/brb7iad.css" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0118] text-white/95 selection:bg-[#22d3ee]/30`}>
        {children}
      </body>
    </html>
  );
}
