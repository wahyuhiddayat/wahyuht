'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full shadow-sm px-8 py-4 border border-gray-200/50 dark:border-gray-700/30">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">Home</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">Projects</Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">Blog</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">Contact</Link>
          
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}