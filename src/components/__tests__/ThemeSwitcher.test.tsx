import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeSwitcher from '../ThemeSwitcher';

// Mock the console.log to prevent noise in test output
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  jest.spyOn(console, 'log').mockRestore();
});

describe('ThemeSwitcher', () => {
  // Setup mocks for each test
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(),
      removeItem: jest.fn()
    };
    
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });

    // Mock matchMedia - required for system preference detection
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(query => ({
        matches: false, // Default to light mode system preference
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
      writable: true,
    });

    // Mock classList methods as jest.fn()
    const mockAdd = jest.fn();
    const mockRemove = jest.fn();
    const mockContains = jest.fn(() => false);

    // Apply mocks to documentElement.classList
    Object.defineProperty(document.documentElement, 'classList', {
      value: {
        add: mockAdd,
        remove: mockRemove,
        contains: mockContains
      },
      writable: true
    });

    // Mock document.body.style
    Object.defineProperty(document.body.style, 'backgroundColor', {
      value: '',
      writable: true
    });

    Object.defineProperty(document.body.style, 'color', {
      value: '',
      writable: true
    });
  });

  it('renders correctly with no saved preference', () => {
    render(<ThemeSwitcher />);
    
    // Default to light mode when no preference is saved and system is light
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark');
    
    // Check button exists
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(button).toBeInTheDocument();
    
    // Should have the moon icon (light mode)
    expect(button.querySelector('svg')).toBeInTheDocument();
    expect(button.innerHTML).toContain('17.293 13.293A8 8 0 016.707 2.707');
  });

  it('toggles to dark mode when clicked', () => {
    render(<ThemeSwitcher />);
    
    // Get the button
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    
    // Initial render setup complete, clear mocks to track new calls
    jest.clearAllMocks();
    
    // Click to toggle to dark mode
    fireEvent.click(button);
    
    // Should add dark class and store preference
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
  });

  it('toggles back to light mode from dark mode', () => {
    // Mock initial state as dark mode
    window.localStorage.getItem = jest.fn().mockReturnValue('true');
    document.documentElement.classList.contains = jest.fn().mockReturnValue(true);
    
    const { rerender } = render(<ThemeSwitcher />);
    
    // Get the button
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    
    // Clear mocks to only track the click
    jest.clearAllMocks();
    
    // Click to toggle back to light mode
    fireEvent.click(button);
    
    // Should remove dark class and store false in localStorage
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
  });
  
  it('respects system preference for dark mode', () => {
    // Mock system preference for dark mode
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(query => ({
        matches: true, // System prefers dark mode
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
      writable: true,
    });
    
    render(<ThemeSwitcher />);
    
    // Should detect system preference and add dark class
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    
    // Button should show sun icon (dark mode active)
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(button.innerHTML).toContain('clip-rule="evenodd"');
  });
}); 