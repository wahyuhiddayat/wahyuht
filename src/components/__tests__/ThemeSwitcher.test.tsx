import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeSwitcher from '../ThemeSwitcher';

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
};

const mockMatchMedia = {
  matches: false,
  media: '',
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn()
};

const mockClassList = {
  add: jest.fn(),
  remove: jest.fn(),
  contains: jest.fn()
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
    writable: true
  });
  
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => mockMatchMedia),
    writable: true
  });
  
  Object.defineProperty(document.documentElement, 'classList', {
    value: mockClassList,
    writable: true
  });
  
  global.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('ThemeSwitcher', () => {
  it('shows loading skeleton initially', () => {
    render(<ThemeSwitcher />);
    
    const skeleton = document.querySelector('.p-1\\.5.rounded-full.bg-gray-200');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders button after loading with light mode default', async () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    mockMatchMedia.matches = false;
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
    });
  });

  it('loads saved dark mode preference', async () => {
    mockLocalStorage.getItem.mockReturnValue('true');
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
    });
  });

  it('loads saved light mode preference', async () => {
    mockLocalStorage.getItem.mockReturnValue('false');
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
    });
  });

  it('respects system dark mode preference when no saved preference', async () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    mockMatchMedia.matches = true;
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
    });
  });

  it('toggles from light to dark mode', async () => {
    mockLocalStorage.getItem.mockReturnValue('false');
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(mockClassList.add).toHaveBeenCalledWith('dark');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    });
  });

  it('toggles from dark to light mode', async () => {
    mockLocalStorage.getItem.mockReturnValue('true');
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(mockClassList.remove).toHaveBeenCalledWith('dark');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
    });
  });

  it('handles localStorage errors gracefully on load', async () => {
    mockLocalStorage.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });
    mockMatchMedia.matches = true;
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      expect(console.warn).toHaveBeenCalledWith('Failed to access localStorage, using system preference');
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
    });
  });

  it('handles localStorage errors gracefully on save', async () => {
    mockLocalStorage.getItem.mockReturnValue('false');
    mockLocalStorage.setItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(console.warn).toHaveBeenCalledWith('Failed to save theme preference to localStorage');
    });
  });

  it('listens for system theme changes', async () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    
    render(<ThemeSwitcher />);
    
    await waitFor(() => {
      expect(mockMatchMedia.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
    });
  });

  it('cleans up event listener on unmount', async () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    
    const { unmount } = render(<ThemeSwitcher />);
    
    await waitFor(() => {
      unmount();
      expect(mockMatchMedia.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
    });
  });
}); 