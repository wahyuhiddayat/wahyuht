import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceItem from '../Experience';

describe('ExperienceItem', () => {
  const mockProps = {
    position: 'Software Engineer',
    company: 'Test Company',
    period: '2022 - Present'
  };

  it('renders the experience item with provided props', () => {
    render(<ExperienceItem {...mockProps} />);
    
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();
  });

  it('renders position with proper styling', () => {
    render(<ExperienceItem {...mockProps} />);
    
    const positionElement = screen.getByText('Software Engineer');
    expect(positionElement).toHaveClass('font-medium');
  });

  it('renders company with proper styling', () => {
    render(<ExperienceItem {...mockProps} />);
    
    const companyElement = screen.getByText('Test Company');
    expect(companyElement).toHaveClass('text-gray-600', 'dark:text-gray-300');
  });

  it('renders period with proper styling', () => {
    render(<ExperienceItem {...mockProps} />);
    
    const periodElement = screen.getByText('2022 - Present');
    expect(periodElement).toHaveClass('text-gray-500', 'dark:text-gray-400', 'text-right', 'shrink-0');
  });

  it('renders with correct layout structure', () => {
    const { container } = render(<ExperienceItem {...mockProps} />);
    
    const flexContainer = container.querySelector('.flex.justify-between.items-start');
    expect(flexContainer).toBeInTheDocument();
    
    const positionElement = flexContainer?.querySelector('.font-medium');
    const periodElement = flexContainer?.querySelector('.text-right');
    
    expect(positionElement).toBeInTheDocument();
    expect(periodElement).toBeInTheDocument();
  });
}); 