'use client';

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, type Experience } from "@/data/experience";

function ExperienceItem({ position, company, period, logo, details }: Experience) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`transition-all duration-200 ${
        isExpanded ? "rounded-lg pb-3 mb-1" : "rounded-lg"
      }`}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (!details) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsExpanded((v) => !v);
          }
        }}
        onClick={() => {
          if (!details) return;
          const sel = typeof window !== "undefined" ? window.getSelection?.() : null;
          if (sel && sel.toString()) return; // don't toggle when user is selecting text
          setIsExpanded((v) => !v);
        }}
        className={`group w-full grid grid-cols-[auto_1fr_auto] items-start gap-3 ${
          isExpanded ? "py-2" : "py-1.5"
        } px-1 text-left ${
          details ? "cursor-pointer" : "cursor-default"
        } rounded-lg outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0 transition-[opacity,transform] duration-200`}
        style={{ WebkitTapHighlightColor: "transparent" } as any}
      >
        {/* Logo */}
        <div className="flex-shrink-0 pt-0.5">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 sm:p-1">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="(max-width: 640px) 32px, 40px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <p
              className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-tight sm:leading-normal select-text"
              style={{ textWrap: "balance" } as any}
            >
              {position}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-0.5 select-text">
            {company}
          </p>
          {/* Date on mobile */}
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:hidden mt-1 select-text">
            {period}
          </p>
        </div>

        {/* Right rail: Date (desktop) + Chevron (space reserved) */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline text-gray-500 dark:text-gray-400 text-sm">
            {period}
          </span>

          <motion.span
            initial={false}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.18 }}
            className={[
              "w-5 h-5 grid place-items-center text-gray-400 dark:text-gray-500",
              details
                ? "opacity-60 sm:opacity-40 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
                : "opacity-0",
            ].join(" ")}
            aria-hidden
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </motion.span>
        </div>
  </div>

      {/* Expandable */}
      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-1 pt-3 pl-12 sm:pl-14 space-y-4">
              {details.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {details.description}
                </p>
              )}

              {details.achievements && details.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {details.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-current text-primary flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {details.skills && details.skills.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {details.skills.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-6">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Experience
            </h2>
            <div className="space-y-2">
              {experienceData.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  position={experience.position}
                  company={experience.company}
                  period={experience.period}
                  logo={experience.logo}
                  details={experience.details}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}