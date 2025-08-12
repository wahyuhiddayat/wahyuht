import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllProjects } from "@/data/projects";

export default function ProjectsSection() {
  const allProjects = getAllProjects();

  return (
  <section id="projects" className="py-6 md:py-4 lg:py-3">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-8">
              Projects
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allProjects.map((project, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    imageUrl={project.imageUrl}
                    skills={project.skills}
                    links={project.links}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}