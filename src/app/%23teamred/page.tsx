import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "#TeamRed | Brent Thompson's Louisville Cardinals Corner",
  description:
    "Brent Thompson, Owner of Champions Choice Roofing, is a die-hard Louisville Cardinals fan. Born and raised in Louisville. This city is Cardinal red.",
  openGraph: {
    title: "#TeamRed | Champions Choice Roofing",
    description: "Brent Thompson's Louisville Cardinals corner. Go Cards!",
  },
};

export default function TeamRedPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ background: "linear-gradient(to bottom, #3d0000 0%, #0a0a0a 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <Badge
              className="mb-4 text-sm px-4 py-1 font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(173,0,0,0.25)",
                color: "#ff6666",
                borderColor: "rgba(173,0,0,0.4)",
              }}
            >
              Louisville Cardinals
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mt-4">
              #TeamRed
            </h1>
            <p
              className="mt-4 text-2xl font-bold"
              style={{ color: "#ff6666" }}
            >
              A BIG C-A-R-D-S Cards CarDS CARDS!
            </p>
            <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto">
              Brent Thompson built Champions Choice from the ground up the same way Louisville
              builds champions -- through grit, hard work, and refusing to lose. The man bleeds
              Cardinal red.
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
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border shadow-2xl"
                style={{ borderColor: "rgba(173,0,0,0.3)" }}
              >
                <Image
                  src="/images/team/brent.jpeg"
                  alt="Brent Thompson - Owner, Champions Choice Roofing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(173,0,0,0.6) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-xl">Brent Thompson</p>
                  <p className="text-red-300 text-sm">Owner, Field General, Cardinals Fan Since Birth</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <div
                  className="rounded-xl p-6 border"
                  style={{
                    background: "rgba(204,0,0,0.05)",
                    borderColor: "rgba(204,0,0,0.25)",
                  }}
                >
                  <h2 className="text-2xl font-bold text-[#1C1C1C] mb-3">
                    The Field General. The Cardinal.
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    A veteran contractor who comes from a family of builders, Brent brings
                    decades of hands-on experience to every project. His commitment to quality
                    craftsmanship is the foundation Champions Choice was built on.
                  </p>
                  <p className="mt-4 text-[#6B7280] leading-relaxed">
                    When he is not on a roof, you will find him watching his Louisville
                    Cardinals. Born and raised in Louisville, Brent will tell you this city
                    belongs to the red and black. He will also install a great roof for you
                    regardless of who you cheer for.
                  </p>
                </div>

                <Card
                  className="border"
                  style={{
                    background: "rgba(204,0,0,0.06)",
                    borderColor: "rgba(204,0,0,0.25)",
                  }}
                >
                  <CardContent className="pt-5">
                    <p className="text-lg italic font-serif leading-relaxed text-[#1C1C1C]">
                      &ldquo;This is a Louisville company. Always has been, always will be.
                      Dean knows it too. He just can&apos;t admit it in public.&rdquo;
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#CC0000]">
                      -- Brent Thompson, Owner
                    </p>
                  </CardContent>
                </Card>

                <div
                  className="rounded-xl p-5 border"
                  style={{
                    background: "rgba(0,51,160,0.05)",
                    borderColor: "rgba(0,51,160,0.2)",
                  }}
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-[#0033A0] mb-2">
                    Brent on the Kentucky Wildcats
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    &ldquo;I have nothing but respect for Dean. He works hard, he cares about
                    this company, and he will be a great father. He is, however, deeply
                    confused about basketball. I keep hoping it will sort itself out.&rdquo;
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
                { number: "L", label: "The Only Letter That Matters" },
                { number: "#1", label: "City in the Commonwealth" },
                { number: "100%", label: "Brent's Cardinal Blood" },
                { number: "0", label: "Times Brent Has Cheered for UK" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border bg-white border-[#CC0000]/20"
                >
                  <p className="text-3xl font-black text-[#CC0000]">
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
              Cardinal fan or not, Brent will take care of your roof.
            </h2>
            <p className="text-[#6B7280] mb-8">
              Decades of experience, family-built values, and a Louisville-first mindset.
              Schedule your free inspection with the team Brent built from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="font-bold text-base px-8 py-6 bg-[#CC0000] text-white hover:bg-[#A30000]"
                >
                  Get a Free Inspection
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </a>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000]/10 font-semibold text-base px-8 py-6"
                >
                  <ArrowLeft className="size-4 mr-2" />
                  Back to Main Site
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#6B7280]">
              <Link href="/%23teamblue" className="text-[#0033A0] hover:text-[#002878] transition-colors underline underline-offset-2">
                Visit #TeamBlue
              </Link>
              {" "}if you enjoy losing arguments.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
