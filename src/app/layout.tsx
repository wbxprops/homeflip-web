import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
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
      <body 
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-white text-slate-900 selection:bg-[#0891b2]/20`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
