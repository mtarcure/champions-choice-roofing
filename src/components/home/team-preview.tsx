"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

const team = [
  {
    name: "Brent Thompson",
    title: "Owner",
    nickname: 'The "Field General"',
    bio: "Veteran contractor with a family legacy in building. Passionate about quality craftsmanship and doing right by every homeowner.",
    imageSrc:
      "https://img1.wsimg.com/isteam/ip/8d8a56ab-8cd5-46db-b869-97129cf30dbf/7I8A1022.jpeg",
    team: "red" as const,
  },
  {
    name: "Dean Brewer",
    title: "Part-Owner",
    nickname: 'The "Brand Champion"',
    bio: "Building Champions Choice into Louisville's most recognized and trusted roofing brand.",
    imageSrc:
      "https://img1.wsimg.com/isteam/ip/8d8a56ab-8cd5-46db-b869-97129cf30dbf/IMG_9801.jpeg",
    team: "blue" as const,
  },
  {
    name: "Wes Miller",
    title: "Sales",
    nickname: 'The "Chief Sales Champion"',
    bio: "10 years of insurance expertise. Military veteran dedicated to championing for every customer.",
    imageSrc:
      "https://img1.wsimg.com/isteam/ip/8d8a56ab-8cd5-46db-b869-97129cf30dbf/IMG_9800.jpeg",
  },
];

export function TeamPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Meet the Champions"
          subtitle="The team behind Louisville's most trusted roofing company"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard {...member} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="text-center mt-10">
          <Link href="/about">
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              Learn Our Story
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
