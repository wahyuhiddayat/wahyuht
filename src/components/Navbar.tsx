'use client';

import { useState, useEffect } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import ThemeSwitcher from './ThemeSwitcher';
import {User2, Code2, BriefcaseBusiness, GraduationCap, FolderGit2, Mail} from 'lucide-react';

type NavItem = {
  id: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', Icon: User2 },
  { id: 'skills', label: 'Skills', Icon: Code2 },
  { id: 'experience', label: 'Experience', Icon: BriefcaseBusiness },
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

export default function Navbar() {
  const { activeSection } = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

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
            px-3 py-2 sm:px-5 sm:py-3
            border border-gray-200/30 dark:border-gray-600/30
            max-w-fit mx-auto
            ${isScrolled ? 'glass-nav-scrolled border-gray-200/60 dark:border-gray-600/50' : 'bg-transparent'}
          `}
        >
          {/* glass layers when scrolled */}
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
              <div className="absolute inset-0 rounded-full bg-white/40 dark:bg-black/40" style={{ zIndex: 2 }} />
              <div className="absolute inset-0 rounded-full glass-specular" style={{ zIndex: 3 }} />
            </>
          )}

          {/* content */}
          <div className="relative z-10">
            <nav className="flex items-center gap-1.5 sm:gap-2" aria-label="Primary">
              {NAV_ITEMS.map(({ id, label, Icon }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    aria-label={label}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      outline-none
                      transition-all duration-200 text-xs sm:text-sm font-medium
                      flex items-center gap-1.5 whitespace-nowrap
                      px-2.5 py-2 sm:px-3 sm:py-2 rounded-xl
                      text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white
                      ${isActive
                        ? 'bg-gray-100/90 dark:bg-gray-800/90 text-black dark:text-white shadow-sm'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }
                      focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20
                    `}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {/* expand label only when active */}
                    <span
                      className={`
                        hidden sm:inline text-xs font-medium
                        transition-[max-width,opacity,transform] duration-200 ease-out
                        ${isActive ? 'max-w-[160px] opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-1'}
                        overflow-hidden
                      `}
                    >
                      {label}
                    </span>
                    {/* screen-reader text for non-active */}
                    <span className="sr-only">{label}</span>
                  </button>
                );
              })}

              <div className="ml-1 sm:ml-2">
                <ThemeSwitcher />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}