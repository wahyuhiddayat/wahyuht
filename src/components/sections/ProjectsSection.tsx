import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { getAllProjects } from "@/data/projects";

export default function ProjectsSection() {
  const allProjects = getAllProjects();

  return (
    <section id="projects" className="py-20 lg:py-32 border-b border-hairline scroll-mt-16">
      <div>
        <SectionHeading>Selected work</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14 lg:gap-y-16">
          {allProjects.map((project, index) => (
            <div key={index} className={index === 0 ? "lg:col-span-2" : undefined}>
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
      </div>
    </section>
  );
}
