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
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
      {/* Back Navigation */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>
      </FadeIn>

      {/* Project Header Card */}
      <FadeIn>
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              {project.title}
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {project.date}
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {project.links && (
            <div className="flex gap-4">
              {project.links.website && (
                <Link
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105"
                >
                  Live Demo ↗
                </Link>
              )}
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:scale-105"
                >
                  Source Code
                </Link>
              )}
            </div>
          )}
        </div>
      </FadeIn>

      {/* Project Image */}
      {project.imageUrl && (
        <ScrollReveal>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
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

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Card */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </ScrollReveal>

          {/* Problem Card */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                The Problem
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </ScrollReveal>

          {/* Solution Card */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                The Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </ScrollReveal>

          {/* Development Process Card */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Development Process
              </h2>
              <div className="space-y-4">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Challenges Card */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Key Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
                    <span className="text-red-500 dark:text-red-400 mt-1 text-xs">●</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Key Learnings Card */}
          <ScrollReveal>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Key Learnings
              </h3>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                    <span className="text-green-500 dark:text-green-400 mt-1 text-xs">●</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {learning}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Project Stats Card */}
          {project.stats && (
            <ScrollReveal>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  Project Impact
                </h3>
                <div className="space-y-3">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
                      <span className="text-sm font-medium text-black dark:text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Additional Images */}
      {project.images && project.images.length > 1 && (
        <ScrollReveal>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Navigation Footer */}
      <ScrollReveal>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              ← All Projects
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Thank you for reading!
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}