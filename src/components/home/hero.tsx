"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#0d0d20]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,0,0,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,51,160,0.10),transparent_60%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/images/logo/logo.jpeg"
              alt="Champions Choice Roofing - Storm Damage Repair, Louisville KY"
              width={320}
              height={320}
              className="drop-shadow-2xl mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0033A0]/20 border border-[#0033A0]/40 mb-6">
              <div className="size-2 rounded-full bg-[#6699ff] animate-pulse" />
              <span className="text-sm text-[#6699ff] font-medium">
                Louisville&apos;s Trusted Roofing Contractor
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]"
          >
            Storm-Tested.{" "}
            <span className="bg-gradient-to-r from-[#CC0000] to-[#0033A0] bg-clip-text text-transparent">
              Champion-Approved.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-zinc-300 max-w-xl leading-relaxed"
          >
            Expert roof installations, storm restoration, and unmatched warranties.
            We champion for Louisville homeowners with every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://forms.gle/RaFpTL7RmBaLgeGF6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#CC0000] text-white hover:bg-[#A30000] font-bold text-base px-8 py-6 w-full sm:w-auto">
                Get Free Inspection
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </a>
            <a href="tel:5029190278">
              <Button className="bg-[#0033A0] text-white hover:bg-[#002878] font-semibold text-base px-8 py-6 w-full sm:w-auto">
                <Phone className="size-4 mr-2" />
                (502) 919-0278
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
    </section>
  );
}
