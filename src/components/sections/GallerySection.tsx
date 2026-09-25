'use client';

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";

/** Shows the wider photo collection, clipped to a two-row preview until expanded. */
export default function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const photos = personalData.galleryPhotos;

  return (
    <section id="gallery" className="py-14 lg:pt-16 lg:pb-12 border-b border-hairline scroll-mt-16">
      <div className="section-grid">
        <SectionHeading>Gallery</SectionHeading>

        <div className="section-body">
          <div className={isExpanded ? "photo-rows" : "photo-rows photo-rows-collapsed"}>
            {photos.map((photo) => (
              <div key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  quality={82}
                  className="block h-full w-auto min-w-full max-w-none object-cover border border-hairline"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            aria-expanded={isExpanded}
            className="mt-3 inline-flex min-h-11 items-center font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            {isExpanded ? "Show fewer" : `Show all ${photos.length} photos`}
          </button>
        </div>
      </div>
    </section>
  );
}
