import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceItem from '../Experience';

// Mock the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // Convert the fill prop to a string to avoid React warnings
    const modifiedProps = { ...props };
    if (props.fill) {
      modifiedProps.fill = 'true';
    }
    return <img {...modifiedProps} />;
  }
}));

describe('ExperienceItem', () => {
  const mockProps = {
    company: 'Test Company',
    position: 'Software Engineer',
    period: '2022 - Present',
    description: 'Working on exciting projects and technologies.',
    skills: ['React', 'Next.js', 'TDD']
  };

  it('renders the experience item with provided props', () => {
    render(<ExperienceItem {...mockProps} />);
    
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getAllByText('2022 - Present').length).toBe(2); // Two period elements with the same text
    expect(screen.getByText('Working on exciting projects and technologies.')).toBeInTheDocument();
    
    // Check for skills
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TDD')).toBeInTheDocument();
  });

  it('does not render the logo when logoUrl is not provided', () => {
    render(<ExperienceItem {...mockProps} />);
    
    // There should be no image element
    const images = document.querySelectorAll('img');
    expect(images.length).toBe(0);
  });

  it('renders the logo when logoUrl is provided', () => {
    const propsWithLogo = {
      ...mockProps,
      logoUrl: '/test-logo.png'
    };
    
    render(<ExperienceItem {...propsWithLogo} />);
    
    // There should be one image element
    const image = document.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-logo.png');
    expect(image).toHaveAttribute('alt', 'Test Company logo');
  });

  it('renders correctly without skills', () => {
    const propsWithoutSkills = {
      company: 'Test Company',
      position: 'Software Engineer',
      period: '2022 - Present',
      description: 'Working on exciting projects and technologies.'
    };
    
    render(<ExperienceItem {...propsWithoutSkills} />);
    
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    
    // There should be no skill tags
    const skillTags = document.querySelectorAll('.bg-gray-100');
    expect(skillTags.length).toBe(0);
  });
}); 