import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialLink from '../SocialLink';

describe('SocialLink', () => {
  const mockProps = {
    name: 'GitHub',
    description: 'Check out my open source projects',
    url: 'https://github.com/johndoe',
    username: '@johndoe'
  };

  it('renders the social link with provided props', () => {
    render(<SocialLink {...mockProps} />);
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Check out my open source projects')).toBeInTheDocument();
    expect(screen.getByText('@johndoe ↗')).toBeInTheDocument();
  });

  it('renders name with proper styling', () => {
    render(<SocialLink {...mockProps} />);
    
    const nameElement = screen.getByText('GitHub');
    expect(nameElement).toHaveClass('font-medium', 'text-sm', 'dark:text-white');
  });

  it('renders description with proper styling', () => {
    render(<SocialLink {...mockProps} />);
    
    const descriptionElement = screen.getByText('Check out my open source projects');
    expect(descriptionElement).toHaveClass('text-xs', 'text-gray-500', 'dark:text-gray-400');
  });

  it('renders link with proper attributes and styling', () => {
    render(<SocialLink {...mockProps} />);
    
    const linkElement = screen.getByRole('link', { name: '@johndoe ↗' });
    expect(linkElement).toHaveAttribute('href', 'https://github.com/johndoe');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkElement).toHaveClass('text-sm', 'text-blue-600', 'hover:text-blue-700', 'dark:text-blue-400', 'dark:hover:text-blue-300', 'transition-colors');
  });

  it('renders with border when isLast is false', () => {
    const { container } = render(<SocialLink {...mockProps} />);
    
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveClass('border-b', 'border-gray-100', 'dark:border-gray-800');
  });

  it('renders without border when isLast is true', () => {
    const { container } = render(<SocialLink {...mockProps} isLast={true} />);
    
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).not.toHaveClass('border-b');
    expect(wrapperDiv).not.toHaveClass('border-gray-100');
    expect(wrapperDiv).not.toHaveClass('dark:border-gray-800');
  });

  it('renders with correct layout structure', () => {
    const { container } = render(<SocialLink {...mockProps} />);
    
    const flexContainer = container.querySelector('.flex.justify-between.items-center.py-3');
    expect(flexContainer).toBeInTheDocument();
    
    const nameElement = container.querySelector('.font-medium.text-sm');
    const descriptionElement = container.querySelector('.text-xs.text-gray-500');
    const linkElement = container.querySelector('a');
    
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  it('handles different social platforms', () => {
    const twitterProps = {
      name: 'Twitter',
      description: 'Follow me for tech updates',
      url: 'https://twitter.com/johndoe',
      username: '@johndoe'
    };
    
    render(<SocialLink {...twitterProps} />);
    
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Follow me for tech updates')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://twitter.com/johndoe');
  });

  it('handles long descriptions', () => {
    const longDescriptionProps = {
      ...mockProps,
      description: 'This is a very long description that describes what you can find on this social media platform and why you should follow or connect with me there'
    };
    
    render(<SocialLink {...longDescriptionProps} />);
    
    expect(screen.getByText(longDescriptionProps.description)).toBeInTheDocument();
  });

  it('handles special characters in username', () => {
    const specialUsernameProps = {
      ...mockProps,
      username: '@john.doe_123'
    };
    
    render(<SocialLink {...specialUsernameProps} />);
    
    expect(screen.getByText('@john.doe_123 ↗')).toBeInTheDocument();
  });
});