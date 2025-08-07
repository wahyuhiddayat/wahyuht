'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-4">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="space-y-4">
          <FadeIn>
            <header>
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Hi, I'm Wahyu Hidayat 👋
                </h1>
                <ScrollReveal delay={0.2}>
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 ring-2 lg:ring-4 ring-white dark:ring-gray-800 shadow-lg ml-4">
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
              
              <p className="text-gray-500 dark:text-gray-400 italic leading-relaxed">
                When I'm not coding, I'm probably at a coffee shop or exploring new tech.
              </p>
            </header>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}