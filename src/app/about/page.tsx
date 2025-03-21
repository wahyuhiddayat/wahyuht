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
            I'm a third-year Computer Science student at Universitas Indonesia with a focus on artificial intelligence and machine learning.
            My journey in tech began with web development, which evolved into a deeper interest in AI and its applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm particularly passionate about deep learning and its potential to solve complex problems. 
            At the same time, I enjoy software engineering and building practical applications that can make a difference.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or diving into the latest research papers in AI.
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