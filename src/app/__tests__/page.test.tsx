import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootPage from '../page';

// Mock the Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
    return (
      <a href={href} className={className} data-testid={`link-to-${href}`}>
        {children}
      </a>
    );
  };
});

describe('Root Page', () => {
  it('renders the welcome section', () => {
    render(<RootPage />);
    
    // Check heading
    expect(screen.getByRole('heading', { name: /Hi, I'm Wahyu/i })).toBeInTheDocument();
    
    // Check links
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('View Projects')).toBeInTheDocument();
  });
  
  it('renders the featured sections', () => {
    render(<RootPage />);
    
    // Check headings
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Latest Articles/i })).toBeInTheDocument();
    
    // Check CTA buttons
    expect(screen.getByText('View All Projects')).toBeInTheDocument();
    expect(screen.getByText('Read My Blog')).toBeInTheDocument();
  });
}); 