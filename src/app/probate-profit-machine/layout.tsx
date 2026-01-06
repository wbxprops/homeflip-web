import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Probate Lead Guide | Homeflip.ai",
  description: "How real estate investors find off-market deals using probate leads. Download your free guide.",
  openGraph: {
    title: "Free Probate Lead Guide",
    description: "How real estate investors find off-market probate deals.",
    type: "website",
    locale: "en_US",
    siteName: "Homeflip.ai",
    images: [
      {
        url: "/og-probate-guide.png",
        width: 1200,
        height: 630,
        alt: "Free Probate Lead Guide - How Real Estate Investors Find Off-Market Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Probate Lead Guide",
    description: "How real estate investors find off-market probate deals.",
    images: ["/og-probate-guide.png"],
  },
};

export default function ProbateProfitMachineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
