import { HeroSection } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesPreview } from "@/components/home/services-preview";
import { StormCTA } from "@/components/storm-cta";
import { TestimonialsSection } from "@/components/home/testimonials";
import { TeamPreview } from "@/components/home/team-preview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <StormCTA />
      <TestimonialsSection />
      <TeamPreview />
    </>
  );
}
