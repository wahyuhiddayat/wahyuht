import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-2xl font-bold mb-1">Wahyu Hidayat</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-5">
          Computer Science student at Universitas Indonesia, passionate about AI, ML, and software engineering.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          My journey started with web development and grew into a deeper interest in data, machine learning, and deep learning. 
          I enjoy building intelligent systems and exploring new tools — often while working from cozy coffee shops.
        </p>
      </header>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">Experience</h2>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between">
              <div className="pr-4 w-3/4">
                <p className="font-medium">Software Engineering Intern</p>
              </div>
              <p className="text-sm text-gray-500 text-right shrink-0">Feb 2025–Present</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Sokratech</p>
          </div>
          
          <div>
            <div className="flex justify-between">
              <div className="pr-4 w-3/4">
                <p className="font-medium">Teaching Assistant — Introduction to Computer Organization</p>
              </div>
              <p className="text-sm text-gray-500 text-right shrink-0">Aug 2024–Jan 2025</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Faculty of Computer Science, Universitas Indonesia</p>
          </div>
          
          <div>
            <div className="flex justify-between">
              <div className="pr-4 w-3/4">
                <p className="font-medium">Deputy of Advocacy and Student Welfare</p>
              </div>
              <p className="text-sm text-gray-500 text-right shrink-0">Mar 2024–Feb 2025</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">BEM Fasilkom UI</p>
          </div>
          
          <div>
            <div className="flex justify-between">
              <div className="pr-4 w-3/4">
                <p className="font-medium">Staff of Advocacy and Student Welfare</p>
              </div>
              <p className="text-sm text-gray-500 text-right shrink-0">Apr 2023–Feb 2024</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">BEM Fasilkom UI</p>
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

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">Skills</h2>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <p className="font-medium mb-2">Languages</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">JavaScript, TypeScript, Python, Java, Dart</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Web</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">HTML/CSS, React, Next.js, Tailwind CSS</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">ML & Data</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">PyTorch, Scikit-learn, Pandas</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Frameworks</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Spring Boot, Django, Flutter</p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Tools</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Git, Docker, AWS, Jira</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6 pb-1 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium">Projects</h2>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            View all →
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Working on machine learning models, web applications, and 
          open-source tools. See my projects page for details.
        </p>
      </section>
    </div>
  );
}