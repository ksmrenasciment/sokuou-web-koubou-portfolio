import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('reveals a mobile nav menu when the toggle button is clicked', () => {
    render(<Header />);
    const toggle = screen.getByRole('button', { name: 'メニューを開く' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByRole('link', { name: 'プロフィール' })).toHaveLength(2);
  });
});
