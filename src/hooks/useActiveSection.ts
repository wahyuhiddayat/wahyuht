'use client';

import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

      const scrollY = window.scrollY;
      const viewportH = window.innerHeight || 0;
      const viewportFocusY = scrollY + viewportH * 0.35;

      let bestId = 'about';
      let bestScore = Number.POSITIVE_INFINITY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const center = top + height / 2;
        const distance = Math.abs(center - viewportFocusY);
        if (distance < bestScore) {
          bestScore = distance;
          bestId = sectionId;
        }
      }

      const doc = document.documentElement;
      const scrollBottom = scrollY + viewportH;
      const maxScroll = doc.scrollHeight;
      if (maxScroll - scrollBottom < 140 && document.getElementById('contact')) {
        bestId = 'contact';
      }

      setActiveSection(bestId);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection };
}
