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
            title="ML Sentiment Analyzer"
            description="A machine learning model built with PyTorch for analyzing sentiment in Indonesian text. Features real-time prediction API and web interface with 89% accuracy on test data."
            date="2024"
            imageUrl="/images/project1.webp"
            skills={["Python", "PyTorch", "FastAPI", "React", "Docker"]}
            links={{
              website: "https://sentiment-analyzer-demo.vercel.app",
              github: "https://github.com/wahyuhidayat/sentiment-analyzer"
            }}
          />
          
          <ProjectCard
            title="Academic Dashboard"
            description="Full-stack web application for university course management with real-time notifications. Built with modern tech stack and used by 500+ students in Faculty of Computer Science."
            date="2024"
            imageUrl="/images/project2.jpg"
            skills={["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"]}
            links={{
              website: "https://fasilkom-dashboard.vercel.app",
              github: "https://github.com/wahyuhidayat/academic-dashboard"
            }}
          />
          
          <ProjectCard
            title="AI Code Assistant"
            description="VS Code extension powered by OpenAI API for intelligent code completion and documentation generation. Supports multiple programming languages with context-aware suggestions."
            date="2024"
            imageUrl="/images/project1.webp"
            skills={["TypeScript", "VS Code API", "OpenAI API", "Node.js"]}
            links={{
              github: "https://github.com/wahyuhidayat/ai-code-assistant"
            }}
          />
          
          <ProjectCard
            title="Data Visualization Tool"
            description="Interactive data visualization platform for exploring large datasets. Built with D3.js and Python backend, featuring real-time charts and statistical analysis capabilities."
            date="2023"
            imageUrl="/images/project2.jpg"
            skills={["Python", "Django", "D3.js", "PostgreSQL", "Pandas"]}
            links={{
              website: "https://dataviz-demo.herokuapp.com",
              github: "https://github.com/wahyuhidayat/data-viz-tool"
            }}
          />

          <ProjectCard
            title="University Course Planner"
            description="Web application helping students plan their academic journey by tracking completed courses, prerequisites, and graduation requirements. Features drag-and-drop semester planning and GPA calculation."
            date="2023"
            imageUrl="/images/project1.webp"
            skills={["React", "Node.js", "MongoDB", "Express"]}
            links={{
              github: "https://github.com/wahyuhidayat/course-planner"
            }}
          />

          <ProjectCard
            title="Personal Finance Tracker"
            description="Mobile-first web application for tracking personal expenses and budgeting. Features expense categorization, monthly reports, and spending insights with interactive charts."
            date="2022"
            imageUrl="/images/project2.jpg"
            skills={["React", "Firebase", "Chart.js", "PWA"]}
            links={{
              website: "https://finance-tracker-demo.netlify.app",
              github: "https://github.com/wahyuhidayat/finance-tracker"
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