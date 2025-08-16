'use client';

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, type Experience } from "@/data/experience";

function ExperienceItem({ position, company, period, logo, details, url }: Experience) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `${company.replace(/\W+/g, '-').toLowerCase()}-panel`;

  const toggle = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (!details) return;
    // if user is selecting text, don't toggle
    const sel = typeof window !== 'undefined' ? window.getSelection?.() : null;
    if (sel && sel.toString()) return;

    setIsExpanded(v => !v);
  };

  return (
    <div className={`transition-all duration-200 ${isExpanded ? 'rounded-lg pb-3 mb-1' : 'rounded-lg'}`}>
      <div
        className={`group w-full grid grid-cols-[auto_1fr_auto] items-start gap-3 ${isExpanded ? 'py-2' : 'py-1.5'} px-1 rounded-lg`}
        style={{ WebkitTapHighlightColor: 'transparent' } as any}
      >
        {/* Logo */}
        <div className="flex-shrink-0 pt-0.5">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company} website`}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20 rounded-full"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 sm:p-1 transition-transform duration-150 hover:scale-[1.03]">
                <Image src={logo} alt={`${company} logo`} fill sizes="(max-width: 640px) 32px, 40px" className="object-contain" />
              </div>
            </a>
          ) : (
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 sm:p-1">
              <Image src={logo} alt={`${company} logo`} fill sizes="(max-width: 640px) 32px, 40px" className="object-contain" />
            </div>
          )}
        </div>

        {/* Toggle zone */}
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={toggle}
          onKeyDown={(e) => {
            if (!details) return;
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle(e);
            }
          }}
          className={`min-w-0 text-left cursor-${details ? 'pointer' : 'default'} outline-none ring-0 focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20 rounded-md`}
        >
          <div className="flex items-center gap-1">
            <p
              className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-tight sm:leading-normal select-text"
              style={{ textWrap: 'balance' } as any}
            >
              {position}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-0.5 select-text">{company}</p>
          {/* Date on mobile */}
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:hidden mt-1 select-text">{period}</p>
        </button>

        {/* Right rail: Date (desktop) + Chevron */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline text-gray-500 dark:text-gray-400 text-sm">{period}</span>
          <button
            type="button"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            onClick={(e) => { e.stopPropagation(); toggle(e); }}
            className={[
              'w-5 h-5 grid place-items-center text-gray-400 dark:text-gray-500 rounded-md',
              details ? 'opacity-60 sm:opacity-40 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20' : 'opacity-0 pointer-events-none',
            ].join(' ')}
          >
            <motion.svg
              initial={false}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.18 }}
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Expandable panel */}
      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-1 pt-3 pl-12 sm:pl-14 space-y-4">
              {details.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{details.description}</p>
              )}
              {details.achievements?.length ? (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {details.achievements.map((a, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-current text-primary flex-shrink-0"></span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {details.skills?.length ? (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {details.skills.map((s, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ExperienceSection() {
  return (
  <section id="experience" className="py-5 md:py-3 lg:py-2">
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
                  url={experience.url}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}