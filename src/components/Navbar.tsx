'use client';

import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId === 'home' || sectionId === 'about' || sectionId === 'skills') {
              setActiveSection('about');
            } else if (sectionId === 'experience' || sectionId === 'education') {
              setActiveSection('work');
            } else if (sectionId === 'projects') {
              setActiveSection('projects');
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    const sections = document.querySelectorAll('section[id]:not(#contact)');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full shadow-sm px-8 py-4 border border-gray-200/50 dark:border-gray-700/30">
        <div className="flex items-center justify-between gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium relative pb-1 ${
                activeSection === item.label.toLowerCase() ? 'text-black dark:text-white' : ''
              }`}
            >
              {item.label}
              {activeSection === item.label.toLowerCase() && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full" />
              )}
            </button>
          ))}
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}