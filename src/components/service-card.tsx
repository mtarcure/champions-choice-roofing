"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={href}>
        <Card className="group bg-white border-gray-200 hover:border-[#0033A0]/30 hover:shadow-md transition-all h-full cursor-pointer">
          <CardContent className="pt-6">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-[#0033A0]/10">
              <Icon className="size-6 text-[#0033A0]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">{title}</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{description}</p>
            <div className="flex items-center gap-1 text-sm font-medium text-[#0033A0] group-hover:text-[#002878] transition-colors">
              Learn more
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
