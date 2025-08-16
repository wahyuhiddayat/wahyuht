'use client';

import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
  const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId === 'home' ? 'about' : sectionId);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection };
}
