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
    <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto] gap-2 sm:gap-3 items-start">
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 sm:p-1">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="min-w-0">
        <p className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-tight sm:leading-normal" style={{ textWrap: 'balance' } as any}>
          {position}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-0.5">
          {company}
        </p>
        {/* Date on mobile */}
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:hidden mt-1">
          {period}
        </p>
      </div>
      
      {/* Date on larger screens */}
      <div className="hidden sm:block text-right shrink-0">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {period}
        </p>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-6">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
