import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

// Mock the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Convert the fill prop to a string to avoid React warnings
    const modifiedProps = { ...props };
    if (props.fill) {
      modifiedProps.fill = 'true';
    }
    return <img {...modifiedProps} data-testid="project-image" />;
  }
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, className, target, rel }) => {
    return (
      <a 
        href={href} 
        className={className}
        target={target}
        rel={rel}
        data-testid={`link-to-${href}`}
      >
        {children}
      </a>
    );
  };
});

describe('ProjectCard', () => {
  // Test the function directly to ensure it's covered
  it('returns a defined result when called directly', () => {
    const basicProps = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      skills: ['React']
    };
    
    const result = ProjectCard(basicProps);
    expect(result).toBeDefined();
  });

  it('renders basic project card without image or links', () => {
    const basicProps = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      skills: ['React', 'Jest']
    };
    
    render(<ProjectCard {...basicProps} />);
    
    // Check basic content
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    
    // Check skills are rendered
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    
    // Verify image is not rendered
    expect(screen.queryByTestId('project-image')).not.toBeInTheDocument();
    
    // Verify links section is not rendered
    expect(screen.queryByText('Website')).not.toBeInTheDocument();
    expect(screen.queryByText('Source')).not.toBeInTheDocument();
  });
  
  it('renders project card with image', () => {
    const propsWithImage = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      imageUrl: '/test-image.jpg',
      skills: ['React']
    };
    
    render(<ProjectCard {...propsWithImage} />);
    
    // Verify image is rendered with correct properties
    const image = screen.getByTestId('project-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Project');
  });
  
  it('renders project card with website link', () => {
    const propsWithWebsite = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      skills: ['React'],
      links: {
        website: 'https://example.com'
      }
    };
    
    render(<ProjectCard {...propsWithWebsite} />);
    
    // Verify website link is rendered
    const websiteLink = screen.getByText('Website');
    expect(websiteLink).toBeInTheDocument();
    expect(screen.getByTestId('link-to-https://example.com')).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByTestId('link-to-https://example.com')).toHaveAttribute('target', '_blank');
    
    // Verify github link is not rendered
    expect(screen.queryByText('Source')).not.toBeInTheDocument();
  });
  
  it('renders project card with github link', () => {
    const propsWithGithub = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      skills: ['React'],
      links: {
        github: 'https://github.com/test/project'
      }
    };
    
    render(<ProjectCard {...propsWithGithub} />);
    
    // Verify github link is rendered
    const githubLink = screen.getByText('Source');
    expect(githubLink).toBeInTheDocument();
    expect(screen.getByTestId('link-to-https://github.com/test/project')).toHaveAttribute('href', 'https://github.com/test/project');
    
    // Verify website link is not rendered
    expect(screen.queryByText('Website')).not.toBeInTheDocument();
  });
  
  it('renders project card with both links', () => {
    const propsWithBothLinks = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      skills: ['React'],
      links: {
        website: 'https://example.com',
        github: 'https://github.com/test/project'
      }
    };
    
    render(<ProjectCard {...propsWithBothLinks} />);
    
    // Verify both links are rendered
    expect(screen.getByText('Website')).toBeInTheDocument();
    expect(screen.getByText('Source')).toBeInTheDocument();
    expect(screen.getByTestId('link-to-https://example.com')).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByTestId('link-to-https://github.com/test/project')).toHaveAttribute('href', 'https://github.com/test/project');
  });
  
  it('renders project card with all features', () => {
    const fullProps = {
      title: 'Test Project',
      description: 'A test project description',
      date: '2023',
      imageUrl: '/test-image.jpg',
      skills: ['React', 'TypeScript', 'Jest'],
      links: {
        website: 'https://example.com',
        github: 'https://github.com/test/project'
      }
    };
    
    render(<ProjectCard {...fullProps} />);
    
    // Verify everything is rendered correctly
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    
    // Check image
    expect(screen.getByTestId('project-image')).toBeInTheDocument();
    
    // Check skills
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    
    // Check links
    expect(screen.getByText('Website')).toBeInTheDocument();
    expect(screen.getByText('Source')).toBeInTheDocument();
  });
}); 