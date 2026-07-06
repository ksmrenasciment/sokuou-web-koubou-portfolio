import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutSection from '@/components/AboutSection';

describe('AboutSection', () => {
  it('renders the self-introduction mentioning IT, Recruit, and welfare experience', () => {
    render(<AboutSection />);
    expect(screen.getByText(/IT企業/)).toBeInTheDocument();
    expect(screen.getByText(/リクルート/)).toBeInTheDocument();
    expect(screen.getByText(/福祉企業/)).toBeInTheDocument();
  });

  it('has an id for header navigation to link to', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector('#about')).not.toBeNull();
  });
});
