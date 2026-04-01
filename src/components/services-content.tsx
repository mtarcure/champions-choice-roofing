"use client";

import {
  Hammer,
  Wrench,
  Settings,
  Wind,
  PanelLeft,
  Layers,
  Columns3,
  Droplets,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Hammer,
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
    icon: Wrench,
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
    icon: Settings,
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
    icon: Wind,
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
  {
    icon: PanelLeft,
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
    icon: Layers,
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
    icon: Columns3,
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
    icon: Droplets,
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
    icon: ShieldCheck,
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

export function ServicesContent() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={0.1}>
            <div
              className={`flex flex-col lg:flex-row gap-10 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                    <service.icon className="size-12 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Badge variant="secondary" className="text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-zinc-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
