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

describe('Portfolio Home Page', () => {
  it('renders the header section', () => {
    render(<RootPage />);
    
    // Check heading and intro
    expect(screen.getByRole('heading', { name: /Wahyu Hidayat/i })).toBeInTheDocument();
    expect(screen.getByText(/Computer Science student at Universitas Indonesia/i)).toBeInTheDocument();
    expect(screen.getByText(/My journey started with web development/i)).toBeInTheDocument();
  });
  
  it('renders all main sections', () => {
    render(<RootPage />);
    
    // Check section headings
    expect(screen.getByRole('heading', { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
  });

  it('displays experience items correctly', () => {
    render(<RootPage />);
    
    expect(screen.getByText('Software Engineering Intern')).toBeInTheDocument();
    expect(screen.getByText('Teaching Assistant — Introduction to Computer Organization')).toBeInTheDocument();
    expect(screen.getByText('Deputy of Advocacy and Student Welfare')).toBeInTheDocument();
    expect(screen.getByText('Staff of Advocacy and Student Welfare')).toBeInTheDocument();
    
    // Check date formats
    expect(screen.getByText('Feb 2025–Present')).toBeInTheDocument();
    expect(screen.getByText('Aug 2024–Jan 2025')).toBeInTheDocument();
  });

  it('displays education information correctly', () => {
    render(<RootPage />);
    
    expect(screen.getByText('Bachelor of Science in Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Universitas Indonesia')).toBeInTheDocument();
    expect(screen.getByText('2022–Present')).toBeInTheDocument();
  });

  it('displays skills categories correctly', () => {
    render(<RootPage />);
    
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('ML & Data')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    
    // Check some specific skills
    expect(screen.getByText(/JavaScript, TypeScript, Python, Java/i)).toBeInTheDocument();
    expect(screen.getByText(/PyTorch, Scikit-learn, Pandas/i)).toBeInTheDocument();
  });

  it('has a working "View all" link for projects', () => {
    render(<RootPage />);
    
    const projectsLink = screen.getByTestId('link-to-/projects');
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(projectsLink).toHaveTextContent('View all');
  });
}); 