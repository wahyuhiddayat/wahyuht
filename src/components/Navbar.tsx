'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import ThemeSwitcher from './ThemeSwitcher';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const DESKTOP_NAV_ITEMS = NAV_ITEMS.filter(({ id }) =>
  ['about', 'experience', 'projects', 'contact'].includes(id),
);

export default function Navbar() {
  const { activeSection } = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-paper border-b border-hairline">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center" aria-label="Primary">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="group min-h-11 flex items-center text-sm font-semibold text-ink outline-none focus-visible:underline"
        >
          Wahyu Hidayat
          <span className="text-accent transition-transform group-hover:translate-x-0.5" aria-hidden="true">.</span>
        </button>

        <div className="hidden md:flex items-center gap-7 ml-auto">
          {DESKTOP_NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {label}
              </button>
            );
          })}
          <ThemeSwitcher />
        </div>

        <div className="md:hidden ml-auto flex items-center gap-2">
          <ThemeSwitcher />
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="min-h-11 min-w-14 text-sm font-medium text-ink outline-none focus-visible:underline"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-hairline bg-paper"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 gap-x-6">
              {NAV_ITEMS.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-h-14 flex items-center justify-between border-b border-hairline text-left text-base outline-none focus-visible:underline ${
                      isActive ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {label}
                    <span aria-hidden="true">&#8595;</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
