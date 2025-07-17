import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/Experience";
import SkillCategory from "@/components/SkillCategory";

const skillsData = [
  { title: "Languages", skills: "Python, JavaScript, TypeScript, Java, Go, Dart" },
  { title: "Machine Learning", skills: "PyTorch, TensorFlow, Scikit-learn, Hugging Face" },
  { title: "Web & Frameworks", skills: "React, Next.js, Django, Spring Boot, Bun" },
  { title: "Data & Analytics", skills: "Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL" },
  { title: "Tools", skills: "Git, Docker, Google Cloud, Jupyter" },
];

const experienceData = [
  {
    position: "Vice President",
    company: "BEM Fasilkom UI",
    period: "May 2025 – Present"
  },
  {
    position: "Teaching Assistant",
    company: "Universitas Indonesia",
    period: "Aug 2024 – Jan 2025"
  },
  {
    position: "Deputy of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Mar 2024 – Feb 2025"
  },
  {
    position: "Staff of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Apr 2023 – Feb 2024"
  },
];

const featuredProjectsData = [
  {
    title: "Sokratech Fraud Risk Automation",
    description: "University capstone project building a no-code fraud detection platform for fintech startup Sokratech\nFeatures ML-powered recommendations, real-time rule deployment, and comprehensive analytics dashboard",
    date: "2025",
    imageUrl: "/images/sokratech.png",
    skills: ['Next.js', 'TypeScript', 'Bun', 'Hono', 'Supabase', 'Drizzle ORM', 'FastAPI', 'AutoWoE', 'Docker'],
    links: {
      website: "https://monitoring-fe-next-1277451848.us-central1.run.app/"
    }
  },
  {
    title: "wahyuht",
    description: "Personal portfolio website showcasing my projects and experiments\nBuilt with modern web technologies including Next.js 14, TypeScript, and Tailwind CSS with automated testing setup",
    date: "2025",
    imageUrl: "/images/wahyuht.png",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Jest", "React Testing Library"],
    links: {
      website: "https://wahyuht.com",
      github: 'https://github.com/wahyuhiddayat/wahyuht'
    }
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-8">
      {/* Hero Section */}
      <header className="mb-16 text-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mx-auto mb-6">
          <Image
            src="/images/profile.jpg"
            alt="Wahyu Hidayat"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight">
          Hi, I’m Wahyu Hidayat 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Building intelligent solutions through machine learning and thoughtful software engineering.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          When I'm not coding, I’m probably at a coffee shop or exploring new tech.
        </p>
      </header>

      {/* Background Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Background
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          I'm a final-year Computer Science student at Universitas Indonesia with a focus on artificial intelligence, machine learning, and deep learning. I enjoy designing data-driven applications and building scalable software that brings ideas to life.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
          {skillsData.map((skill, index) => (
            <SkillCategory
              key={index}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Experience
        </h2>
        <div className="space-y-4 text-sm">
          {experienceData.map((experience, index) => (
            <ExperienceItem
              key={index}
              position={experience.position}
              company={experience.company}
              period={experience.period}
            />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Education
        </h2>
        <div className="text-sm">
          <div className="flex justify-between items-start">
            <p className="font-medium">Bachelor of Computer Science</p>
            <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">2022 – Present</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Universitas Indonesia
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjectsData.map((project, index) => (
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
          <Link
            href="/projects"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            See all projects →
          </Link>
        </div>
      </section>
    </div>
  );
}