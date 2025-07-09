import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wahyu Hidayat",
  description: "Computer Science Student | AI Enthusiast | Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
        >
          {`
            (function() {
              function setTheme(theme) {
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              }

              try {
                var savedDarkMode = localStorage.getItem('darkMode');
                if (savedDarkMode !== null) {
                  setTheme(savedDarkMode === 'true' ? 'dark' : 'light');
                } else {
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  setTheme(prefersDark ? 'dark' : 'light');
                }
              } catch (error) {
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(prefersDark ? 'dark' : 'light');
              }
            })();
          `}
        </Script>
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-8 min-h-screen">{children}</main>
        <footer className="max-w-2xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800 mt-12">
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="mailto:wahyuuhidaayat@gmail.com" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/wahyuhiddayat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/wahyuuhidayat/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Wahyu. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}