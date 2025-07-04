import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

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
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-4">
          BACKGROUND
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          I'm a final-year Computer Science student at Universitas Indonesia with a focus on artificial intelligence, machine learning, and deep learning. I enjoy designing data-driven applications and building scalable software that brings ideas to life.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-4">
          SKILLS
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
          <div>
            <p className="font-medium mb-1">Languages</p>
            <p className="text-gray-600 dark:text-gray-300">
              Python, JavaScript, TypeScript, Java, Go, Dart
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">Machine Learning</p>
            <p className="text-gray-600 dark:text-gray-300">
              PyTorch, TensorFlow, Scikit-learn, Hugging Face
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">Web & Frameworks</p>
            <p className="text-gray-600 dark:text-gray-300">
              React, Next.js, Django, Spring Boot, Bun
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">Data & Analytics</p>
            <p className="text-gray-600 dark:text-gray-300">
              Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">Tools</p>
            <p className="text-gray-600 dark:text-gray-300">
              Git, Docker, Google Cloud, Jupyter
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-4">
          EXPERIENCE
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <div className="flex justify-between items-start">
              <p className="font-medium">Vice President</p>
              <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">May 2025–Present</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              BEM Fasilkom UI
            </p>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <p className="font-medium">
                Teaching Assistant — Introduction to Computer Organization
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">Aug 2024–Jan 2025</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Universitas Indonesia
            </p>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <p className="font-medium">Deputy of Advocacy and Student Welfare</p>
              <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">Mar 2024–Feb 2025</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              BEM Fasilkom UI
            </p>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <p className="font-medium">Staff of Advocacy and Student Welfare</p>
              <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">Apr 2023–Feb 2024</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              BEM Fasilkom UI
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-4">
          EDUCATION
        </h2>
        <div className="text-sm">
          <div className="flex justify-between items-start">
            <p className="font-medium">Bachelor of Science in Computer Science</p>
            <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">2022–Present</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Universitas Indonesia
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-4">
        <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider mb-4">
          FEATURED PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
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