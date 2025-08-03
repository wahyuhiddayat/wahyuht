'use client';

import Image from "next/image";
import TypingAnimation from "@/components/TypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <header className="text-center">
            <ScrollReveal delay={0.1}>
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 mx-auto mb-6">
                <Image
                  src="/images/profile.jpg"
                  alt="Wahyu Hidayat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
            <h1 className="text-3xl font-bold mb-2 tracking-tight">
              Hi, I'm Wahyu Hidayat 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building intelligent solutions as an aspiring{" "}
              <TypingAnimation 
                words={[
                  "Data Scientist",
                  "Machine Learning Engineer", 
                  "Data Engineer",
                  "Software Engineer",
                  "Business Intelligence Analyst",
                  "Product Manager"
                ]}
                className="text-primary typing-text"
              />
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              When I'm not coding, I'm probably at a coffee shop or exploring new tech.
            </p>
          </header>
        </FadeIn>
      </div>
    </section>
  );
}