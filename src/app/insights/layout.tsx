import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [], // Remove OG images from article pages
  },
  twitter: {
    card: "summary", // Smaller card without large image
    images: [],
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
