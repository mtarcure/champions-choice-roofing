"use client";

import { Star, MapPin, ShieldCheck, Award } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const stats = [
  {
    icon: Star,
    label: "Google Rating",
    value: "5.0",
    detail: "14+ Reviews",
    color: "text-[#D4A843]",
  },
  {
    icon: Award,
    label: "Owens Corning",
    value: "Preferred",
    detail: "Contractor",
    color: "text-[#0033A0]",
  },
  {
    icon: MapPin,
    label: "Serving",
    value: "Louisville",
    detail: "KY & Surrounding",
    color: "text-[#0033A0]",
  },
  {
    icon: ShieldCheck,
    label: "Licensed",
    value: "Fully",
    detail: "Insured & Bonded",
    color: "text-[#0033A0]",
  },
];

export function TrustBar() {
  return (
    <section className="relative -mt-16 z-10 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <div className={`p-2 rounded-xl bg-[#F3F4F6] ${stat.color}`}>
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#1C1C1C]">{stat.value}</div>
                  <div className="text-xs text-[#6B7280]">{stat.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
