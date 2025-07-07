import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillCategory from '../SkillCategory';

describe('SkillCategory', () => {
  const mockProps = {
    title: 'Frontend',
    skills: 'React, TypeScript, Next.js, Tailwind CSS'
  };

  it('renders the skill category with provided props', () => {
    render(<SkillCategory {...mockProps} />);
    
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('React, TypeScript, Next.js, Tailwind CSS')).toBeInTheDocument();
  });

  it('renders title with proper styling', () => {
    render(<SkillCategory {...mockProps} />);
    
    const titleElement = screen.getByText('Frontend');
    expect(titleElement).toHaveClass('font-medium', 'mb-1');
  });

  it('renders skills with proper styling', () => {
    render(<SkillCategory {...mockProps} />);
    
    const skillsElement = screen.getByText('React, TypeScript, Next.js, Tailwind CSS');
    expect(skillsElement).toHaveClass('text-gray-600', 'dark:text-gray-300');
  });

  it('renders with correct layout structure', () => {
    const { container } = render(<SkillCategory {...mockProps} />);
    
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toBeInTheDocument();
    
    const titleElement = container.querySelector('.font-medium.mb-1');
    const skillsElement = container.querySelector('.text-gray-600.dark\\:text-gray-300');
    
    expect(titleElement).toBeInTheDocument();
    expect(skillsElement).toBeInTheDocument();
  });

  it('handles empty skills string', () => {
    const emptySkillsProps = {
      title: 'Backend',
      skills: ''
    };
    
    render(<SkillCategory {...emptySkillsProps} />);
    
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('handles long skill lists', () => {
    const longSkillsProps = {
      title: 'Full Stack',
      skills: 'React, Angular, Vue.js, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, TypeScript, JavaScript, Python, Java, C#, PHP, Ruby, Go, Rust, Swift, Kotlin'
    };
    
    render(<SkillCategory {...longSkillsProps} />);
    
    expect(screen.getByText('Full Stack')).toBeInTheDocument();
    expect(screen.getByText(longSkillsProps.skills)).toBeInTheDocument();
  });
});