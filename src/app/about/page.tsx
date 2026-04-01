import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Champions Choice Roofing team. Brent Thompson, Dean Brewer, and Wes Miller are Louisville's trusted roofing experts with a mission to deliver quality at a fair price.",
  openGraph: {
    title: "About Us | Champions Choice Roofing",
    description: "Meet the team behind Louisville's most trusted roofing company.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
