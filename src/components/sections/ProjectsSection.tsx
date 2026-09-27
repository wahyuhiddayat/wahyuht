import SectionHeading from "@/components/SectionHeading";
import { projectsData, type ProjectDetail } from "@/data/projects";

// Cards show this many tags; the rest collapse into a "+n" count so rows stay even.
const VISIBLE_SKILLS = 4;

/** Provides the links available for a project. */
function ProjectLinks({ links }: { links?: ProjectDetail["links"] }) {
  if (!links || (!links.website && !links.github)) return null;

  return (
    <div className="flex gap-5">
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm text-accent hover:underline underline-offset-4"
        >
          Live demo &#8599;
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm text-muted hover:text-ink transition-colors"
        >
          Source code
        </a>
      )}
    </div>
  );
}

/** Displays a recorded project measurement when one exists. */
function ProjectMetric({ metric, className = "" }: { metric?: string; className?: string }) {
  if (!metric) return null;

  return (
    <p className={`reading ${className}`}>
      {metric.includes("→") ? (
        <>
          {metric.split("→")[0]}
          <span className="reading-arrow">&#8594;</span>
          {metric.split("→")[1]}
        </>
      ) : (
        metric
      )}
    </p>
  );
}

/** Lists skills as chips, optionally capped with a count of the ones left out. */
function SkillChips({ skills, limit }: { skills: string[]; limit?: number }) {
  const shown = limit ? skills.slice(0, limit) : skills;
  const hidden = skills.length - shown.length;

  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((skill) => (
        <span key={skill} className="chip">
          {skill}
        </span>
      ))}
      {hidden > 0 && <span className="chip" title={skills.slice(shown.length).join(", ")}>+{hidden}</span>}
    </div>
  );
}

/** Shows a project in the index. Every card shares this anatomy so rows stay even. */
function ProjectCard({ title, description, date, metric, skills, links }: ProjectDetail) {
  return (
    <article className="flex flex-col border-t border-hairline pt-6">
      <p className="text-meta">{date}</p>
      <h3 className="text-title text-balance mt-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mt-2 line-clamp-3">{description}</p>
      <ProjectMetric metric={metric} className="text-sm mt-3" />
      <div className="mt-4">
        <SkillChips skills={skills} limit={VISIBLE_SKILLS} />
      </div>
      <div className="mt-auto pt-2">
        <ProjectLinks links={links} />
      </div>
    </article>
  );
}

/** Gives the lead project a full-width row with its result set apart on the right. */
function FeaturedProject({ title, description, date, metric, skills, links }: ProjectDetail) {
  return (
    <article className="grid gap-6 lg:grid-cols-12 lg:gap-8 border-t border-hairline pt-8">
      <div className="lg:col-span-7">
        <p className="text-meta">{date} · Featured</p>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink text-balance mt-2">
          {title}
        </h3>
        <p className="text-muted leading-relaxed mt-3 max-w-[65ch]">{description}</p>
        <div className="mt-5">
          <SkillChips skills={skills} />
        </div>
        <ProjectLinks links={links} />
      </div>

      {metric && (
        <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-hairline lg:pl-8">
          <p className="fact-label">Result</p>
          <ProjectMetric metric={metric} className="text-base" />
        </div>
      )}
    </article>
  );
}

/** Renders the featured project and the remaining project index. */
export default function ProjectsSection() {
  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="section">
      <SectionHeading
        title="Selected work"
        aside={
          <a
            href="https://github.com/wahyuhiddayat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent transition-colors"
          >
            All on GitHub &#8599;
          </a>
        }
      />

      <FeaturedProject {...featured} />

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {rest.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
