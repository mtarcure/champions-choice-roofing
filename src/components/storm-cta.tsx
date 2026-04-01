"use client";

import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./animated-section";

export function StormCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <AlertTriangle className="size-6 text-black" />
                <span className="text-sm font-bold uppercase tracking-wider text-black/70">
                  Storm Alert
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                Just Had Storm Damage?
              </h2>
              <p className="text-lg text-black/80 max-w-xl">
                Get your free roof inspection within 24 hours. Our team responds fast
                when Louisville needs us most.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black text-amber-500 hover:bg-zinc-900 font-bold text-base px-8 py-6"
                >
                  Schedule Free Inspection
                </Button>
              </Link>
              <a href="tel:5024348253">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black/10 font-bold text-base px-8 py-6"
                >
                  <Phone className="size-5 mr-2" />
                  (502) 434-8253
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
