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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
