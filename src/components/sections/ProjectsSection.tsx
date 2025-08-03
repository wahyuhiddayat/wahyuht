'use client';

import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { getFeaturedProjects, getAllProjects } from "@/data/projects";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();

  return (
    <section id="projects" className="py-8">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              {showAll ? 'All Projects' : 'Featured Projects'}
            </h2>
            
            {!showAll ? (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      date={project.date}
                      imageUrl={project.imageUrl}
                      skills={project.skills}
                      links={project.links}
                    />
                  ))}
                </div>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => setShowAll(true)}
                    className="text-sm text-primary hover:underline"
                  >
                    See all projects →
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-12">
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
                <ScrollReveal delay={0.2}>
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setShowAll(false)}
                      className="text-sm text-primary hover:underline"
                    >
                      ← Show featured only
                    </button>
                  </div>
                </ScrollReveal>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}