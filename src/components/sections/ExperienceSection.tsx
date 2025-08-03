'use client';

import ScrollReveal from "@/components/ScrollReveal";
import ExperienceItem from "@/components/Experience";

const experienceData = [
  {
    position: "Vice President",
    company: "BEM Fasilkom UI",
    period: "May 2025 – Present"
  },
  {
    position: "Teaching Assistant",
    company: "Universitas Indonesia",
    period: "Aug 2024 – Jan 2025"
  },
  {
    position: "Deputy of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Mar 2024 – Feb 2025"
  },
  {
    position: "Staff of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Apr 2023 – Feb 2024"
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Experience
            </h2>
            <div className="space-y-4 text-sm">
              {experienceData.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  position={experience.position}
                  company={experience.company}
                  period={experience.period}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}