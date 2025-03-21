import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

// Mock ThemeSwitcher component
jest.mock('../ThemeSwitcher', () => {
  return function MockThemeSwitcher() {
    return <div data-testid="theme-switcher">Theme Switcher</div>;
  };
});

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
    return (
      <a href={href} className={className} data-testid={`link-to-${href}`}>
        {children}
      </a>
    );
  };
});

describe('Navbar', () => {
  it('renders all navigation links with correct hrefs', () => {
    // Test the function directly by calling it and checking the result
    const NavbarResult = Navbar();
    expect(NavbarResult).toBeDefined();
    
    // Render the component
    render(<Navbar />);
    
    // Check that all nav links are rendered with correct href values
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('link-to-/')).toHaveAttribute('href', '/');
    
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByTestId('link-to-/projects')).toHaveAttribute('href', '/projects');
    
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByTestId('link-to-/blog')).toHaveAttribute('href', '/blog');
    
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByTestId('link-to-/contact')).toHaveAttribute('href', '/contact');
  });

  it('renders theme switcher', () => {
    render(<Navbar />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
}); 