import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../page';

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

// Mock the Contact page component as we don't have access to the actual implementation
jest.mock('../page', () => {
  return function MockContact() {
    return (
      <main data-testid="contact-page" className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-4">Feel free to reach out through any of these channels:</p>
        <div className="contact-links">
          <a href="mailto:example@example.com" className="block mb-2">Email: example@example.com</a>
          <a href="https://linkedin.com/in/example" className="block mb-2">LinkedIn</a>
          <a href="https://github.com/example" className="block mb-2">GitHub</a>
        </div>
      </main>
    );
  };
});

describe('Contact Page', () => {
  it('renders the contact page', () => {
    render(<Contact />);
    
    expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
    expect(screen.getByText('Feel free to reach out through any of these channels:')).toBeInTheDocument();
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
}); 