import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/data/projects';
import ScrollReveal from '@/components/ScrollReveal';
import FadeIn from '@/components/FadeIn';

export default function Projects() {
  const projects = getAllProjects();
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-8">
      {/* Header */}
      <FadeIn>
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-bold mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            A collection of my work, side projects, and experiments.
          </p>
        </header>
      </FadeIn>

      {/* Projects Section */}
      <ScrollReveal>
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            All Projects
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  imageUrl={project.imageUrl}
                  skills={project.skills}
                  slug={project.slug}
                  links={project.links}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Back to Home */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="text-sm text-primary hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>
    </div>
  );
}