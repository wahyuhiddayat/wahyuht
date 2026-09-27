'use client';

import SectionHeading from "@/components/SectionHeading";
import OrganizationLogo from "@/components/OrganizationLogo";
import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData, type Experience, type Role } from "@/data/experience";

/**
 * Shows one role: title and period on one line, the summary beneath, and the
 * achievements and skills behind a details toggle.
 *
 * `onTimeline` draws the marker that sits on the organization's vertical rule
 * when it has several roles.
 */
function RoleEntry({ role, company, onTimeline }: { role: Role; company: string; onTimeline: boolean }) {
  const { position, period, details } = role;
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `${company}-${position}`.replace(/\W+/g, '-').toLowerCase() + '-panel';
  const hasMore = Boolean(details?.achievements?.length || details?.skills?.length);

  return (
    <li className="relative">
      {onTimeline && (
        <span
          aria-hidden="true"
          className="absolute -left-[29px] top-4 w-2 h-2 rounded-full bg-muted ring-4 ring-paper"
        />
      )}

      <div className="entry-title-row">
        <h3 className="text-title text-balance">{position}</h3>
        <span className="text-meta whitespace-nowrap">{period}</span>
      </div>

      {details?.description && (
        <p className="mt-2 text-muted leading-relaxed max-w-[70ch]">{details.description}</p>
      )}

      {hasMore && (
        <>
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={panelId}
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="mt-1 inline-flex min-h-11 items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors outline-none focus-visible:underline"
          >
            {isExpanded ? "Hide details" : "Show details"}
            <motion.svg
              initial={false}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.15 }}
              className="w-3 h-3 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </motion.svg>
          </button>

          {/* Collapsed with CSS, not unmounted, so the text stays in the server-rendered HTML. */}
          <div
            id={panelId}
            inert={!isExpanded}
            className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
              isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="pt-1 pb-2 space-y-4 max-w-[70ch]">
                {details?.achievements?.length ? (
                  <ul className="space-y-2">
                    {details.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                        <span className="text-hairline shrink-0">–</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {details?.skills?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {details.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

/** Shows one organization with its roles; several roles hang off a vertical timeline. */
function ExperienceItem({ company, logo, url, roles }: Experience) {
  const onTimeline = roles.length > 1;

  return (
    <article className="entry">
      <div className="entry-org">
        <OrganizationLogo src={logo} alt={`${company} logo`} />
        <div className="entry-org-name">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink text-balance hover:text-accent transition-colors"
            >
              {company}
            </a>
          ) : (
            <p className="font-semibold text-ink text-balance">{company}</p>
          )}
        </div>
      </div>

      <ol className={`entry-body space-y-8 ${onTimeline ? "border-hairline" : ""}`}>
        {roles.map((role) => (
          <RoleEntry key={role.position} role={role} company={company} onTimeline={onTimeline} />
        ))}
      </ol>
    </article>
  );
}

/** Renders Wahyu's professional and organizational experience. */
export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <SectionHeading title="Experience" />
      <div>
        {experienceData.map((experience) => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
}
