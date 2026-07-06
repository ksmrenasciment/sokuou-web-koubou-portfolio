import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('renders the full headline across three deliberate lines with no content lost', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe(
      '小さな会社・お店のホームページを、AIの力でスピーディーに。'
    );
    expect(screen.getByText('小さな会社・お店の')).toBeInTheDocument();
    expect(screen.getByText('ホームページを、')).toBeInTheDocument();
    expect(screen.getByText('AIの力でスピーディーに。')).toBeInTheDocument();
  });
});
