import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../page';

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

describe('About page', () => {
  it('renders the About page with all sections', () => {
    render(<About />);
    
    // Check page title
    expect(screen.getByText('About Me')).toBeInTheDocument();
    
    // Check main sections exist
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    
    // Check background content
    expect(screen.getByText(/I'm a third-year Computer Science student/)).toBeInTheDocument();
    
    // Check education section
    expect(screen.getByText('Bachelor of Science in Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Universitas Indonesia • 2022 - Present')).toBeInTheDocument();
    
    // Check experience section
    expect(screen.getByText('Software Engineer Intern')).toBeInTheDocument();
    expect(screen.getByText('Sokratech • Feb 2025 – Present')).toBeInTheDocument();
    expect(screen.getByText('Teaching Assistant — Introduction to Computer Organization')).toBeInTheDocument();
    expect(screen.getByText('Faculty of Computer Science, Universitas Indonesia • Aug 2024 – Jan 2025')).toBeInTheDocument();
    expect(screen.getByText('Deputy of Advocacy and Student Welfare')).toBeInTheDocument();
    expect(screen.getByText('BEM Fasilkom UI • Mar 2024 – Feb 2025')).toBeInTheDocument();
    expect(screen.getByText('Staff of Advocacy and Student Welfare')).toBeInTheDocument();
    expect(screen.getByText('BEM Fasilkom UI • Apr 2023 – Feb 2024')).toBeInTheDocument();
    
    // Check for specific experience skills (using more specific selectors)
    const experienceSection = screen.getByText('Experience').closest('div');
    expect(experienceSection).not.toBeNull();
    
    // Check for skills that appear in the experience section
    within(experienceSection as HTMLElement).getByText('Agile');
    within(experienceSection as HTMLElement).getByText('Mentoring');
    within(experienceSection as HTMLElement).getByText('Leadership');
    within(experienceSection as HTMLElement).getByText('Teamwork');
    
    // Check skills section contains categories
    expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Data & ML')).toBeInTheDocument();
    expect(screen.getByText('Tools & Others')).toBeInTheDocument();
    
    // Check for specific skills (using getAllByText for skills that appear multiple times)
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('PyTorch')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    
    // Check contact link
    const contactLink = screen.getByText('Get in Touch');
    expect(contactLink).toBeInTheDocument();
    expect(screen.getByTestId('link-to-/contact')).toHaveAttribute('href', '/contact');
  });
}); 