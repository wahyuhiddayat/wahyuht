import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* Back Navigation */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>
      </FadeIn>

      {/* Project Header */}
      <FadeIn>
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              {project.title}
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {project.date}
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex gap-4">
              {project.links.website && (
                <Link
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Live Demo ↗
                </Link>
              )}
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Source Code
                </Link>
              )}
            </div>
          )}
        </header>
      </FadeIn>

      {/* Project Image */}
      {project.imageUrl && (
        <ScrollReveal>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </ScrollReveal>
      )}

      {/* Case Study Content */}
      <div className="grid md:grid-cols-1 gap-12">
        {/* Overview */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>
          </section>
        </ScrollReveal>

        {/* Problem */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              The Problem
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </section>
        </ScrollReveal>

        {/* Solution */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              The Solution
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </section>
        </ScrollReveal>

        {/* Process */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Development Process
            </h2>
            <ul className="space-y-3">
              {project.process.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-full flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Challenges */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Learnings */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Learnings
            </h2>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 dark:text-green-400 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {learning}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Additional Images */}
        {project.images && project.images.length > 1 && (
          <ScrollReveal>
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Additional Images
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 2}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}
      </div>

      {/* Navigation to Other Projects */}
      <ScrollReveal>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            View All Projects →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}