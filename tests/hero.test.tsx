import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(
      screen.getByText('小さな会社・お店のホームページを、AIの力でスピーディーに。')
    ).toBeInTheDocument();
  });
});
