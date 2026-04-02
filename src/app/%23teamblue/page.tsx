import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "#TeamBlue | Dean Brewer's Kentucky Wildcats Corner",
  description:
    "Dean Brewer, Part-Owner of Champions Choice Roofing, is a die-hard Kentucky Wildcats fan. Eight national championships. Big Blue Nation. Need we say more?",
  openGraph: {
    title: "#TeamBlue | Champions Choice Roofing",
    description: "Dean Brewer's Kentucky Wildcats corner. Go Cats!",
  },
};

export default function TeamBluePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ background: "linear-gradient(to bottom, #0033A0 0%, #0a0a0a 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <Badge
              className="mb-4 text-sm px-4 py-1 font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(0,51,160,0.25)",
                color: "#6699ff",
                borderColor: "rgba(0,51,160,0.4)",
              }}
            >
              Big Blue Nation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mt-4">
              #TeamBlue
            </h1>
            <p
              className="mt-4 text-2xl font-bold"
              style={{ color: "#6699ff" }}
            >
              Go Cats! Go Cats! GO CATS!
            </p>
            <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto">
              When Dean Brewer is not putting Champions Choice Roofing on the map, you will
              find him somewhere arguing that Kentucky basketball is the greatest program in
              the history of American sports. He is not wrong.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border shadow-2xl"
                style={{ borderColor: "rgba(0,51,160,0.3)" }}
              >
                <Image
                  src="/images/team/dean.jpeg"
                  alt="Dean Brewer - Part-Owner, Champions Choice Roofing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,51,160,0.6) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-xl">Dean Brewer</p>
                  <p className="text-blue-300 text-sm">Part-Owner, Brand Champion, Wildcat 4 Life</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <div
                  className="rounded-xl p-6 border"
                  style={{
                    background: "rgba(0,51,160,0.08)",
                    borderColor: "rgba(0,51,160,0.3)",
                  }}
                >
                  <h2 className="text-2xl font-bold text-[#1C1C1C] mb-3">
                    The Brand Champion. The Blue Believer.
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    Dean is the marketing and brand visionary behind Champions Choice Roofing.
                    He is building this company into Louisville&apos;s most recognized roofing
                    name -- one roof at a time. A proud Kentucky Wildcats fan and soon-to-be
                    father, Dean brings energy and ambition to everything he touches.
                  </p>
                  <p className="mt-4 text-[#6B7280] leading-relaxed">
                    Yes, he works in Louisville. Yes, he knows Brent bleeds red. That just
                    makes every conversation about basketball more entertaining.
                  </p>
                </div>

                <Card
                  className="border"
                  style={{
                    background: "rgba(0,51,160,0.08)",
                    borderColor: "rgba(0,51,160,0.3)",
                  }}
                >
                  <CardContent className="pt-5">
                    <p
                      className="text-lg italic font-serif leading-relaxed text-[#1C1C1C]"
                    >
                      &ldquo;Eight national championships. What more do you need to know?
                      I feel bad for Brent sometimes. Truly. Must be hard.&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#0033A0]">
                      -- Dean Brewer, Part-Owner
                    </p>
                  </CardContent>
                </Card>

                <div
                  className="rounded-xl p-5 border"
                  style={{
                    background: "rgba(204,0,0,0.05)",
                    borderColor: "rgba(204,0,0,0.2)",
                  }}
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-[#CC0000] mb-2">
                    Dean on the Louisville Cardinals
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    &ldquo;I respect Brent deeply. We built this company together. He is my
                    partner, my friend, and a great contractor. He also roots for the
                    Cardinals, which is something I pray for him about regularly.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="py-12 px-6 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: "8", label: "National Championships" },
                { number: "#1", label: "All-Time NCAA Wins" },
                { number: "100%", label: "Dean's Loyalty Level" },
                { number: "0", label: "Cardinals Championships (recently)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border bg-white border-[#0033A0]/20"
                >
                  <p className="text-3xl font-black text-[#0033A0]">
                    {stat.number}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F3F4F6]">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">
              Dean is a great fan. He is also a great roofer.
            </h2>
            <p className="text-[#6B7280] mb-8">
              Whether you are Big Blue Nation or just need a new roof, Dean and the
              Champions Choice team will take care of you. Free inspection, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="font-bold text-base px-8 py-6"
                  style={{ backgroundColor: "#0033A0", color: "white" }}
                >
                  Get a Free Inspection
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </a>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10 font-semibold text-base px-8 py-6"
                >
                  <ArrowLeft className="size-4 mr-2" />
                  Back to Main Site
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#6B7280]">
              <Link href="/%23teamred" className="text-[#CC0000] hover:text-[#A30000] transition-colors underline underline-offset-2">
                Switch to #TeamRed
              </Link>
              {" "}if you have questionable taste.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
