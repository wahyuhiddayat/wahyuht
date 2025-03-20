import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

// Mock ThemeSwitcher component
jest.mock('../ThemeSwitcher', () => {
  return function MockThemeSwitcher() {
    return <div data-testid="theme-switcher">Theme Switcher</div>;
  };
});

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />);
    
    // Check that all nav links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme switcher', () => {
    render(<Navbar />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
}); 