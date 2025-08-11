import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/structured-data";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: {
    default: "Wahyu Hidayat",
    template: "%s | Wahyu Hidayat"
  },
  description: "Final-year Computer Science student at Universitas Indonesia specializing in Data Science, Machine Learning, and AI. Building intelligent solutions with clean code and practical insights.",
  keywords: [
    "Wahyu Hidayat",
    "Data Scientist", 
    "Machine Learning Engineer",
    "Computer Science",
    "Universitas Indonesia",
    "AI",
    "Data Engineering",
    "Business Intelligence",
    "Jakarta",
    "Indonesia"
  ],
  authors: [{ name: "Wahyu Hidayat", url: "https://wahyuht.com" }],
  creator: "Wahyu Hidayat",
  publisher: "Wahyu Hidayat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wahyuht.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wahyuht.com',
    title: 'Wahyu Hidayat | Data Scientist & Machine Learning Engineer',
    description: 'Final-year Computer Science student at Universitas Indonesia specializing in Data Science, Machine Learning, and AI. Building intelligent solutions with clean code and practical insights.',
    siteName: 'Wahyu Hidayat Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Wahyu Hidayat - Data Scientist & Machine Learning Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu Hidayat | Data Scientist & Machine Learning Engineer',
    description: 'Final-year Computer Science student at Universitas Indonesia specializing in Data Science, Machine Learning, and AI.',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
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
                href="https://www.instagram.com/wahyyuht/" 
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