"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

const photos = [
  { src: "/images/gallery/project-1.jpg", alt: "Completed roof installation" },
  { src: "/images/gallery/drone-aerial.jpg", alt: "Aerial drone view of roof project" },
  { src: "/images/gallery/before-after.jpg", alt: "Before and after roof comparison" },
  { src: "/images/gallery/flashing.jpg", alt: "Professional flashing installation" },
  { src: "/images/gallery/drone-aerial-2.jpg", alt: "Drone aerial roof inspection" },
  { src: "/images/gallery/chimney.jpg", alt: "Chimney repair and flashing" },
];

export function GallerySection() {
  return (
    <section className="py-24 px-6 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Champions in Action"
          subtitle="Real projects, real results. See our craftsmanship across Louisville."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <StaggerItem key={photo.src}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 hover:border-[#0033A0]/30 hover:shadow-md transition-all bg-white">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-white font-medium">{photo.alt}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
