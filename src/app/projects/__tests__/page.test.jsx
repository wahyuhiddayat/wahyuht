import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../page';

// Mock the ProjectCard component
jest.mock('../../../components/ProjectCard', () => {
  return function MockProjectCard({ title, description, date, skills, links }) {
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
  return ({ children, href, className }) => {
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
    expect(screen.getByTestId('project-card-project-one')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-project-two')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-project-three')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-project-four')).toBeInTheDocument();
    
    // Check titles
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Project Three')).toBeInTheDocument();
    expect(screen.getByText('Project Four')).toBeInTheDocument();
    
    // Check dates - use getAll for 2022 since it appears multiple times
    expect(screen.getByText('Date: 2023')).toBeInTheDocument();
    expect(screen.getAllByText('Date: 2022')).toHaveLength(2);
    expect(screen.getByText('Date: 2021')).toBeInTheDocument();
    
    // Check each project has appropriate skills
    const projectOne = screen.getByTestId('project-card-project-one');
    const projectTwo = screen.getByTestId('project-card-project-two');
    const projectThree = screen.getByTestId('project-card-project-three');
    const projectFour = screen.getByTestId('project-card-project-four');
    
    // Project One skills
    expect(projectOne).toHaveTextContent('React');
    expect(projectOne).toHaveTextContent('MongoDB');
    
    // Project Two skills
    expect(projectTwo).toHaveTextContent('Next.js');
    expect(projectTwo).toHaveTextContent('Tailwind CSS');
    
    // Project Three skills
    expect(projectThree).toHaveTextContent('Firebase');
    expect(projectThree).toHaveTextContent('Redux');
    
    // Project Four skills
    expect(projectFour).toHaveTextContent('HTML/CSS');
    expect(projectFour).toHaveTextContent('GSAP');
  });
}); 