import ScrollReveal from "@/components/ScrollReveal";
import SkillCategory from "@/components/SkillCategory";
import StationLabel from "@/components/StationLabel";
import { skillsData } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-10 border-b border-hairline">
      <ScrollReveal>
        <StationLabel number="03">Skills</StationLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {skillsData.map((skill, index) => (
            <SkillCategory
              key={index}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
