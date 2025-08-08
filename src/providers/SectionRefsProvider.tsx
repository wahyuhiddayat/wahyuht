'use client';

import { createContext, useContext } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';

interface SectionRefsContextType {
  refs: {
    homeRef: (node?: Element | null) => void;
    aboutRef: (node?: Element | null) => void;
    skillsRef: (node?: Element | null) => void;
    experienceRef: (node?: Element | null) => void;
    educationRef: (node?: Element | null) => void;
    projectsRef: (node?: Element | null) => void;
  };
  activeSection: string;
}

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export function SectionRefsProvider({ children }: { children: React.ReactNode }) {
  const { activeSection, refs } = useActiveSection();

  return (
    <SectionRefsContext.Provider value={{ refs, activeSection }}>
      {children}
    </SectionRefsContext.Provider>
  );
}

export function useSectionRefs() {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
}
