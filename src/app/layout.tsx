import type { Metadata } from "next";
import { IBM_Plex_Sans, Lora, Inter } from "next/font/google";
import "./globals.css";
import { CookieConsentBanner } from "@/components/CookieConsent";
import { TrackingScripts } from "@/components/TrackingScripts";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

// Inter font for CRM-style pages (hub, etc.)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homeflip.ai"),
  title: "AI-Powered Probate Lead Platform for Real Estate Investors | Homeflip.ai",
  description: "Find off-market probate deals using real court data and AI-driven insights.",
  openGraph: {
    title: "AI-Powered Probate Lead Platform for Real Estate Investors",
    description: "Find off-market probate deals using real court data and AI-driven insights.",
    type: "website",
    locale: "en_US",
    siteName: "Homeflip.ai",
    images: [
      {
        url: "/og-homeflip-homepage.png",
        width: 1200,
        height: 630,
        alt: "AI-Powered Probate Lead Platform for Real Estate Investors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Probate Lead Platform for Real Estate Investors",
    description: "Find off-market probate deals using real court data and AI-driven insights.",
    images: ["/og-homeflip-homepage.png"],
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
        className={`${ibmPlexSans.variable} ${lora.variable} ${inter.variable} font-sans antialiased bg-white text-slate-900 selection:bg-[#0891b2]/20`}
        suppressHydrationWarning
      >
        {children}
        <CookieConsentBanner />
        <TrackingScripts />
      </body>
    </html>
  );
}
