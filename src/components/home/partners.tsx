"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";

const partners = [
  { src: "/images/partners/bbb.png", alt: "Better Business Bureau", width: 120, height: 60 },
  { src: "/images/partners/roofr.png", alt: "Roofr", width: 120, height: 60 },
  { src: "/images/partners/reese.jpeg", alt: "Reese", width: 120, height: 60 },
  { src: "/images/partners/red-solo.jpg", alt: "Red Solo", width: 120, height: 60 },
];

export function PartnersSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Partners"
          subtitle="Trusted by the best in the industry"
        />
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.alt}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
