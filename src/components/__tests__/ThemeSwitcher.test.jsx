import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from '../ThemeSwitcher';

// Mock the console.log to prevent noise in test output
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  console.log.mockRestore();
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

  it('renders correctly in light mode by default', () => {
    render(<ThemeSwitcher />);
    
    // Should always initialize in light mode and clear any previous settings
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark');
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('darkMode');
    
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
    
    // Should update style
    expect(document.body.style.backgroundColor).toBe('rgb(10, 10, 10)');
    expect(document.body.style.color).toBe('rgb(255, 255, 255)');
  });

  it('toggles back to light mode from dark mode', () => {
    const { rerender } = render(<ThemeSwitcher />);
    
    // Get the button
    const button = screen.getByRole('button', { name: /toggle dark mode/i });

    // First update component state to be in dark mode
    fireEvent.click(button);
    
    // Mock that we're now in dark mode (for the component's internal state check)
    const { contains } = document.documentElement.classList;
    contains.mockReturnValue(true);
    
    // Clear mocks to only track the second click
    jest.clearAllMocks();
    
    // Click again to toggle back to light mode
    fireEvent.click(button);
    
    // Should remove dark class and store false in localStorage
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
    
    // Should update style for light mode
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(document.body.style.color).toBe('rgb(0, 0, 0)');
  });
}); 