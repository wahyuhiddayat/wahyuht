import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import StationLabel from "@/components/StationLabel";
import { getAllProjects } from "@/data/projects";

export default function ProjectsSection() {
  const allProjects = getAllProjects();

  return (
    <section id="projects" className="py-10 border-b border-hairline">
      <ScrollReveal>
        <StationLabel number="06">Projects</StationLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {allProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                date={project.date}
                imageUrl={project.imageUrl}
                skills={project.skills}
                metric={project.metric}
                links={project.links}
              />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
