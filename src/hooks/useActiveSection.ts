'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionRef {
  id: string;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('about');

  // Setup intersection observers for each section
  const { ref: homeRef, inView: homeInView, entry: homeEntry } = useInView({
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-10% 0px -10% 0px'
  });

  const { ref: aboutRef, inView: aboutInView, entry: aboutEntry } = useInView({
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-10% 0px -10% 0px'
  });

  const { ref: skillsRef, inView: skillsInView, entry: skillsEntry } = useInView({
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-10% 0px -10% 0px'
  });

  const { ref: experienceRef, inView: experienceInView, entry: experienceEntry } = useInView({
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-10% 0px -10% 0px'
  });

  const { ref: educationRef, inView: educationInView, entry: educationEntry } = useInView({
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-10% 0px -10% 0px'
  });

  const { ref: projectsRef, inView: projectsInView, entry: projectsEntry } = useInView({
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-10% 0px -10% 0px'
  });

  useEffect(() => {
    const sections: SectionRef[] = [
      { id: 'home', inView: homeInView, entry: homeEntry },
      { id: 'about', inView: aboutInView, entry: aboutEntry },
      { id: 'skills', inView: skillsInView, entry: skillsEntry },
      { id: 'experience', inView: experienceInView, entry: experienceEntry },
      { id: 'education', inView: educationInView, entry: educationEntry },
      { id: 'projects', inView: projectsInView, entry: projectsEntry },
    ];

    // Find the section with the highest intersection ratio
    const visibleSections = sections
      .filter(section => section.inView && section.entry)
      .sort((a, b) => (b.entry?.intersectionRatio || 0) - (a.entry?.intersectionRatio || 0));

    if (visibleSections.length > 0) {
      const mostVisibleSection = visibleSections[0];
      
      // Map sections to navigation categories
      if (['home', 'about', 'skills'].includes(mostVisibleSection.id)) {
        setActiveSection('about');
      } else if (['experience', 'education'].includes(mostVisibleSection.id)) {
        setActiveSection('work');
      } else if (mostVisibleSection.id === 'projects') {
        setActiveSection('projects');
      }
    }
  }, [homeInView, aboutInView, skillsInView, experienceInView, educationInView, projectsInView, homeEntry, aboutEntry, skillsEntry, experienceEntry, educationEntry, projectsEntry]);

  return {
    activeSection,
    refs: {
      homeRef,
      aboutRef,
      skillsRef,
      experienceRef,
      educationRef,
      projectsRef,
    }
  };
}
