'use client';

import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll detection for glass effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 12);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Intersection observer for active section detection
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

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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
    <>
      {/* SVG Filter for Glass Distortion */}
      <svg className="hidden">
        <defs>
          <filter id="glass-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.006" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
          </filter>
        </defs>
      </svg>

      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center">
        <div 
          className={`
            relative rounded-full px-8 py-4 transition-all duration-300 ease-out overflow-hidden
            border border-gray-200/30 dark:border-gray-600/30
            ${isScrolled ? 'glass-nav-active border-gray-200/60 dark:border-gray-600/50' : 'bg-transparent'}
          `}
          style={{
            '--bg-color': 'rgba(255, 255, 255, 0.25)',
            '--bg-color-dark': 'rgba(0, 0, 0, 0.25)', 
            '--highlight': 'rgba(255, 255, 255, 0.75)',
            '--highlight-dark': 'rgba(255, 255, 255, 0.15)',
          } as React.CSSProperties}
        >
          {/* Glass Filter Layer */}
          {isScrolled && (
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                zIndex: 1,
                backdropFilter: 'blur(8px)',
                filter: 'url(#glass-distortion) saturate(110%) brightness(1.05)',
              }}
            />
          )}
          
          {/* Glass Overlay Layer */}
          {isScrolled && (
            <div 
              className="absolute inset-0 rounded-full bg-white/40 dark:bg-black/40"
              style={{ zIndex: 2 }}
            />
          )}
          
          {/* Glass Specular Highlight */}
          {isScrolled && (
            <div 
              className="absolute inset-0 rounded-full glass-specular"
              style={{ zIndex: 3 }}
            />
          )}

          {/* Content Layer */}
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.label.toLowerCase();
                return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    transition-all duration-200 text-sm font-medium relative px-4 py-2 rounded-lg
                    ${isScrolled 
                      ? `text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white font-semibold
                         ${isActive
                           ? 'bg-white/50 dark:bg-white/20 text-black dark:text-white shadow-sm backdrop-blur-sm' 
                           : 'hover:bg-white/30 dark:hover:bg-white/10'
                         }`
                      : `text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white
                         ${isActive
                           ? 'bg-gray-100 dark:bg-gray-800/80 text-black dark:text-white' 
                           : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                         }`
                    }
                  `}
                >
                  {item.label}
                </button>
                );
              })}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}