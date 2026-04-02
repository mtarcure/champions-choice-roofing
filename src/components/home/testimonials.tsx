"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";
import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Champions Choice replaced our entire roof after the April storm. They handled everything with our insurance company and the crew was professional from start to finish. Highly recommend!",
  },
  {
    name: "James T.",
    text: "Brent and his team did an outstanding job on our new roof. The Owens Corning shingles look amazing and they finished ahead of schedule. Fair pricing and quality work.",
  },
  {
    name: "Rachel K.",
    text: "Called them after finding a leak and they were out the next morning. Fixed the issue quickly and even spotted some other potential problems. Great customer service and honest people.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Louisville Homeowners Say"
          subtitle="5.0 stars on Google with 14+ verified reviews"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="bg-white border-gray-200 h-full shadow-sm">
                <CardContent className="pt-6">
                  <StarRating />
                  <p className="mt-4 text-[#1C1C1C] leading-relaxed text-sm font-serif italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#1C1C1C]">{t.name}</p>
                  <p className="text-xs text-[#6B7280]">Google Review</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
