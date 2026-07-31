'use client';

import SectionHeading from "@/components/SectionHeading";
import OrganizationLogo from "@/components/OrganizationLogo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData, type Experience } from "@/data/experience";

function ExperienceItem({ position, company, period, logo, details, url }: Experience) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `${company.replace(/\W+/g, '-').toLowerCase()}-panel`;

  const toggle = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (!details) return;
    const sel = typeof window !== 'undefined' ? window.getSelection?.() : null;
    if (sel && sel.toString()) return;

    setIsExpanded(v => !v);
  };

  return (
    <div className="log-row">
      <div className="self-center font-mono text-muted text-xs sm:text-sm whitespace-nowrap">{period}</div>

      <div>
        <div className="flex items-center gap-3">
          <OrganizationLogo src={logo} alt={`${company} logo`} />

          <div className="min-w-0 flex-1">
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
              className={`w-full min-h-6 flex items-center gap-3 text-left outline-none focus-visible:underline ${details ? 'cursor-pointer' : 'cursor-default'}`}
            >
            <p className="font-semibold text-ink text-sm sm:text-base select-text">
              {position}
            </p>
            {details && (
              <motion.svg
                initial={false}
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.15 }}
                className="w-3.5 h-3.5 text-muted shrink-0 ml-auto"
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

        <AnimatePresence>
          {isExpanded && details && (
            <motion.div
              id={panelId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden pl-[60px]"
            >
              <div className="pt-3 space-y-3">
                {details.description && (
                  <p className="text-muted text-sm leading-relaxed">{details.description}</p>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-hairline scroll-mt-16">
      <div>
        <SectionHeading>Experience</SectionHeading>
        <div>
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
    </section>
  );
}
