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
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        if (visibleEntries.length > 0) {
          const mostVisibleEntry = visibleEntries[0];
          const sectionId = mostVisibleEntry.target.id;
          
          console.log(`Mobile debug - Most visible section: ${sectionId}, ratio: ${mostVisibleEntry.intersectionRatio}`);
          
          if (sectionId === 'home' || sectionId === 'about' || sectionId === 'skills') {
            setActiveSection('about');
          } else if (sectionId === 'experience' || sectionId === 'education') {
            setActiveSection('work');
          } else if (sectionId === 'projects') {
            setActiveSection('projects');
          }
        }
      },
      { 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
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
    
    // Force update active section immediately for manual clicks
    setTimeout(() => {
      if (sectionId === 'home') {
        setActiveSection('about');
      } else if (sectionId === 'experience') {
        setActiveSection('work');
      } else if (sectionId === 'projects') {
        setActiveSection('projects');
      }
    }, 100);
  };

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <>
      {/* SVG filter for glass distortion */}
      <svg className="hidden">
        <defs>
          <filter id="glass-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.006" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
          </filter>
        </defs>
      </svg>

      <div className="fixed top-6 left-4 right-4 sm:top-8 sm:left-0 sm:right-0 z-50 flex justify-center">
        <div 
          className={`
            relative rounded-full transition-all duration-300 ease-out overflow-hidden
            px-4 py-3 sm:px-8 sm:py-4
            border border-gray-200/30 dark:border-gray-600/30
            max-w-fit mx-auto
            ${isScrolled ? 'glass-nav-scrolled border-gray-200/60 dark:border-gray-600/50' : 'bg-transparent'}
          `}
        >
          {/* Glass layers when scrolled */}
          {isScrolled && (
            <>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  zIndex: 1,
                  backdropFilter: 'blur(8px)',
                  filter: 'url(#glass-distortion) saturate(110%) brightness(1.05)',
                }}
              />
              <div 
                className="absolute inset-0 rounded-full bg-white/40 dark:bg-black/40"
                style={{ zIndex: 2 }}
              />
              <div 
                className="absolute inset-0 rounded-full glass-specular"
                style={{ zIndex: 3 }}
              />
            </>
          )}

          {/* Content layer */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 sm:gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.label.toLowerCase();
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      transition-all duration-200 text-xs sm:text-sm font-medium relative 
                      px-3 py-2 sm:px-4 sm:py-2 rounded-lg
                      text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white
                      ${isActive
                        ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="ml-1 sm:ml-0">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}