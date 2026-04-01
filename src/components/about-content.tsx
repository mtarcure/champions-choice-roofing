"use client";

import Link from "next/link";
import { ArrowRight, Heart, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TeamCard } from "@/components/team-card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const team = [
  {
    name: "Brent Thompson",
    title: "Owner",
    nickname: 'The "Field General"',
    bio: "A veteran contractor who comes from a family of builders, Brent brings decades of hands-on experience to every project. His commitment to quality craftsmanship is the foundation Champions Choice was built on. When he's not on a roof, you'll find him cheering on the Louisville Cardinals.",
    imageSrc:
      "https://img1.wsimg.com/isteam/ip/8d8a56ab-8cd5-46db-b869-97129cf30dbf/7I8A1022.jpeg",
    team: "red" as const,
  },
  {
    name: "Dean Brewer",
    title: "Part-Owner",
    nickname: 'The "Brand Champion"',
    bio: "Dean is the marketing and brand visionary behind Champions Choice. He's building the company into Louisville's most recognized and trusted roofing name. A proud Wildcats fan and soon-to-be father, Dean brings energy and ambition to everything he touches.",
    imageSrc:
      "https://img1.wsimg.com/isteam/ip/8d8a56ab-8cd5-46db-b869-97129cf30dbf/IMG_9801.jpeg",
    team: "blue" as const,
  },
  {
    name: "Wes Miller",
    title: "Sales",
    nickname: 'The "Chief Sales Champion"',
    bio: "With 10 years of insurance expertise and a background in military service, Wes knows how to fight for homeowners. A dedicated father and man of faith, he brings integrity and persistence to every customer interaction.",
    imageSrc:
      "https://img1.wsimg.com/isteam/ip/8d8a56ab-8cd5-46db-b869-97129cf30dbf/IMG_9800.jpeg",
  },
];

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
      "We live here, we work here, we raise our families here. Louisville isn't just our market — it's our home.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-zinc-950 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
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
                <Card className="bg-zinc-900/50 border-zinc-800 h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-500/10">
                      <value.icon className="size-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
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
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Meet the Team"
            subtitle="Three guys with a shared vision, different allegiances, and one goal: the best roofing experience in Louisville."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard {...member} />
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                United by Roofing. Divided by Rivalry.
              </h2>
              <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                We agree on quality craftsmanship. Everything else is up for debate.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Team Red - Cardinals */}
            <AnimatedSection delay={0.1}>
              <Card className="overflow-hidden border-red-500/20 bg-gradient-to-br from-red-950/30 to-zinc-900/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-black text-red-500">L</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Team Red</h3>
                      <p className="text-sm text-zinc-400">Go Cards!</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    Brent bleeds Cardinal red. Born and raised in Louisville, he&apos;ll
                    tell you the Cards own this city. Try arguing otherwise... we dare
                    you.
                  </p>
                  <p className="mt-4 text-sm text-red-400 font-medium italic">
                    &ldquo;This is a Louisville company. Always has been, always will be.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Team Blue - Wildcats */}
            <AnimatedSection delay={0.2}>
              <Card className="overflow-hidden border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-zinc-900/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-black text-blue-500">UK</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">Team Blue</h3>
                      <p className="text-sm text-zinc-400">Go Cats!</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    Dean is a Wildcat through and through. He may work in Louisville,
                    but his heart belongs to the Big Blue Nation. Eight national
                    championships speak for themselves.
                  </p>
                  <p className="mt-4 text-sm text-blue-400 font-medium italic">
                    &ldquo;Brent knows deep down. He just won&apos;t admit it yet.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Hiring */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Join the Champions
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
              We&apos;re growing in 2026! Looking for office managers, sales reps, and
              skilled crew members who share our commitment to quality.
            </p>
            <Link href="/contact" className="mt-8 inline-block">
              <Button className="bg-amber-500 text-black hover:bg-amber-400 font-bold text-base px-8 py-6">
                Get in Touch
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
