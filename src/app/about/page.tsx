import Link from 'next/link';

// Component for skill pills/tags
const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <span className="skill-pill inline-block mr-2 mb-2">{children}</span>
);

export default function About() {
  return (
    <div className="pt-32 pb-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
      
      <div className="max-w-xl mx-auto mt-12">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Background</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a third-year Computer Science student at Universitas Indonesia, focusing on AI, machine learning, and deep learning. 
            I started my journey through web development, where I enjoyed creating real-world applications and beautiful user interfaces. 
            Over time, my curiosity shifted toward intelligent systems and how data can drive meaningful decisions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm especially passionate about deep learning and its potential to solve complex problems in creative ways. 
            While AI/ML is my main focus, I also enjoy software engineering and designing user-centric interfaces — bridging functionality and experience.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Outside of code, I spend time exploring new technologies, reading research papers, and occasionally contributing to open-source projects. 
            I also enjoy café hopping and discovering new coffee spots — it keeps me inspired and caffeinated.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Education</h2>
          <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-bold text-lg">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-500 text-sm mb-2">Universitas Indonesia • 2022 - Present</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Focusing on Artificial Intelligence, Machine Learning, and Software Engineering fundamentals.
            </p>
            <div className="flex flex-wrap">
              <SkillTag>Algorithms</SkillTag>
              <SkillTag>Data Structures</SkillTag>
              <SkillTag>AI/ML</SkillTag>
              <SkillTag>Software Engineering</SkillTag>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>

          <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold text-lg">Software Engineer Intern</h3>
            <p className="text-gray-500 text-sm mb-2">Sokratech • Feb 2025 – Present</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Building and maintaining full-stack web features while collaborating in an agile team setting.
            </p>
            <div className="flex flex-wrap">
              <SkillTag>React</SkillTag>
              <SkillTag>TypeScript</SkillTag>
              <SkillTag>Next.js</SkillTag>
              <SkillTag>Agile</SkillTag>
            </div>
          </div>
          
          <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold text-lg">Teaching Assistant — Introduction to Computer Organization</h3>
            <p className="text-gray-500 text-sm mb-2">Faculty of Computer Science, Universitas Indonesia • Aug 2024 – Jan 2025</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Mentored students, prepared learning materials, and assisted with grading and practical sessions.
            </p>
            <div className="flex flex-wrap">
              <SkillTag>Mentoring</SkillTag>
              <SkillTag>Computer Architecture</SkillTag>
              <SkillTag>Communication</SkillTag>
            </div>
          </div>

          <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold text-lg">Deputy of Advocacy and Student Welfare</h3>
            <p className="text-gray-500 text-sm mb-2">BEM Fasilkom UI • Mar 2024 – Feb 2025</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Led initiatives to improve student welfare, coordinated advocacy efforts, and represented student voices in academic discussions.
            </p>
            <div className="flex flex-wrap">
              <SkillTag>Leadership</SkillTag>
              <SkillTag>Public Speaking</SkillTag>
              <SkillTag>Student Affairs</SkillTag>
            </div>
          </div>

          <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg">Staff of Advocacy and Student Welfare</h3>
            <p className="text-gray-500 text-sm mb-2">BEM Fasilkom UI • Apr 2023 – Feb 2024</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Supported student advocacy programs, handled student feedback, and contributed to events aimed at academic and non-academic support.
            </p>
            <div className="flex flex-wrap">
              <SkillTag>Teamwork</SkillTag>
              <SkillTag>Empathy</SkillTag>
              <SkillTag>Student Support</SkillTag>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
          <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Programming Languages</h3>
              <div className="flex flex-wrap">
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>TypeScript</SkillTag>
                <SkillTag>Python</SkillTag>
                <SkillTag>Java</SkillTag>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Web Development</h3>
              <div className="flex flex-wrap">
                <SkillTag>React</SkillTag>
                <SkillTag>Next.js</SkillTag>
                <SkillTag>HTML/CSS</SkillTag>
                <SkillTag>Bootstrap</SkillTag>
                <SkillTag>Tailwind CSS</SkillTag>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Data & ML</h3>
              <div className="flex flex-wrap">
                <SkillTag>PyTorch</SkillTag>
                <SkillTag>Scikit-learn</SkillTag>
                <SkillTag>Pandas</SkillTag>
                <SkillTag>NumPy</SkillTag>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Tools & Others</h3>
              <div className="flex flex-wrap">
                <SkillTag>Git</SkillTag>
                <SkillTag>Docker</SkillTag>
                <SkillTag>AWS</SkillTag>
                <SkillTag>MongoDB</SkillTag>
                <SkillTag>PostgreSQL</SkillTag>
                <SkillTag>Jira</SkillTag>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/contact"
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 