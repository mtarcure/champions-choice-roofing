import type { Metadata } from "next";
import { ServicesContent } from "@/components/services-content";
import { StormCTA } from "@/components/storm-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full roof replacement, repairs, maintenance, siding, gutters, and more. Champions Choice Roofing serves Louisville, KY with Owens Corning, Mastic, and James Hardie products.",
  openGraph: {
    title: "Our Services | Champions Choice Roofing",
    description:
      "Expert roofing, siding, and gutter services for Louisville homeowners.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1A1A2E] to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            Comprehensive roofing, siding, and gutter solutions for Louisville
            homeowners. Quality products, expert installation, and warranties you
            can count on.
          </p>
        </div>
      </section>

      <ServicesContent />
      <StormCTA />
    </>
  );
}
