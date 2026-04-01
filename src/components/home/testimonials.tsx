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
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Louisville Homeowners Say"
          subtitle="5.0 stars on Google with 14+ verified reviews"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="bg-zinc-900/50 border-zinc-800 h-full">
                <CardContent className="pt-6">
                  <StarRating />
                  <p className="mt-4 text-zinc-300 leading-relaxed text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">Google Review</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
