'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import { personalData } from "@/data/personal";

const PHOTOS = [
  { src: "/images/hero-thesis-committee.jpg", alt: "Wahyu presenting his thesis defense with the examining committee", width: 480, height: 360 },
  { src: "/images/hero-thesis-defense.jpg", alt: "Wahyu at his thesis defense, Fakultas Ilmu Komputer UI", width: 324, height: 540 },
  { src: "/images/hero-pwc-tour.jpg", alt: "Wahyu with colleagues on a company visit to PwC", width: 480, height: 360 },
  { src: "/images/hero-campus-dusk.jpg", alt: "Wahyu and a friend on Universitas Indonesia campus at dusk", width: 405, height: 540 },
];

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
        {PHOTOS.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            priority
            quality={90}
            className="h-40 sm:h-56 lg:h-64 w-auto shrink-0 border border-hairline bg-hairline/20"
          />
        ))}
      </div>
    </section>
  );
}
