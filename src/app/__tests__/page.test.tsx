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
    expect(screen.getByText(/Building intelligent solutions through machine learning/i)).toBeInTheDocument();
    expect(screen.getByText(/When I'm not coding/i)).toBeInTheDocument();
  });
  
  it('renders all main sections', () => {
    render(<RootPage />);
    
    // Check section headings
    expect(screen.getByRole('heading', { name: /Background/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument();
  });

  it('displays experience items correctly', () => {
    render(<RootPage />);
    
    expect(screen.getByText('Vice President')).toBeInTheDocument();
    expect(screen.getByText('Teaching Assistant')).toBeInTheDocument();
    expect(screen.getByText('Deputy of Advocacy and Student Welfare')).toBeInTheDocument();
    expect(screen.getByText('Staff of Advocacy and Student Welfare')).toBeInTheDocument();
    
    // Check date formats
    expect(screen.getByText('May 2025 – Present')).toBeInTheDocument();
    expect(screen.getByText('Aug 2024 – Jan 2025')).toBeInTheDocument();
  });

  it('displays education information correctly', () => {
    render(<RootPage />);
    
    expect(screen.getByText('Bachelor of Computer Science')).toBeInTheDocument();
    expect(screen.getAllByText('Universitas Indonesia')).toHaveLength(2);
    expect(screen.getByText('2022 – Present')).toBeInTheDocument();
  });

  it('displays skills categories correctly', () => {
    render(<RootPage />);
    
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Web & Frameworks')).toBeInTheDocument();
    expect(screen.getByText('Data & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    
    // Check some specific skills
    expect(screen.getByText(/Python, JavaScript, TypeScript, Java/i)).toBeInTheDocument();
    expect(screen.getByText(/PyTorch, TensorFlow, Scikit-learn/i)).toBeInTheDocument();
  });

  it('has a working "View all" link for projects', () => {
    render(<RootPage />);
    
    const projectsLink = screen.getByTestId('link-to-/projects');
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(projectsLink).toHaveTextContent('See all projects →');
  });
}); 