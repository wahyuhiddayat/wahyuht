import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { projectsData, type ProjectDetail } from "@/data/projects";

function ProjectThumbnail({
  title,
  imageUrl,
  sizes,
  className = "",
}: {
  title: string;
  imageUrl?: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video border border-hairline overflow-hidden bg-paper flex items-center justify-center ${className}`}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt={title} fill sizes={sizes} className="object-cover" />
      ) : (
        <span className="font-mono text-muted text-xs text-center px-6 leading-relaxed">
          {title}
        </span>
      )}
    </div>
  );
}

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

function ProjectCard({ title, description, date, metric, skills, links, imageUrl }: ProjectDetail) {
  return (
    <article className="flex flex-col">
      <ProjectThumbnail title={title} imageUrl={imageUrl} sizes="(max-width: 768px) 100vw, 50vw" className="mb-4" />

      <div className="flex justify-between items-baseline gap-3 mb-2">
        <h3 className="font-semibold text-ink text-lg text-balance">{title}</h3>
        <span className="font-mono text-xs text-muted shrink-0">{date}</span>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-3">{description}</p>

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

function FeaturedProject({ title, description, date, metric, skills, links, imageUrl }: ProjectDetail) {
  return (
    <article className="grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-10 items-start pb-14 lg:pb-16 border-b border-hairline">
      <ProjectThumbnail title={title} imageUrl={imageUrl} sizes="(max-width: 1024px) 100vw, 60vw" />

      <div className="lg:pt-2 flex flex-col">
        <div className="flex justify-between items-baseline gap-3 mb-3">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">
            {title}
          </h3>
          <span className="font-mono text-xs text-muted shrink-0">{date}</span>
        </div>

        <p className="text-ink text-base leading-relaxed mb-4">{description}</p>

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

export default function ProjectsSection() {
  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="py-20 lg:py-32 border-b border-hairline scroll-mt-16">
      <div>
        <SectionHeading>Selected work</SectionHeading>

        <FeaturedProject {...featured} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-14 pt-12 items-start">
          {rest.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
