'use client';

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

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

export default function EducationSection() {
  return (
    <section id="education" className="py-6">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Education
            </h2>
            <div className="space-y-4">
              <EducationItem
                degree="Bachelor of Computer Science"
                institution="Universitas Indonesia"
                period="2022 – Present"
                logo="/images/makara_fasilkom.png"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
