'use client';

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const experienceData = [
  {
    position: "Vice President",
    company: "BEM Fasilkom UI",
    period: "May 2025 – Present",
    logo: "/images/bem_fasilkom.png"
  },
  {
    position: "Teaching Assistant",
    company: "Universitas Indonesia",
    period: "Aug 2024 – Jan 2025",
    logo: "/images/makara_fasilkom.png"
  },
  {
    position: "Deputy of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Mar 2024 – Feb 2025",
    logo: "/images/bem_fasilkom.png"
  },
  {
    position: "Staff of Advocacy and Student Welfare",
    company: "BEM Fasilkom UI",
    period: "Apr 2023 – Feb 2024",
    logo: "/images/bem_fasilkom.png"
  },
];

function ExperienceItem({ position, company, period, logo }: {
  position: string;
  company: string;
  period: string;
  logo: string;
}) {
  return (
    <div className="flex gap-3">
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-1">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <p className="font-medium text-gray-900 dark:text-gray-100">{position}</p>
          <p className="text-gray-500 dark:text-gray-400 text-right shrink-0 ml-4 text-sm">{period}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{company}</p>
      </div>
    </div>
  );
}

function EducationItem({ degree, institution, period, logo }: {
  degree: string;
  institution: string;
  period: string;
  logo: string;
}) {
  return (
    <div className="flex gap-3">
      {/* Institution Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-1">
          <Image
            src={logo}
            alt={`${institution} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <p className="font-medium text-gray-900 dark:text-gray-100">{degree}</p>
          <p className="text-gray-500 dark:text-gray-400 text-right shrink-0 ml-4 text-sm">{period}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{institution}</p>
      </div>
    </div>
  );
}

export default function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-6">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map((experience, index) => (
                  <ExperienceItem
                    key={index}
                    position={experience.position}
                    company={experience.company}
                    period={experience.period}
                    logo={experience.logo}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                Education
              </h2>
              <div className="mb-6">
                <EducationItem
                  degree="Bachelor of Computer Science"
                  institution="Universitas Indonesia"
                  period="2022 – Present"
                  logo="/images/makara_fasilkom.png"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}