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
    <section id="home" className="pt-6 pb-8 border-b border-hairline">
      <FadeIn>
        <div className="flex items-start justify-between gap-6 mb-4">
          <span className="station-num">STA 01</span>
          <div className="font-mono text-xs text-muted text-right leading-relaxed">
            <div>{personalData.location}</div>
            <div>{personalData.availability}</div>
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mb-3">
          {personalData.greeting}
        </h1>

        <p className="text-lg text-muted mb-2 leading-relaxed">
          {personalData.tagline}{" "}
          <span className="block mt-1">
            <TypingAnimation
              words={personalData.roles}
              className="text-accent font-medium"
            />
          </span>
        </p>

        <p className="text-muted italic leading-relaxed mb-6">
          {personalData.casualNote}
        </p>
      </FadeIn>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
