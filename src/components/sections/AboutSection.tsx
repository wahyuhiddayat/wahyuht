'use client';

import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Bio */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                About
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a final-year Computer Science student at Universitas Indonesia with a strong focus on data science and machine learning. I love working with real-world data by transforming raw information into insights, predictive models, and intelligent tools. My interests lie in solving practical problems with clean code, solid reasoning, and a touch of curiosity.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="lg:col-span-4 lg:pt-0 lg:pl-8 lg:border-l lg:border-gray-200 dark:border-gray-700">
              
              <div className="space-y-4">
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Location</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Jakarta, Indonesia</p>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Education</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Computer Science, UI</p>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Status</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Available Jan 2026</p>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Interests</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Coffee & Tech exploring</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}