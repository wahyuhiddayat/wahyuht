import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-8">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A collection of my work, side projects, and experiments.
        </p>
      </header>

      {/* Projects Section */}
      <section>
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-6">
          ALL PROJECTS
        </h2>
        
        <div className="space-y-12">
          <ProjectCard
            title="Sokratech Fraud Risk Automation"
            description="University capstone project collaborating with Sokratech, a fintech startup, to build a no-code fraud detection platform. Enables non-technical users to create and deploy real-time fraud rules through ML-powered recommendations using AutoWoE, comprehensive analytics dashboard, and drag-and-drop interface. Built with microservices architecture for scalable processing."
            date="2025"
            imageUrl="/images/sokratech.png"
            skills={['Next.js', 'TypeScript', 'Bun', 'Hono', 'Supabase', 'Drizzle ORM', 'FastAPI', 'AutoWoE', 'Docker']}
            links={{
              website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
            }}
          />

          <ProjectCard
            title="Coming Soon Project"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            date="2024"
            imageUrl="/images/coming_soon.png"
            skills={["Next.js", "TypeScript", "Supabase", "Tailwind CSS"]}
            links={{
              website: "#",
              github: "#"
            }}
          />
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}