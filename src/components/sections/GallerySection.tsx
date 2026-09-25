'use client';

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { personalData } from "@/data/personal";

// Roughly two rows on desktop, so the section stays short until someone asks for more.
const COLLAPSED_COUNT = 8;

/** Shows the wider photo collection, collapsed to a preview until expanded. */
export default function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const photos = personalData.galleryPhotos;
  const visiblePhotos = isExpanded ? photos : photos.slice(0, COLLAPSED_COUNT);

  return (
    <section id="gallery" className="py-14 lg:pt-16 lg:pb-12 border-b border-hairline scroll-mt-16">
      <SectionHeading>Gallery</SectionHeading>

      <div className="photo-rows">
        {visiblePhotos.map((photo) => (
          <div key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 30vw, 50vw"
              quality={82}
              className="block h-full w-auto min-w-full max-w-none object-cover border border-hairline"
            />
          </div>
        ))}
      </div>

      {photos.length > COLLAPSED_COUNT && (
        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          className="mt-3 inline-flex min-h-11 items-center font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          {isExpanded ? "Show fewer" : `Show all ${photos.length} photos`}
        </button>
      )}
    </section>
  );
}
