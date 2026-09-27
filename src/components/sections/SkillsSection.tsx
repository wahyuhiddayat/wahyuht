import SkillCategory from "@/components/SkillCategory";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div>
        <SectionHeading title="Capabilities" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {skillsData.map((skill) => (
            <SkillCategory
              key={skill.title}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
