import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders the copyright notice with the brand name', () => {
    render(<Footer />);
    expect(screen.getByText(/即応Web工房/)).toBeInTheDocument();
  });
});
