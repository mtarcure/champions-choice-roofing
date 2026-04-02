"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

interface ServiceItem {
  photoSrc: string;
  photoAlt: string;
  title: string;
  description: string;
  features: string[];
}

const roofingServices: ServiceItem[] = [
  {
    photoSrc: "/images/services/drone-roofing.jpg",
    photoAlt: "Aerial drone view of roof replacement project",
    title: "Full Roof Replacement",
    description:
      "Whether your roof is aging or storm-damaged, we deliver top-quality replacements that last. Our team uses premium Owens Corning products with extended warranty options to protect your investment for decades.",
    features: [
      "Owens Corning Duration and TruDefinition shingles",
      "Extended manufacturer warranties",
      "Complete tear-off and inspection of decking",
      "Ice and water shield protection",
      "Professional cleanup and haul-away",
    ],
  },
  {
    photoSrc: "/images/services/repair.jpg",
    photoAlt: "Roof repair in progress",
    title: "Roof Repairs",
    description:
      "From minor leaks to missing shingles, our repair team diagnoses issues fast and fixes them right the first time. Every repair starts with a free estimate.",
    features: [
      "Free damage assessments",
      "Emergency repair service",
      "Leak detection and resolution",
      "Shingle replacement and matching",
      "Flashing and vent repair",
    ],
  },
  {
    photoSrc: "/images/services/maintenance.jpg",
    photoAlt: "Roof maintenance inspection",
    title: "Roof Maintenance",
    description:
      "Preventive maintenance extends your roof's life and prevents costly repairs. Our maintenance program keeps your roof in peak condition year-round.",
    features: [
      "Caulking and resealing",
      "Pipe jack repairs",
      "Debris removal",
      "Annual inspection reports",
      "Gutter cleaning",
    ],
  },
  {
    photoSrc: "/images/services/ventilation.jpg",
    photoAlt: "Roof ventilation system installation",
    title: "Ventilation Calculations",
    description:
      "Proper attic ventilation is critical for roof longevity and energy efficiency. We calculate and install the right ventilation system for your home.",
    features: [
      "Ridge vent installation",
      "Soffit vent optimization",
      "Attic temperature assessment",
      "Energy efficiency improvements",
      "Code-compliant solutions",
    ],
  },
];

const sidingGutterServices: ServiceItem[] = [
  {
    photoSrc: "/images/services/siding.jpg",
    photoAlt: "Vinyl siding installation on home exterior",
    title: "Vinyl Siding",
    description:
      "Transform your home's exterior with premium Mastic brand vinyl siding. Low maintenance, durable, and available in a wide range of colors and styles.",
    features: [
      "Mastic brand products",
      "Lifetime warranty options",
      "Energy-efficient insulated options",
      "Wide color and style selection",
      "Professional installation",
    ],
  },
  {
    photoSrc: "/images/services/siding.jpg",
    photoAlt: "Hardy fiber cement siding installation",
    title: "Hardy Siding",
    description:
      "James Hardie fiber cement siding offers unmatched durability and curb appeal. Resistant to fire, rot, and pests with a premium finished look.",
    features: [
      "James Hardie HardiePlank and HardiePanel",
      "ColorPlus technology for lasting color",
      "Fire, rot, and pest resistant",
      "30-year warranty",
      "Custom trim and accent options",
    ],
  },
  {
    photoSrc: "/images/services/siding.jpg",
    photoAlt: "Aluminum wraps and soffits installation",
    title: "Aluminum Wraps & Soffits",
    description:
      "Protect your fascia boards and soffits with custom aluminum wraps. Eliminates painting, prevents rot, and gives your roofline a clean finished look.",
    features: [
      "Custom-formed aluminum trim",
      "Fascia board protection",
      "Soffit ventilation panels",
      "Color-matched to your home",
      "Maintenance-free finish",
    ],
  },
  {
    photoSrc: "/images/services/gutters.jpg",
    photoAlt: "Seamless gutter installation",
    title: "Seamless Gutters",
    description:
      "Custom-fabricated seamless gutters in 5-inch and 6-inch sizes. Formed on-site for a perfect fit with no seams to leak.",
    features: [
      '5" and 6" gutter options',
      "On-site custom fabrication",
      "Multiple color choices",
      "Heavy-duty hidden hangers",
      "Proper slope and drainage",
    ],
  },
  {
    photoSrc: "/images/services/gutters.jpg",
    photoAlt: "Gutter guard system protecting gutters from debris",
    title: "Gutter Guards",
    description:
      "Stop cleaning gutters forever. Our gutter guard systems prevent clogs from leaves and debris while allowing water to flow freely.",
    features: [
      "Multiple guard system options",
      "Fits existing gutters",
      "Prevents ice dams",
      "Reduces maintenance to zero",
      "Lifetime performance warranty",
    ],
  },
];

function ServiceBlock({ service, index, reversed }: { service: ServiceItem; index: number; reversed: boolean }) {
  return (
    <AnimatedSection delay={0.1}>
      <div
        className={`flex flex-col lg:flex-row gap-10 items-start ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Photo */}
        <div className="lg:w-1/3 w-full">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src={service.photoSrc}
              alt={service.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-2 right-2 px-3 py-1 rounded-lg bg-white/90 border border-gray-200">
              <Badge variant="secondary" className="text-xs">
                {String(index + 1).padStart(2, "0")}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">
            {service.title}
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            {service.description}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle className="size-4 text-[#0033A0] mt-0.5 shrink-0" />
                <span className="text-sm text-[#1C1C1C]">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ServicesContent() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Roofing Services */}
        <div>
          <SectionHeading
            title="Roofing Services"
            subtitle="Complete roofing solutions from replacement to preventive maintenance"
          />
          <div className="space-y-20">
            {roofingServices.map((service, i) => (
              <ServiceBlock
                key={service.title}
                service={service}
                index={i}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </div>

        {/* Siding & Gutters */}
        <div>
          <SectionHeading
            title="Siding & Gutters"
            subtitle="Premium exterior solutions to protect and beautify your home"
          />
          <div className="space-y-20">
            {sidingGutterServices.map((service, i) => (
              <ServiceBlock
                key={service.title}
                service={service}
                index={i + roofingServices.length}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
