'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import ThemeSwitcher from './ThemeSwitcher';

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { activeSection } = useActiveSection();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <div className="sticky top-0 z-50 bg-paper border-b border-hairline">
      <nav
        className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-5 sm:gap-7 overflow-x-auto"
        aria-label="Primary"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`
                shrink-0 text-sm font-medium transition-colors outline-none
                focus-visible:underline
                ${isActive ? 'text-accent' : 'text-muted hover:text-ink'}
              `}
            >
              {label}
            </button>
          );
        })}
        <div className="ml-auto shrink-0">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
