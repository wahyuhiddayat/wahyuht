import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../page';

// Mock the Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, className }) => {
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
    expect(screen.getByText('Skills')).toBeInTheDocument();
    
    // Check background content
    expect(screen.getByText(/I'm a third-year Computer Science student/)).toBeInTheDocument();
    
    // Check education section
    expect(screen.getByText('Bachelor of Science in Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Universitas Indonesia • 2022 - Present')).toBeInTheDocument();
    expect(screen.getByText('High School Diploma')).toBeInTheDocument();
    
    // Check skills section contains categories
    expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Data & ML')).toBeInTheDocument();
    expect(screen.getByText('Tools & Others')).toBeInTheDocument();
    
    // Check for specific skills
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('PyTorch')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    
    // Check contact link
    const contactLink = screen.getByText('Get in Touch');
    expect(contactLink).toBeInTheDocument();
    expect(screen.getByTestId('link-to-/contact')).toHaveAttribute('href', '/contact');
  });
}); 