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
    // Use container to get direct output rather than document DOM
    const { container } = render(<RootLayout children={mockChildren} />);
    
    // Check navbar is rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    
    // Check main content container is rendered with children
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    
    // Check footer is rendered with correct content
    const footerElement = container.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
    
    // Check social links
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBe(3);
    expect(socialLinks[0]).toHaveAttribute('href', 'https://github.com/yourusername');
    expect(socialLinks[1]).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
    expect(socialLinks[2]).toHaveAttribute('href', 'https://twitter.com/yourusername');
    
    // Check current year is in the footer
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear} Wahyu.`))).toBeInTheDocument();
  });

  it('applies the Inter font class to the body', () => {
    const { container } = render(<RootLayout children={mockChildren} />);
    
    // Check body element has font class
    const bodyElement = container.querySelector('body');
    expect(bodyElement).toHaveClass('mock-inter-class');
  });
}); 