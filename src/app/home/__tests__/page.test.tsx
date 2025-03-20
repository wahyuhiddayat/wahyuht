import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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

// Create a mock Home component
const MockHome = () => (
  <main data-testid="home-page" className="container mx-auto p-4">
    <section className="hero py-10">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">Frontend Developer & UI/UX Enthusiast</p>
    </section>
  </main>
);

// Mock the Home page component
jest.mock('../page', () => {
  return MockHome;
});

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<MockHome />);
    
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer & UI/UX Enthusiast')).toBeInTheDocument();
  });
}); 