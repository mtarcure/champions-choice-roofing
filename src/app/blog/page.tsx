import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

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

const posts = [
  {
    title: "How to Spot Storm Damage on Your Roof",
    excerpt:
      "Louisville sees 3-5 major storm events per year. Learn the telltale signs of wind, hail, and water damage so you can act fast.",
    date: "Coming Soon",
  },
  {
    title: "Roof Repair vs. Replacement: Making the Right Choice",
    excerpt:
      "When does it make sense to patch things up versus investing in a full replacement? Our guide breaks down the decision factors.",
    date: "Coming Soon",
  },
  {
    title: "Understanding Your Roof Warranty",
    excerpt:
      "From manufacturer warranties to workmanship guarantees, learn what's covered and how to protect your investment.",
    date: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-zinc-950 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Expert roofing tips, storm damage guides, and industry insights from the
            Champions Choice team.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="group bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden"
              >
                {/* Placeholder image */}
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span className="text-zinc-600 text-sm font-medium">
                    Article Image
                  </span>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                      <CalendarDays className="size-3 mr-1" />
                      {post.date}
                    </Badge>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="text-center mt-16 py-12 rounded-2xl bg-zinc-900/30 border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-2">
              More Content Coming Soon
            </h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              We&apos;re working on expert guides and tips to help Louisville homeowners
              make informed decisions about their roofs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
