import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    title: "Sokratech Fraud Risk Automation",
    description: "University capstone project collaborating with Sokratech, a fintech startup, to build a comprehensive no-code fraud detection platform\nEnables non-technical users to create and deploy real-time fraud rules through ML-powered recommendations using AutoWoE, comprehensive analytics dashboard, and intuitive drag-and-drop interface\nBuilt with microservices architecture for scalable processing and deployed on Google Cloud Platform",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ['Next.js', 'TypeScript', 'Bun', 'Hono', 'Supabase', 'Drizzle ORM', 'FastAPI', 'AutoWoE', 'Docker'],
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    }
  },
  {
    title: "wahyuht",
    description: "Personal portfolio website showcasing my projects, experiments, and professional journey in software development\nBuilt with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and transitions\nFeatures responsive design, dark mode support, and comprehensive automated testing setup with Jest and React Testing Library",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Jest", "React Testing Library"],
    links: {
      website: "https://wahyuht.com",
      github: 'https://github.com/wahyuhiddayat/wahyuht'
    }
  },
  {
    title: "Anomaly Detection in Customer Purchasing Patterns",
    description: "ta mining project implementing CRISP-DM methodology to analyze customer purchasing behaviors in online retail\nFeatures RFM-based customer segmentation, FP-Growth association rule mining, and hybrid anomaly detection using Isolation Forest and Local Outlier Factor algorithms\nIncludes interactive Streamlit dashboard with real-time analytics, comprehensive visualizations, and published research paper analyzing 541,909 transactions",
    date: "2025",
    imageUrl: "/images/anomaly_detection_datmin.png",
    skills: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "CRISP-DM", "Machine Learning", "Data Mining", "FP-Growth", "K-Means Clustering"],
    links: {
      website: "https://outlier-data.streamlit.app/",
      github: "https://github.com/wahyuhiddayat/anomaly-detection-in-customer-purchasing-pattern"
    }
  },
  {
    title: "Letterbookd",
    description: "Full-stack web application designed to connect readers with books and build literary communities\nFeatures personal libraries, comprehensive book catalog management, user reviews, discussion forums, and social interaction capabilities\nIncludes REST API for Flutter mobile clients and supports multi-role access control (guest, reader, librarian, admin)",
    date: "2023",
    imageUrl: "/images/letterbookd_web.png",
    skills: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Bootstrap", "jQuery", "Docker", "Heroku"],
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
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          All Projects
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