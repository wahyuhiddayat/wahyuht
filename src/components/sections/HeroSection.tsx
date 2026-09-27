'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import { personalData } from "@/data/personal";

/** Introduces Wahyu: name, status, and a short sequence of photographs. */
export default function HeroSection() {
  return (
    <section id="home" className="border-b border-hairline scroll-mt-16 pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <h1 className="text-display mb-6">{personalData.greeting}</h1>

          <p className="text-xl sm:text-2xl text-muted leading-snug">
            {personalData.tagline}
            <span className="block mt-1 min-h-[1.375em]">
              <TypingAnimation
                words={personalData.roles}
                className="text-accent font-medium"
              />
            </span>
          </p>

          <p className="mt-5 max-w-lg text-muted leading-relaxed">
            {personalData.casualNote}
          </p>
        </div>

        <div className="lg:col-span-4 lg:text-right space-y-1">
          <p className="text-sm font-medium text-ink flex items-center gap-2 lg:justify-end">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            {personalData.availability}
          </p>
          <p className="text-meta">{personalData.location} · GMT+7</p>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 lg:gap-4">
          {personalData.heroPhotos.map((photo) => {
            const isWide = photo.width > photo.height;
            return (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={isWide ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 20vw, 33vw"}
                priority
                quality={82}
                className={
                  isWide
                    ? "col-span-3 order-last aspect-[4/3] md:col-span-2 md:order-none md:aspect-auto w-full h-full object-cover border border-hairline"
                    : "aspect-[2/3] w-full h-full object-cover border border-hairline"
                }
              />
            );
          })}
        </div>
        <a
          href="#gallery"
          className="mt-3 inline-flex min-h-11 items-center font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          More photos &darr;
        </a>
      </div>
    </section>
  );
}
