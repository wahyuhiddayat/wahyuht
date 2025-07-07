import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    title: "Sokratech Fraud Risk Automation",
    description: "University capstone project collaborating with Sokratech, a fintech startup, to build a no-code fraud detection platform. Enables non-technical users to create and deploy real-time fraud rules through ML-powered recommendations using AutoWoE, comprehensive analytics dashboard, and drag-and-drop interface. Built with microservices architecture for scalable processing.",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ['Next.js', 'TypeScript', 'Bun', 'Hono', 'Supabase', 'Drizzle ORM', 'FastAPI', 'AutoWoE', 'Docker'],
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    }
  },
  {
    title: "wahyuht",
    description: "Personal portfolio website showcasing my projects and experiments. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion. Features responsive design, dark mode, and automated testing setup.",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Jest", "React Testing Library"],
    links: {
      website: "https://wahyuht.com"
    }
  },
  {
    title: "Letterbookd",
    description: "Full-stack web app to connect readers with books and communities. Features personal libraries, book catalog management, reviews, and forums. Includes REST API for Flutter mobile clients and supports multi-role access (guest, reader, librarian, admin).",
    date: "2023",
    imageUrl: "/images/letterbookd_web.png",
    skills: [
      "Django", "Django REST Framework", "Python", "PostgreSQL", "Bootstrap", "jQuery", "Docker", "Heroku"],
    links: {
      github: "https://github.com/letterbookd/letterbookd"
    }
  },
  /*
  {
    title: "Coming Soon Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024",
    imageUrl: "/images/coming_soon.png",
    skills: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: {
      website: "#",
      github: "#"
    }
  },
  */
];

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
          {projectsData.map((project, index) => (
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