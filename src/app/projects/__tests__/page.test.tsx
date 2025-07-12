import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../page';

// Mock the ProjectCard component
jest.mock('../../../components/ProjectCard', () => {
  return function MockProjectCard({ 
    title, 
    description, 
    date, 
    skills, 
    links 
  }: { 
    title: string; 
    description: string; 
    date: string; 
    skills: string[]; 
    links?: { website?: string; github?: string } 
  }) {
    return (
      <div data-testid={`project-card-${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Date: {date}</p>
        <div>
          {skills.map(skill => (
            <span key={skill} data-testid={`skill-${skill}`}>{skill}</span>
          ))}
        </div>
        {links && (
          <div>
            {links.website && <a href={links.website}>Website</a>}
            {links.github && <a href={links.github}>Github</a>}
          </div>
        )}
      </div>
    );
  };
});

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

describe('Projects page', () => {
  it('renders the Projects page with title and description', () => {
    render(<Projects />);
    
    // Check page title and description
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('A collection of my work, side projects, and experiments.')).toBeInTheDocument();
  });
  
  it('renders all project cards', () => {
    render(<Projects />);
    
    // Check that all project cards are rendered
    expect(screen.getByTestId('project-card-sokratech-fraud-risk-automation')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-wahyuht')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-letterbookd')).toBeInTheDocument();
    
    // Check titles
    expect(screen.getByText('Sokratech Fraud Risk Automation')).toBeInTheDocument();
    expect(screen.getByText('wahyuht')).toBeInTheDocument();
    expect(screen.getByText('Letterbookd')).toBeInTheDocument();
    
    // Check dates
    expect(screen.getAllByText('Date: 2025')).toHaveLength(2);
    expect(screen.getByText('Date: 2023')).toBeInTheDocument();
    
    // Check each project has appropriate skills
    const sokratechProject = screen.getByTestId('project-card-sokratech-fraud-risk-automation');
    const wahyuhtProject = screen.getByTestId('project-card-wahyuht');
    const letterbookdProject = screen.getByTestId('project-card-letterbookd');
    
    // Sokratech project skills
    expect(sokratechProject).toHaveTextContent('Next.js');
    expect(sokratechProject).toHaveTextContent('TypeScript');
    expect(sokratechProject).toHaveTextContent('FastAPI');
    
    // wahyuht project skills
    expect(wahyuhtProject).toHaveTextContent('Next.js');
    expect(wahyuhtProject).toHaveTextContent('React');
    expect(wahyuhtProject).toHaveTextContent('TypeScript');
    
    // Letterbookd project skills
    expect(letterbookdProject).toHaveTextContent('Django');
    expect(letterbookdProject).toHaveTextContent('Python');
    expect(letterbookdProject).toHaveTextContent('PostgreSQL');
  });
}); 