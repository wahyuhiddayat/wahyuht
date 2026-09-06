'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import { personalData } from "@/data/personal";

const PHOTOS = [
  { src: "/images/hero-graduation-cap.jpg", alt: "Wahyu tossing his graduation cap in front of the Universitas Indonesia rectorate", width: 360, height: 540 },
  { src: "/images/hero-thesis-committee.jpg", alt: "Wahyu presenting his thesis defense with the examining committee", width: 480, height: 360 },
  { src: "/images/hero-graduation-rektorat.jpg", alt: "Wahyu in his graduation sash with the Universitas Indonesia rectorate behind him", width: 360, height: 540 },
  { src: "/images/hero-pwc-tour.jpg", alt: "Wahyu with colleagues on a company visit to PwC", width: 480, height: 360 },
  { src: "/images/hero-thesis-defense.jpg", alt: "Wahyu at his thesis defense, Fakultas Ilmu Komputer UI", width: 324, height: 540 },
  { src: "/images/hero-campus-dusk.jpg", alt: "Wahyu and a friend on Universitas Indonesia campus at dusk", width: 405, height: 540 },
];

// Photos share a row height but not an aspect ratio, so each needs its own width hint.
const ROW_HEIGHTS = { base: 160, sm: 224, lg: 256 };

function photoSizes({ width, height }: { width: number; height: number }) {
  const widthAt = (rowHeight: number) => Math.round((rowHeight * width) / height);

  return [
    `(min-width: 1024px) ${widthAt(ROW_HEIGHTS.lg)}px`,
    `(min-width: 640px) ${widthAt(ROW_HEIGHTS.sm)}px`,
    `${widthAt(ROW_HEIGHTS.base)}px`,
  ].join(", ");
}

export default function HeroSection() {
  return (
    <section id="home" className="pt-10 pb-12 lg:pt-16 lg:pb-20 border-b border-hairline scroll-mt-16">
      <div>
        <div className="flex items-start justify-between gap-6 mb-4">
          <span className="font-mono text-xs text-accent">Available for opportunities</span>
          <div className="font-mono text-xs text-muted text-right leading-relaxed">
            <div>{personalData.location}</div>
            <div>GMT+7</div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-ink max-w-4xl mb-5 text-balance">
          {personalData.greeting}
        </h1>

        <p className="text-xl sm:text-2xl text-muted mb-3 leading-relaxed">
          {personalData.tagline}{" "}
          <span className="block mt-1">
            <TypingAnimation
              words={personalData.roles}
              className="text-accent font-medium"
            />
          </span>
        </p>

        <p className="text-muted italic leading-relaxed mb-10">
          {personalData.casualNote}
        </p>
      </div>

      <div className="flex items-start gap-2 sm:gap-3 overflow-x-auto pb-1">
        {PHOTOS.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={photoSizes(photo)}
            // Only the first is a plausible LCP candidate; preloading all four made them compete.
            priority={index === 0}
            quality={90}
            className="h-40 sm:h-56 lg:h-64 w-auto shrink-0 border border-hairline bg-hairline/20"
          />
        ))}
      </div>
    </section>
  );
}
