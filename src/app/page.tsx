import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mx-auto mb-6">
          <Image
            src="/profile.jpg"
            alt="Wahyu Hidayat"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-1 tracking-tight">Wahyu Hidayat</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Computer Science student at Universitas Indonesia, passionate about artificial intelligence and machine learning.
        </p>
      </header>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">Skills</h2>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <p className="font-medium mb-2">Languages</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Python, JavaScript, TypeScript, Java, Go, Dart</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Machine Learning</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">PyTorch, TensorFlow, Scikit-learn, Hugging Face</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Data & Analytics</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Web Development</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">React, Next.js, Django, Spring Boot, Bun</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Tools & Platforms</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Git, Docker, Google Cloud Platform, Jupyter</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">Experience</h2>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="w-px bg-gray-200 dark:bg-gray-700 flex-1 mt-2"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex justify-between">
                <div className="pr-4 w-3/4">
                  <p className="font-medium">Vice President</p>
                </div>
                <p className="text-sm text-gray-500 text-right shrink-0">May 2025–Present</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">BEM Fasilkom UI</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2"></div>
              <div className="w-px bg-gray-200 dark:bg-gray-700 flex-1 mt-2"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex justify-between">
                <div className="pr-4 w-3/4">
                  <p className="font-medium">Teaching Assistant — Introduction to Computer Organization</p>
                </div>
                <p className="text-sm text-gray-500 text-right shrink-0">Aug 2024–Jan 2025</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Faculty of Computer Science, Universitas Indonesia</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2"></div>
              <div className="w-px bg-gray-200 dark:bg-gray-700 flex-1 mt-2"></div>
            </div>
            <div className="flex-1 pb-6">
              <div className="flex justify-between">
                <div className="pr-4 w-3/4">
                  <p className="font-medium">Deputy of Advocacy and Student Welfare</p>
                </div>
                <p className="text-sm text-gray-500 text-right shrink-0">Mar 2024–Feb 2025</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">BEM Fasilkom UI</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="pr-4 w-3/4">
                  <p className="font-medium">Staff of Advocacy and Student Welfare</p>
                </div>
                <p className="text-sm text-gray-500 text-right shrink-0">Apr 2023–Feb 2024</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">BEM Fasilkom UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">Education</h2>
        
        <div>
          <div className="flex justify-between">
            <div className="pr-4 w-3/4">
              <p className="font-medium">Bachelor of Science in Computer Science</p>
            </div>
            <p className="text-sm text-gray-500 text-right shrink-0">2022–Present</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Universitas Indonesia</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            Other projects →
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
            <ProjectCard
              title="ML Sentiment Analyzer"
              description="A machine learning model built with PyTorch for analyzing sentiment in Indonesian text. Features real-time prediction API and web interface with 89% accuracy on test data."
              date="2024"
              skills={['Python', 'PyTorch', 'FastAPI', 'React', 'Docker']}
              links={{
                github: "https://github.com/wahyuhidayat/sentiment-analyzer",
                website: "https://sentiment-analyzer-demo.vercel.app"
              }}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
            <ProjectCard
              title="Academic Dashboard"
              description="Full-stack web application for university course management with real-time notifications. Built with modern tech stack and used by 500+ students in Faculty of Computer Science."
              date="2024"
              skills={['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Prisma']}
              links={{
                github: "https://github.com/wahyuhidayat/academic-dashboard",
                website: "https://fasilkom-dashboard.vercel.app"
              }}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
            <ProjectCard
              title="AI Code Assistant"
              description="VS Code extension powered by OpenAI API for intelligent code completion and documentation generation. Supports multiple programming languages with context-aware suggestions."
              date="2024"
              skills={['TypeScript', 'VS Code API', 'OpenAI API', 'Node.js']}
              links={{
                github: "https://github.com/wahyuhidayat/ai-code-assistant"
              }}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
            <ProjectCard
              title="Data Visualization Tool"
              description="Interactive data visualization platform for exploring large datasets. Built with D3.js and Python backend, featuring real-time charts and statistical analysis capabilities."
              date="2023"
              skills={['Python', 'Django', 'D3.js', 'PostgreSQL', 'Pandas']}
              links={{
                github: "https://github.com/wahyuhidayat/data-viz-tool",
                website: "https://dataviz-demo.herokuapp.com"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}