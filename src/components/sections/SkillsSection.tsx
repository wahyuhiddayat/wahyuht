import SkillCategory from "@/components/SkillCategory";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-24 border-b border-hairline scroll-mt-16">
      <div>
        <SectionHeading>Capabilities</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {skillsData.map((skill, index) => (
            <SkillCategory
              key={index}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
