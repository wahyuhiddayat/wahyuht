'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";
import { personalData } from "@/data/personal";

const PHOTOS = [
  { src: "/images/hero-thesis-committee.jpg", alt: "Wahyu presenting his thesis defense with the examining committee" },
  { src: "/images/hero-thesis-defense.jpg", alt: "Wahyu at his thesis defense, Fakultas Ilmu Komputer UI" },
  { src: "/images/hero-pwc-tour.jpg", alt: "Wahyu with colleagues on a company visit to PwC" },
  { src: "/images/hero-me-and-evans.jpg", alt: "Wahyu on Universitas Indonesia campus at dusk" },
];

export default function HeroSection() {
  return (
    <section id="home" className="pt-10 pb-12 lg:pt-16 lg:pb-20 border-b border-hairline scroll-mt-16">
      <FadeIn>
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
      </FadeIn>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] border border-hairline overflow-hidden bg-hairline/20"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={90}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
