'use client';

import ScrollReveal from "@/components/ScrollReveal";
import StationLabel from "@/components/StationLabel";
import Image from "next/image";
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
      <div className="font-mono text-muted text-xs sm:text-sm whitespace-nowrap">{period}</div>

      <div>
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
          className={`w-full text-left outline-none ${details ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 shrink-0 border border-hairline overflow-hidden bg-paper">
              <Image src={logo} alt={`${company} logo`} fill sizes="32px" className="object-contain" />
            </div>
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
          </div>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted text-xs sm:text-sm mt-0.5 select-text hover:text-accent transition-colors inline-block"
            >
              {company}
            </a>
          ) : (
            <p className="text-muted text-xs sm:text-sm mt-0.5 select-text">{company}</p>
          )}
        </button>

        <AnimatePresence>
          {isExpanded && details && (
            <motion.div
              id={panelId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                {details.description && (
                  <p className="text-muted text-sm leading-relaxed">{details.description}</p>
                )}

                {details.metric && (
                  <p className="reading">
                    {details.metric.includes('→') ? (
                      <>
                        {details.metric.split('→')[0]}
                        <span className="reading-arrow">&#8594;</span>
                        {details.metric.split('→')[1]}
                      </>
                    ) : (
                      details.metric
                    )}
                  </p>
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
    <section id="experience" className="py-10 border-b border-hairline">
      <ScrollReveal>
        <StationLabel number="04">Experience</StationLabel>
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
      </ScrollReveal>
    </section>
  );
}
