"use client";

import { Hammer, CloudLightning, Home } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

const services = [
  {
    icon: Hammer,
    title: "Roof Replacement",
    description:
      "Complete tear-off and installation with Owens Corning products. Extended warranties and expert craftsmanship on every job.",
  },
  {
    icon: CloudLightning,
    title: "Storm Restoration",
    description:
      "Louisville gets 3-5 major storm events per year. We respond fast with free damage inspections and insurance claim assistance.",
  },
  {
    icon: Home,
    title: "Siding & Gutters",
    description:
      "Mastic vinyl siding, James Hardie fiber cement, seamless gutters, and gutter guards. Complete exterior protection.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What We Do Best"
          subtitle="From emergency storm repairs to full roof replacements, we deliver top-quality products at a fair price."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
