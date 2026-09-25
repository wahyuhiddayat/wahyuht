'use client';

import SectionHeading from "@/components/SectionHeading";
import OrganizationLogo from "@/components/OrganizationLogo";
import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData, type Experience } from "@/data/experience";

/** Shows one dated role and its expandable details. */
function ExperienceItem({ position, company, period, logo, details, url }: Experience) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `${company}-${position}`.replace(/\W+/g, '-').toLowerCase() + '-panel';

  /** Expands details unless the visitor is selecting role text. */
  const toggle = () => {
    if (!details) return;
    const sel = typeof window !== 'undefined' ? window.getSelection?.() : null;
    if (sel && sel.toString()) return;

    setIsExpanded(v => !v);
  };

  return (
    <div className="log-row gap-y-0 xl:grid-cols-[180px_minmax(0,5fr)_minmax(0,4fr)]">
      <div className="self-center mb-1 sm:mb-0 font-mono text-muted text-xs sm:text-sm whitespace-nowrap">{period}</div>

      <div className="flex items-center gap-3">
        <OrganizationLogo src={logo} alt={`${company} logo`} />

        <div className="min-w-0 flex-1">
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={panelId}
            onClick={toggle}
            className={`w-fit max-w-full min-h-11 flex items-center gap-2 text-left outline-none focus-visible:underline ${details ? 'cursor-pointer' : 'cursor-default'}`}
          >
          <span className="font-semibold text-ink text-sm sm:text-base select-text">
            {position}
          </span>
          {details && (
            <motion.svg
              initial={false}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.15 }}
              className="w-3.5 h-3.5 text-muted shrink-0 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </motion.svg>
          )}
          </button>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-xs sm:text-sm mt-0.5 select-text hover:text-accent transition-colors inline-block"
            >
              {company}
            </a>
          ) : (
            <p className="text-muted text-xs sm:text-sm mt-0.5 select-text">{company}</p>
          )}
        </div>
      </div>

      {details?.description && (
        <p className="hidden xl:block self-center text-muted text-sm leading-relaxed">
          {details.description}
        </p>
      )}

      {/* Collapsed with CSS, not unmounted, so the text stays in the server-rendered HTML. */}
      {details && (
        <div
          id={panelId}
          inert={!isExpanded}
          className={`sm:col-start-2 xl:col-span-2 grid transition-[grid-template-rows] duration-200 ease-in-out ${
            isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-3 space-y-3 pl-[60px] max-w-3xl">
              {details.description && (
                <p className="xl:hidden text-muted text-sm leading-relaxed">{details.description}</p>
              )}

              {details.achievements?.length ? (
                <ul className="space-y-1">
                  {details.achievements.map((a, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-hairline shrink-0">–</span>
                      {a}
                    </li>
                  ))}
                </ul>
              ) : null}

              {details.skills?.length ? (
                <div className="flex flex-wrap gap-1.5">
                  {details.skills.map((s, i) => (
                    <span key={i} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Renders Wahyu's professional and organizational experience. */
export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:pt-24 lg:pb-16 border-b border-hairline scroll-mt-16">
      <div className="section-grid">
        <SectionHeading>Experience</SectionHeading>
        <div className="section-body">
          {experienceData.map((experience) => (
            <ExperienceItem
              key={`${experience.company}-${experience.position}`}
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
    </section>
  );
}
