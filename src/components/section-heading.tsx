"use client";

import { AnimatedSection } from "./animated-section";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <AnimatedSection className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1C]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
