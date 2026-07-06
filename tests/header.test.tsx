import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />);
    expect(screen.getByText('即応Web工房')).toBeInTheDocument();
  });

  it('renders navigation links to key sections', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'プロフィール' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: '制作実績' })).toHaveAttribute('href', '/#works');
    expect(screen.getByRole('link', { name: 'お問い合わせ' })).toHaveAttribute('href', '/#contact');
  });
});
