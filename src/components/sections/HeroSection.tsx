'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import { personalData } from "@/data/personal";

/** Introduces Wahyu and presents his photographs as one gallery. */
export default function HeroSection() {
  return (
    <section id="home" className="border-b border-hairline scroll-mt-16 py-10 lg:pt-8 lg:pb-24">
      <div className="flex items-start justify-between gap-6 mb-8 font-mono text-xs">
        <span className="text-accent">Available for opportunities</span>
        <div className="text-right text-muted leading-relaxed">
          <div>{personalData.location}</div>
          <div>GMT+7</div>
        </div>
      </div>

      <div>
        <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-ink text-balance mb-6">
          {personalData.greeting}
        </h1>

        <p className="max-w-lg text-xl sm:text-2xl text-muted leading-relaxed">
          {personalData.tagline}{" "}
          <span className="block mt-1">
            <TypingAnimation
              words={personalData.roles}
              className="text-accent font-medium"
            />
          </span>
        </p>

        <p className="mt-5 max-w-lg text-muted italic leading-relaxed">
          {personalData.casualNote}
        </p>
      </div>

      <div className="mt-10 lg:mt-12 columns-2 md:columns-3 xl:columns-4 gap-4 lg:gap-6" aria-label="Photo gallery">
        {personalData.photos.map((photo, index) => (
          <div key={photo.src} className="mb-4 lg:mb-6 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1600px) 370px, (min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
              priority={index === 0}
              quality={82}
              className="block w-full h-auto border border-hairline"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
