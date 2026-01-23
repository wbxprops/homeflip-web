import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Book Your Strategy Call | Homeflip.ai",
  description: "Discover how our proven probate system can help you find off-market deals at 26-38% of ARV. Book your free strategy call today.",
  openGraph: {
    title: "Thank You - Book Your Strategy Call",
    description: "Discover how our proven probate system can help you find off-market deals at 26-38% of ARV.",
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
    title: "Thank You - Book Your Strategy Call",
    description: "Discover how our proven probate system can help you find off-market deals at 26-38% of ARV.",
    images: ["/og-homeflip-homepage.png"],
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
