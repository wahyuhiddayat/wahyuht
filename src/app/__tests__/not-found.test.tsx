import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../not-found';

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

describe('NotFound Page', () => {
  it('renders the 404 page with message', () => {
    render(<NotFound />);
    
    // Check for 404 heading
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
    
    // Check for error message
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    
    // Check for home link
    const homeLink = screen.getByTestId('link-to-/');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveTextContent(/go home/i);
  });
}); 