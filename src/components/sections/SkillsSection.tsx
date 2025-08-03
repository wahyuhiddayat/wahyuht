'use client';

import ScrollReveal from "@/components/ScrollReveal";
import SkillCategory from "@/components/SkillCategory";

const skillsData = [
  { title: "Languages", skills: "Python, JavaScript, TypeScript, Java, Go, Dart" },
  { title: "Machine Learning", skills: "PyTorch, TensorFlow, Scikit-learn, Hugging Face" },
  { title: "Web & Frameworks", skills: "React, Next.js, Django, Spring Boot, Bun" },
  { title: "Tools", skills: "Git, Docker, Google Cloud, Jupyter" },
  { title: "Data & Analytics", skills: "Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-8">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-sm">
              {skillsData.map((skill, index) => (
                <SkillCategory
                  key={index}
                  title={skill.title}
                  skills={skill.skills}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}