"use client";

import { ArrowRight, Heart, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TeamCard } from "@/components/team-card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/data/team";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We use only premium products from Owens Corning, Mastic, and James Hardie. No shortcuts, no compromises.",
  },
  {
    icon: Heart,
    title: "Customer Champions",
    description:
      "We fight for our customers. From insurance claims to warranty support, we're in your corner every step.",
  },
  {
    icon: Users,
    title: "Louisville Roots",
    description:
      "We live here, we work here, we raise our families here. Louisville isn't just our market -- it's our home.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1A1A2E] to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            Champions Choice Roofing was built on a simple mission: deliver
            top-quality products at a fair price while championing for our customers.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="bg-white border-gray-200 h-full shadow-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-[#0033A0]/10">
                      <value.icon className="size-6 text-[#0033A0]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Meet the Team"
            subtitle="Three guys with a shared vision, different allegiances, and one goal: the best roofing experience in Louisville."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard
                  name={member.name}
                  title={member.title}
                  nickname={member.nickname}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  team={member.team}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Rivalry Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1C]">
                United by Roofing. Divided by Rivalry.
              </h2>
              <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
                We agree on quality craftsmanship. Everything else is up for debate.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Team Red - Cardinals */}
            <AnimatedSection delay={0.1}>
              <Card className="overflow-hidden border-[#CC0000]/20 bg-gradient-to-br from-[#CC0000]/5 to-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-black text-[#CC0000]">L</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#CC0000]">Team Red</h3>
                      <p className="text-sm text-[#6B7280]">Go Cards!</p>
                    </div>
                  </div>
                  <p className="text-[#1C1C1C] leading-relaxed">
                    Brent bleeds Cardinal red. Born and raised in Louisville, he&apos;ll
                    tell you the Cards own this city. Try arguing otherwise... we dare
                    you.
                  </p>
                  <p className="mt-4 text-sm text-[#CC0000] font-medium italic">
                    &ldquo;This is a Louisville company. Always has been, always will be.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Team Blue - Wildcats */}
            <AnimatedSection delay={0.2}>
              <Card className="overflow-hidden border-[#0033A0]/20 bg-gradient-to-br from-[#0033A0]/5 to-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-black text-[#0033A0]">UK</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0033A0]">Team Blue</h3>
                      <p className="text-sm text-[#6B7280]">Go Cats!</p>
                    </div>
                  </div>
                  <p className="text-[#1C1C1C] leading-relaxed">
                    Dean is a Wildcat through and through. He may work in Louisville,
                    but his heart belongs to the Big Blue Nation. Eight national
                    championships speak for themselves.
                  </p>
                  <p className="mt-4 text-sm text-[#0033A0] font-medium italic">
                    &ldquo;Brent knows deep down. He just won&apos;t admit it yet.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Hiring */}
      <section className="py-20 px-6 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1C]">
              Join the Champions
            </h2>
            <p className="mt-4 text-lg text-[#6B7280] max-w-xl mx-auto">
              We&apos;re growing in 2026! Looking for office managers, sales reps, and
              skilled crew members who share our commitment to quality.
            </p>
            <a
              href="https://forms.gle/RaFpTL7RmBaLgeGF6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block"
            >
              <Button className="bg-[#CC0000] text-white hover:bg-[#A30000] font-bold text-base px-8 py-6">
                Get in Touch
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
