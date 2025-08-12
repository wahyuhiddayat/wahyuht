import ScrollReveal from "@/components/ScrollReveal";
import SkillCategory from "@/components/SkillCategory";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  return (
  <section id="skills" className="py-5 md:py-3 lg:py-2">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm">
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