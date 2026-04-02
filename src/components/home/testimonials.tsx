"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <div className="text-center mb-12">
          <SectionHeading
            title="What Louisville Homeowners Say"
            subtitle=""
          />
          <Badge variant="outline" className="mt-4 border-[#D4A843]/50 text-[#D4A843] text-sm px-4 py-1.5 font-semibold">
            5.0 Google Rating • 14+ Verified Reviews
          </Badge>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="bg-white border-gray-200 h-full shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl leading-none mb-4">&ldquo;</div>
                  <StarRating />
                  <p className="mt-5 text-[#1C1C1C] leading-relaxed text-sm font-serif italic">
                    {t.text}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-[#1C1C1C]">{t.name}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      Google Reviews
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
