'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import { experienceData } from "@/data/experience";
import { personalData } from "@/data/personal";

// Experience is listed newest first, so the first ongoing entry is the headline role.
const CURRENT_ROLE = experienceData.find(({ period }) => period.endsWith("Present"));

/** Introduces Wahyu with a short sequence of photographs. */
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

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-end">
        <div className="lg:col-span-7">
          <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-[-0.035em] text-ink text-balance mb-6">
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

        {CURRENT_ROLE && (
          <div className="lg:col-span-5">
            <span className="font-mono text-muted text-xs uppercase tracking-wide block mb-4">
              Currently
            </span>
            <p className="text-lg font-semibold text-ink">{CURRENT_ROLE.company}</p>
            <p className="text-sm text-muted mt-1">{CURRENT_ROLE.position}</p>
          </div>
        )}
      </div>

      <div className="mt-10 lg:mt-12">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {personalData.heroPhotos.map((photo) => {
            const isWide = photo.width > photo.height;
            return (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={isWide ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 1024px) 20vw, 33vw"}
                priority
                quality={82}
                className={
                  isWide
                    ? "col-span-3 order-last aspect-[4/3] lg:col-span-2 lg:order-none lg:aspect-auto w-full h-full object-cover border border-hairline"
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
