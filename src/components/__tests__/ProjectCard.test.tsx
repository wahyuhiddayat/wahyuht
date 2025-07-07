import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../ProjectCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...otherProps } = props;
    return <img {...otherProps} data-testid="project-image" />;
  }
}));

jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props} data-testid={`link-${href}`}>
        {children}
      </a>
    );
  };
});

const mockProps = {
  title: 'Test Project',
  description: 'A test project description',
  date: '2023',
  skills: ['React', 'TypeScript']
};

describe('ProjectCard', () => {
  it('renders basic project information', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('React • TypeScript')).toBeInTheDocument();
  });

  it('renders without image when imageUrl not provided', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.queryByTestId('project-image')).not.toBeInTheDocument();
  });

  it('renders image when imageUrl provided', () => {
    render(<ProjectCard {...mockProps} imageUrl="/test.jpg" />);
    
    const image = screen.getByTestId('project-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
    expect(image).toHaveAttribute('alt', 'Test Project');
  });

  it('renders website link when provided', () => {
    const links = { website: 'https://example.com' };
    render(<ProjectCard {...mockProps} links={links} />);
    
    const websiteLink = screen.getByText('Live Demo ↗');
    expect(websiteLink).toBeInTheDocument();
    expect(screen.getByTestId('link-https://example.com')).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByTestId('link-https://example.com')).toHaveAttribute('target', '_blank');
    expect(screen.getByTestId('link-https://example.com')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders github link when provided', () => {
    const links = { github: 'https://github.com/test/repo' };
    render(<ProjectCard {...mockProps} links={links} />);
    
    const githubLink = screen.getByText('Source Code');
    expect(githubLink).toBeInTheDocument();
    expect(screen.getByTestId('link-https://github.com/test/repo')).toHaveAttribute('href', 'https://github.com/test/repo');
  });

  it('renders both website and github links', () => {
    const links = {
      website: 'https://example.com',
      github: 'https://github.com/test/repo'
    };
    render(<ProjectCard {...mockProps} links={links} />);
    
    expect(screen.getByText('Live Demo ↗')).toBeInTheDocument();
    expect(screen.getByText('Source Code')).toBeInTheDocument();
  });

  it('renders without links section when no links provided', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.queryByText('Live Demo ↗')).not.toBeInTheDocument();
    expect(screen.queryByText('Source Code')).not.toBeInTheDocument();
  });

  it('renders complete project card with all props', () => {
    const fullProps = {
      ...mockProps,
      imageUrl: '/test.jpg',
      skills: ['React', 'Next.js', 'TypeScript'],
      links: {
        website: 'https://example.com',
        github: 'https://github.com/test/repo'
      }
    };
    
    render(<ProjectCard {...fullProps} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByTestId('project-image')).toBeInTheDocument();
    expect(screen.getByText('React • Next.js • TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Live Demo ↗')).toBeInTheDocument();
    expect(screen.getByText('Source Code')).toBeInTheDocument();
  });
}); 