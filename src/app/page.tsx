import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      {/* Header */}
      <header className="mb-16 relative">
        <div className="absolute -left-6 top-0 w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-80"></div>
        
        <div className="pl-6">
          <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Wahyu Hidayat
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
            Computer Science student at Universitas Indonesia, passionate about AI, ML, and software engineering.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey started with web development and grew into a deeper interest in data, machine learning, and deep learning. 
            I enjoy building intelligent systems and exploring new tools — often while working from cozy coffee shops.
          </p>
        </div>
      </header>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <p className="font-medium mb-3 text-gray-900 dark:text-white">Languages</p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'Python', 'Java', 'Dart'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group">
            <p className="font-medium mb-3 text-gray-900 dark:text-white">Web</p>
            <div className="flex flex-wrap gap-2">
              {['HTML/CSS', 'React', 'Next.js', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group">
            <p className="font-medium mb-3 text-gray-900 dark:text-white">ML & Data</p>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Scikit-learn', 'Pandas'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group">
            <p className="font-medium mb-3 text-gray-900 dark:text-white">Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Django', 'Flutter'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group sm:col-span-2">
            <p className="font-medium mb-3 text-gray-900 dark:text-white">Tools</p>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'AWS', 'Jira'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800"></div>
          
          <div className="space-y-8">
            {[
              {
                position: "Vice President",
                company: "BEM Fasilkom UI",
                period: "May 2025–Present",
                current: true
              },
              {
                position: "Software Engineering Intern",
                company: "Sokratech",
                period: "Feb 2025–May 2025"
              },
              {
                position: "Teaching Assistant — Introduction to Computer Organization",
                company: "Faculty of Computer Science, Universitas Indonesia",
                period: "Aug 2024–Jan 2025"
              },
              {
                position: "Deputy of Advocacy and Student Welfare",
                company: "BEM Fasilkom UI",
                period: "Mar 2024–Feb 2025"
              },
              {
                position: "Staff of Advocacy and Student Welfare",
                company: "BEM Fasilkom UI",
                period: "Apr 2023–Feb 2024"
              }
            ].map((exp, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 ${
                  exp.current 
                    ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50' 
                    : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                }`}></div>
                
                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.position}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 sm:text-right shrink-0">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          Education
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Universitas Indonesia</p>
            </div>
            <p className="text-sm text-gray-500 sm:text-right shrink-0">2022–Present</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            Projects
          </h2>
          <Link 
            href="/projects" 
            className="group flex items-center text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            View all 
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Working on machine learning models, web applications, and 
            open-source tools. See my projects page for details.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
          Connect
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'GitHub', href: '#', icon: '🐙' },
            { name: 'LinkedIn', href: '#', icon: '💼' },
            { name: 'Email', href: '#', icon: '📧' },
            { name: 'Resume', href: '#', icon: '📄' }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{link.icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}