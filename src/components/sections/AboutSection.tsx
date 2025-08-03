'use client';

import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              About
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              I'm a final-year Computer Science student at Universitas Indonesia with a strong focus on data science and machine learning. I love working with real-world data by transforming raw information into insights, predictive models, and intelligent tools. My interests lie in solving practical problems with clean code, solid reasoning, and a touch of curiosity.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}