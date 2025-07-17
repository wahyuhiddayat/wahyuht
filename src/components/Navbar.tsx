'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full shadow-sm px-8 py-4 border border-gray-200/50 dark:border-gray-700/30">
        <div className="flex items-center justify-between gap-8">
          <Link 
            href="/" 
            className={`text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium relative pb-1 ${
              isActive('/') ? 'text-black dark:text-white' : ''
            }`}
          >
            Home
            {isActive('/') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full" />
            )}
          </Link>
          <Link 
            href="/projects" 
            className={`text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium relative pb-1 ${
              isActive('/projects') ? 'text-black dark:text-white' : ''
            }`}
          >
            Projects
            {isActive('/projects') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full" />
            )}
          </Link>
          <Link 
            href="/contact" 
            className={`text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium relative pb-1 ${
              isActive('/contact') ? 'text-black dark:text-white' : ''
            }`}
          >
            Contact
            {isActive('/contact') && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full" />
            )}
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}