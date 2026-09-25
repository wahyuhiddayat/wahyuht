import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { projectsData, type ProjectDetail } from "@/data/projects";

/** Displays an existing project image at a consistent aspect ratio. */
function ProjectThumbnail({
  title,
  imageUrl,
  sizes,
  className = "",
}: {
  title: string;
  imageUrl: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video border border-hairline overflow-hidden bg-paper ${className}`}
    >
      <Image src={imageUrl} alt={title} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

/** Provides the links available for a project. */
function ProjectLinks({ links }: { links?: ProjectDetail["links"] }) {
  if (!links || (!links.website && !links.github)) return null;

  return (
    <div className="flex gap-4">
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm text-accent hover:underline underline-offset-4"
        >
          Live Demo &#8599;
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm text-muted hover:text-ink transition-colors"
        >
          Source Code
        </a>
      )}
    </div>
  );
}

/** Displays a recorded project measurement when one exists. */
function ProjectMetric({ metric }: { metric?: string }) {
  if (!metric) return null;

  return (
    <p className="reading text-sm mb-3">
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

/** Shows a project with its available image or as a compact text entry. */
function ProjectCard({ title, description, date, metric, skills, links, imageUrl }: ProjectDetail) {
  return (
    <article className={`flex flex-col ${imageUrl ? "" : "border-t border-hairline pt-5"}`}>
      {imageUrl && (
        <ProjectThumbnail title={title} imageUrl={imageUrl} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="mb-4" />
      )}

      <div className="flex justify-between items-baseline gap-3 mb-2">
        <h3 className="font-semibold text-ink text-lg text-balance">{title}</h3>
        <span className="font-mono text-xs text-muted shrink-0">{date}</span>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-3 max-w-[68ch]">{description}</p>

      <ProjectMetric metric={metric} />

      <div className="flex flex-wrap gap-1.5 mb-4">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>

      <ProjectLinks links={links} />
    </article>
  );
}

/** Gives the lead project a wide layout without inventing image assets. */
function FeaturedProject({ title, description, date, metric, skills, links, imageUrl }: ProjectDetail) {
  return (
    <article className={`grid gap-6 lg:gap-10 items-start pb-14 lg:pb-16 border-b border-hairline ${imageUrl ? "lg:grid-cols-[1.35fr_1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
      {imageUrl ? (
        <ProjectThumbnail title={title} imageUrl={imageUrl} sizes="(max-width: 1024px) 100vw, 60vw" />
      ) : (
        <div className="lg:pt-2">
          <span className="font-mono text-xs text-muted block mb-5">{date}</span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance max-w-[16ch]">
            {title}
          </h3>
        </div>
      )}

      <div className="lg:pt-2 flex flex-col">
        {imageUrl && (
          <div className="flex justify-between items-baseline gap-3 mb-3">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">
              {title}
            </h3>
            <span className="font-mono text-xs text-muted shrink-0">{date}</span>
          </div>
        )}

        <p className="text-ink text-base leading-relaxed mb-4 max-w-[68ch]">{description}</p>

        <ProjectMetric metric={metric} />

        <div className="flex flex-wrap gap-1.5 mb-4">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>

        <ProjectLinks links={links} />
      </div>
    </article>
  );
}

/** Renders the featured project and the remaining project index. */
export default function ProjectsSection() {
  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="py-20 lg:pt-16 lg:pb-24 border-b border-hairline scroll-mt-16">
      <div className="section-grid">
        <SectionHeading>Selected work</SectionHeading>

        <div className="section-body">
          <FeaturedProject {...featured} />

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-14 pt-12 items-start">
            {rest.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
