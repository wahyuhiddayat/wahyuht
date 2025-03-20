'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 border border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm">Home</Link>
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm">About</Link>
          <Link href="/projects" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm">Projects</Link>
          <Link href="/blog" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm">Blog</Link>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm">Contact</Link>
          
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}