import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { StormCTA } from "@/components/storm-cta";

export const metadata: Metadata = {
  title: "Champions Choice Shingle Guide",
  description:
    "Explore our Owens Corning shingle lineup — Oakridge, Duration, and Duration Designer. Find the right roof for your Louisville home. Free inspections available.",
  openGraph: {
    title: "Champions Choice Shingle Guide | Champions Choice Roofing",
    description:
      "Your guide to Owens Corning shingles. Oakridge, Duration, and Duration Designer — expert installation in Louisville, KY.",
  },
};

const shingleLines = [
  {
    name: "Owens Corning Oakridge",
    badge: "Great Value",
    badgeClass: "bg-[#0033A0]/15 text-[#0033A0] border-[#0033A0]/30",
    icon: Star,
    iconClass: "text-[#D4A843]",
    headline: "Affordable, Reliable, Beautiful",
    description:
      "The Oakridge shingle is the workhorse of the Owens Corning lineup. Designed for homeowners who want dependable protection without compromising on style, Oakridge delivers laminate construction and a wide palette of classic color options to suit any home exterior. It's the smart starting point for a roof that looks sharp and lasts.",
    bullets: [
      "Dimensional laminate construction for added depth",
      "Available in 20+ colors including timeless neutrals",
      "StreakGuard algae resistance built in",
      "Lifetime limited warranty",
    ],
    image: "/images/gallery/project-1.jpg",
    imageAlt: "Completed roof replacement project",
    pdfHref: "/brochures/oakridge.pdf",
    pdfLabel: "Download Oakridge Brochure",
    reversed: false,
  },
  {
    name: "Owens Corning Duration",
    badge: "Most Popular",
    badgeClass: "bg-[#CC0000]/15 text-[#CC0000] border-[#CC0000]/30",
    icon: Shield,
    iconClass: "text-[#CC0000]",
    headline: "Premium Durability. SureNail Technology.",
    description:
      "Duration is our most-installed shingle for good reason. The patented SureNail Technology features a reinforced nailing zone that delivers superior holding power in high winds — up to 130 mph. If Louisville weather has taught you anything, it's that your roof needs to handle whatever comes. Duration answers that call.",
    bullets: [
      "SureNail Technology for exceptional wind resistance",
      "130 mph wind warranty",
      "Enhanced adhesive strips for a watertight seal",
      "Available in 30+ designer-inspired colors",
    ],
    image: "/images/gallery/drone-aerial.jpg",
    imageAlt: "Aerial drone view of completed roof",
    pdfHref: "/brochures/duration.pdf",
    pdfLabel: "Download Duration Brochure",
    reversed: true,
  },
  {
    name: "Owens Corning Duration Designer",
    badge: "Premium",
    badgeClass: "bg-[#1A1A2E]/10 text-[#1A1A2E] border-[#1A1A2E]/20",
    icon: Zap,
    iconClass: "text-[#1A1A2E]",
    headline: "Luxury Architectural Look. Maximum Curb Appeal.",
    description:
      "Duration Designer takes everything great about Duration and elevates it with bold architectural profiles and statement colors. These shingles are built for homeowners who see their roof as part of their home's identity — not just its protection. If you want your house to stop traffic, this is your shingle.",
    bullets: [
      "Architectural shadow lines for visual depth",
      "Bold colors not available in standard lines",
      "All SureNail wind resistance benefits included",
      "Pairs beautifully with James Hardie siding",
    ],
    image: "/images/gallery/drone-aerial-2.jpg",
    imageAlt: "Aerial drone view showing architectural shingle detail",
    pdfHref: "/brochures/flex.pdf",
    pdfLabel: "Download Duration Designer Brochure",
    reversed: false,
  },
];

export default function RoofReplacementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1A1A2E] to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#0033A0]/20 text-[#6699ff] border-[#0033A0]/30 text-sm px-4 py-1">
              Owens Corning Preferred Contractor
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4">
              Champions Choice Shingle Guide
            </h1>
            <p className="mt-3 text-xl font-medium text-zinc-300">
              Your Roof, Your Style
            </p>
            <p className="mt-6 text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              As an Owens Corning Preferred Contractor, we install the full lineup of Owens
              Corning shingles — the most trusted name in roofing. Whether you need reliable
              value, premium durability, or architectural impact, we have a shingle for your
              home and your budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#CC0000] text-white hover:bg-[#A30000] font-bold text-base px-8 py-6"
                >
                  Get a Free Estimate
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0033A0] text-white hover:bg-[#0033A0]/20 font-semibold text-base px-8 py-6"
                >
                  Ask Us a Question
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Shingle Lines */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {shingleLines.map((line, i) => (
            <AnimatedSection key={line.name} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  line.reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className={line.reversed ? "[direction:ltr]" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <Image
                      src={line.image}
                      alt={line.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={line.reversed ? "[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-2.5 rounded-xl bg-[#F3F4F6] border border-gray-200">
                      <line.icon className={`size-5 ${line.iconClass}`} />
                    </div>
                    <Badge className={`text-xs px-3 py-1 ${line.badgeClass}`}>
                      {line.badge}
                    </Badge>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1C] mb-2">
                    {line.name}
                  </h2>
                  <p className="text-lg text-[#0033A0] font-medium mb-4 italic font-serif">
                    {line.headline}
                  </p>
                  <p className="text-[#6B7280] leading-relaxed mb-6">
                    {line.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {line.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[#1C1C1C]">
                        <span className="mt-1.5 size-1.5 rounded-full bg-[#0033A0] shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#CC0000] text-white hover:bg-[#A30000] font-bold">
                        Get This Roof
                        <ArrowRight className="size-4 ml-2" />
                      </Button>
                    </a>
                    <a href={line.pdfHref} download>
                      <Button
                        variant="outline"
                        className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10"
                      >
                        <Download className="size-4 mr-2" />
                        {line.pdfLabel}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Brochure Downloads Summary */}
      <section className="py-20 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1C]">
                Download Product Brochures
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl mx-auto">
                Take the full specs with you. Share with your insurance adjuster or compare
                options side by side.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {shingleLines.map((line) => (
              <StaggerItem key={line.name}>
                <Card className="bg-white border-gray-200 hover:border-[#0033A0]/30 hover:shadow-md transition-all group">
                  <CardContent className="pt-6 flex flex-col gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-[#F3F4F6] group-hover:bg-[#0033A0]/10 transition-colors">
                      <Download className="size-5 text-[#0033A0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C]">{line.name}</h3>
                      <p className="text-sm text-[#6B7280] mt-1">{line.headline}</p>
                    </div>
                    <a href={line.pdfHref} download className="mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10"
                      >
                        Download PDF
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Card className="bg-[#1A1A2E] border-[#0033A0]/30 overflow-hidden">
              <CardContent className="pt-8 pb-8 text-center px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6699ff] mb-3">
                  Storm-Tested. Champion-Approved.
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                  Not sure which shingle is right for you?
                </h2>
                <p className="text-zinc-300 leading-relaxed mb-8">
                  Our team will walk through every option with you during your free inspection.
                  No pressure, no upsell -- just honest advice from people who know roofs.
                </p>
                <a
                  href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#CC0000] text-white hover:bg-[#A30000] font-bold text-base px-8 py-6"
                  >
                    Schedule Your Free Inspection
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <StormCTA />
    </>
  );
}
