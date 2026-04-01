import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Champions Choice Roofing | Louisville, KY",
    template: "%s | Champions Choice Roofing",
  },
  description:
    "Storm-Tested. Champion-Approved. Louisville's premier roofing contractor offering roof replacement, storm restoration, siding, and gutters. Free inspections. 5.0 Google rating.",
  keywords: [
    "roofing",
    "Louisville KY",
    "roof replacement",
    "storm damage",
    "roof repair",
    "siding",
    "gutters",
    "Champions Choice Roofing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Champions Choice Roofing",
    title: "Champions Choice Roofing | Louisville, KY",
    description:
      "Storm-Tested. Champion-Approved. Louisville's premier roofing contractor.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Champions Choice Roofing",
  description:
    "Louisville's premier roofing contractor offering roof replacement, storm restoration, siding, and gutters.",
  url: "https://roofwithchampions.com",
  telephone: ["+15024348253", "+15029190278"],
  email: "dean@roofwithchampions.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Louisville",
    addressRegion: "KY",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "14",
    bestRating: "5",
  },
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Louisville",
    "@id": "https://www.wikidata.org/wiki/Q43668",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-zinc-50 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
