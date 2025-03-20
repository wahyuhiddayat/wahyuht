import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog from '../page';

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

describe('Blog Page', () => {
  it('renders the blog page title', () => {
    render(<Blog />);
    
    // Check main heading
    expect(screen.getByRole('heading', { name: /blog/i, level: 1 })).toBeInTheDocument();
    
    // Check description text
    expect(screen.getByText(/thoughts, ideas, and insights/i)).toBeInTheDocument();
  });
  
  it('renders all blog posts', () => {
    render(<Blog />);
    
    // Check if all blog post titles are rendered
    expect(screen.getByText('Getting Started with Next.js and TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Introduction to Machine Learning Concepts')).toBeInTheDocument();
    expect(screen.getByText('Building Responsive UIs with Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('The Future of Artificial Intelligence')).toBeInTheDocument();
    
    // Check if dates are rendered
    expect(screen.getByText('March 15, 2023')).toBeInTheDocument();
    expect(screen.getByText('February 28, 2023')).toBeInTheDocument();
    expect(screen.getByText('January 20, 2023')).toBeInTheDocument();
    expect(screen.getByText('December 10, 2022')).toBeInTheDocument();
  });
  
  it('renders "Read more" links with correct hrefs', () => {
    render(<Blog />);
    
    // Check if all links are rendered with correct hrefs (using getAllBy since there are title and read more links)
    expect(screen.getAllByTestId('link-to-/blog/getting-started-nextjs-typescript')).toHaveLength(2);
    expect(screen.getAllByTestId('link-to-/blog/intro-machine-learning-concepts')).toHaveLength(2);
    expect(screen.getAllByTestId('link-to-/blog/responsive-ui-tailwind-css')).toHaveLength(2);
    expect(screen.getAllByTestId('link-to-/blog/future-of-ai')).toHaveLength(2);
    
    // Check text of read more links
    const readMoreLinks = screen.getAllByText(/read more →/i);
    expect(readMoreLinks).toHaveLength(4);
  });
}); 