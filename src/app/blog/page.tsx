import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Roofing tips, storm damage guides, and expert advice from Champions Choice Roofing. Coming soon.",
  openGraph: {
    title: "Blog | Champions Choice Roofing",
    description:
      "Roofing tips, storm damage guides, and expert advice from Louisville's trusted roofers.",
  },
};


export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1A1A2E] to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Champions Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            Expert roofing tips, storm damage guides, and industry insights from the
            Champions Choice team.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-6 min-h-[500px] flex items-center">
        <div className="max-w-2xl mx-auto text-center w-full">
          <Badge className="mb-4 bg-[#0033A0]/20 text-[#0033A0] border-[#0033A0]/40">
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4 tracking-tight">
            In-Depth Roofing Guides
          </h2>
          <p className="text-lg text-[#6B7280] mb-8 leading-relaxed max-w-lg mx-auto">
            We&apos;re developing expert articles on storm damage restoration, roof replacement decisions, insurance claims, hail damage assessment, and how to extend your roof&apos;s lifespan. Champions Choice is committed to educating Louisville homeowners.
          </p>

          <div className="bg-[#F3F4F6] rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4">
              Get Real-Time Updates
            </h3>
            <p className="text-[#6B7280] mb-6">
              Follow Champions Choice on Facebook for the latest roofing tips, project showcases, and storm damage alerts.
            </p>
            <a
              href="https://www.facebook.com/share/18zCDqTtdS/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0033A0] text-white hover:bg-[#002878] font-semibold px-8 py-6">
                <Share2 className="size-5 mr-2" />
                Follow on Facebook
              </Button>
            </a>
          </div>

          <p className="text-sm text-[#6B7280]">
            Or call {" "}
            <a href="tel:5029190278" className="text-[#0033A0] hover:text-[#002878] font-semibold">
              (502) 919-0278
            </a>
            {" "} for expert advice today.
          </p>
        </div>
      </section>
    </>
  );
}
