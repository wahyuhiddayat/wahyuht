import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="max-w-5xl mx-auto px-4 py-8 min-h-screen">{children}</main>
          <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800 mt-12">
            <div className="flex justify-center gap-6 mb-4">
              <a 
                href="https://github.com/wahyuhiddayat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-hover transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/wahyuuhidayat/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-hover transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://open.spotify.com/user/wahyuuhidaayat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-hover transition-colors"
              >
                Spotify
              </a>
              <a 
                href="https://www.instagram.com/wahyyuhidaayat/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-hover transition-colors"
              >
                Instagram
              </a>
            </div>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Wahyu. All rights reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}