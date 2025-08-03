'use client';

import ScrollReveal from "@/components/ScrollReveal";

export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Education
            </h2>
            <div className="text-sm">
              <div className="flex justify-between items-start">
                <p className="font-medium">Bachelor of Computer Science</p>
                <p className="text-gray-500 dark:text-gray-400 text-right shrink-0">2022 – Present</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Universitas Indonesia
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}