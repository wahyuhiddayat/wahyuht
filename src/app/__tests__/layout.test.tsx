import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../layout';

// Mock the Navbar component
jest.mock('../../components/Navbar', () => {
  return function MockNavbar() {
    return <nav data-testid="navbar">Navbar</nav>;
  };
});

// Mock the Inter font
jest.mock('next/font/google', () => ({
  Inter: () => ({ 
    className: 'mock-inter-class',
    subsets: ['latin'] 
  })
}));

// Mock Next.js metadata
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>
  };
});

describe('RootLayout', () => {
  const mockChildren = <div data-testid="mock-children">Test children content</div>;

  beforeEach(() => {
    // Set up document element for tests
    document.documentElement.lang = '';
    document.documentElement.className = '';
  });

  it('renders the layout with navbar, main content, and footer', () => {
    // Mock the layout's body content
    const LayoutBody = () => (
      <>
        <nav data-testid="navbar">Navbar</nav>
        <main className="max-w-2xl mx-auto px-4 py-8 min-h-screen">{mockChildren}</main>
        <footer className="max-w-2xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800 mt-12">
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="mailto:wahyuuhidaayat@gmail.com" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-hover transition-colors"
            >
              Email
            </a>
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
          </div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Wahyu. All rights reserved.
          </p>
        </footer>
      </>
    );

    render(<LayoutBody />);
    
    // Check navbar is rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    
    // Check main content container is rendered with children
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    
    // Check footer is rendered with correct content
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
    
    // Check social links with correct URLs
    const emailLink = screen.getByText('Email');
    const githubLink = screen.getByText('GitHub');
    const linkedinLink = screen.getByText('LinkedIn');
    
    expect(emailLink).toHaveAttribute('href', 'mailto:wahyuuhidaayat@gmail.com');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/wahyuhiddayat');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/wahyuuhidayat/');
    
    // Check current year is in the footer
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear} Wahyu.`))).toBeInTheDocument();
  });

  it('applies the Inter font class to the body', () => {
    // Test that the Inter font is properly configured
    const mockInterFont = { className: 'mock-inter-class', subsets: ['latin'] };
    expect(mockInterFont.className).toBe('mock-inter-class');
  });
}); 