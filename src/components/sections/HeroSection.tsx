'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-4">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9">
            <FadeIn>
              <header>
                <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                  Hi, I'm Wahyu Hidayat 👋
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Building intelligent solutions as an aspiring{" "}
                  <span className="block mt-1">
                    <TypingAnimation 
                      words={[
                        "Data Scientist",
                        "Machine Learning Engineer", 
                        "Data Engineer",
                        "Software Engineer",
                        "Business Intelligence Analyst",
                        "Product Manager"
                      ]}
                      className="text-primary typing-text font-semibold"
                    />
                  </span>
                </p>
                
                <p className="text-gray-500 dark:text-gray-400 italic mb-6 leading-relaxed">
                  When I'm not coding, I'm probably at a coffee shop or exploring new tech.
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Get in touch</span>
                  <a 
                    href="mailto:wahyuhidayat@gmail.com" 
                    className="text-primary hover:underline transition-colors"
                  >
                    📧 wahyuhidayat@gmail.com
                  </a>
                </div>
              </header>
            </FadeIn>
          </div>

          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2}>
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 ring-4 ring-white dark:ring-gray-800 shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="Wahyu Hidayat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}