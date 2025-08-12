import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { educationData, type Education } from "@/data/education";

function EducationItem({ degree, institution, period, logo }: Education) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto] gap-2 sm:gap-3 items-start">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 sm:p-1">
          <Image
            src={logo}
            alt={`${institution} logo`}
            fill
            sizes="(max-width: 640px) 32px, 40px"
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="min-w-0">
        <p className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-tight sm:leading-normal" style={{ textWrap: 'balance' } as any}>
          {degree}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-0.5">
          {institution}
        </p>
        {/* Date on mobile */}
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:hidden mt-1">
          {period}
        </p>
      </div>
      
      {/* Right rail */}
      <div className="hidden sm:flex items-center gap-2 shrink-0">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {period}
        </p>
        <span className="w-5 h-5" aria-hidden></span>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
  <section id="education" className="pt-5 md:pt-4 pb-5 md:pb-1 lg:pb-0">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((education, index) => (
                <EducationItem
                  key={index}
                  degree={education.degree}
                  institution={education.institution}
                  period={education.period}
                  logo={education.logo}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
