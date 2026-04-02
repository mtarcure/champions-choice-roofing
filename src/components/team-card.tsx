"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamCardProps {
  name: string;
  title: string;
  nickname: string;
  bio: string;
  imageSrc: string;
  team?: "red" | "blue";
}

export function TeamCard({ name, title, nickname, bio, imageSrc, team }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group bg-white border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${name} - ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-sm text-zinc-300">{nickname}</p>
          </div>
        </div>
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {title}
            </Badge>
            {team && (
              <Badge
                className={
                  team === "red"
                    ? "bg-[#AD0000]/15 text-[#AD0000] border-[#AD0000]/30"
                    : "bg-[#0033A0]/15 text-[#0033A0] border-[#0033A0]/30"
                }
              >
                {team === "red" ? "Go Cards" : "Go Cats"}
              </Badge>
            )}
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
