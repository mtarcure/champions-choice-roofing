"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import { teamMembers } from "@/data/team";

export function TeamPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Meet the Champions"
          subtitle="The team behind Louisville's most trusted roofing company"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard
                name={member.name}
                title={member.title}
                nickname={member.nickname}
                bio={member.shortBio}
                imageSrc={member.imageSrc}
                team={member.team}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="text-center mt-10">
          <Link href="/about">
            <Button variant="outline" className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
              Learn Our Story
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
