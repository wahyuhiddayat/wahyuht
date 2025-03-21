import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../loading';

describe('Loading Component', () => {
  it('renders the loading spinner', () => {
    render(<Loading />);
    
    // Check for loading spinner animation
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin');
  });
}); 