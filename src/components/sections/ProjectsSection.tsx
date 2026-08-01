import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projectsData, type ProjectDetail } from "@/data/projects";

function ProjectLogRow({ title, description, date, metric, skills, links }: ProjectDetail) {
  return (
    <div className="log-row">
      <div className="self-start font-mono text-muted text-xs sm:text-sm whitespace-nowrap">{date}</div>

      <div>
        <h3 className="font-semibold text-ink text-sm sm:text-base mb-1">{title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-2">{description}</p>

        {metric && (
          <p className="reading text-xs sm:text-sm mb-2">
            {metric.includes('→') ? (
              <>
                {metric.split('→')[0]}
                <span className="reading-arrow">&#8594;</span>
                {metric.split('→')[1]}
              </>
            ) : (
              metric
            )}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-2">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>

        {links && (links.website || links.github) && (
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
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const withImages = projectsData.filter((project) => project.imageUrl);
  const withoutImages = projectsData.filter((project) => !project.imageUrl);

  return (
    <section id="projects" className="py-20 lg:py-32 border-b border-hairline scroll-mt-16">
      <div>
        <SectionHeading>Selected work</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14 lg:gap-y-16">
          {withImages.map((project, index) => (
            <div key={project.title} className={index === 0 ? "lg:col-span-2" : undefined}>
              <ProjectCard
                title={project.title}
                description={project.description}
                date={project.date}
                imageUrl={project.imageUrl}
                skills={project.skills}
                metric={project.metric}
                links={project.links}
                featured={index === 0}
              />
            </div>
          ))}
        </div>

        {withoutImages.length > 0 && (
          <div className="mt-14 lg:mt-16 pt-2 border-t border-hairline">
            {withoutImages.map((project) => (
              <ProjectLogRow key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
