import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MockupPreview from '@/components/MockupPreview';

describe('MockupPreview', () => {
  it('renders an iframe pointing at the mockup route for the given slug', () => {
    render(<MockupPreview slug="cafe-wordpress" title="個人経営カフェのコーポレートサイト" />);
    const iframe = screen.getByTitle('個人経営カフェのコーポレートサイトのモックアッププレビュー');
    expect(iframe).toHaveAttribute('src', '/mockups/cafe-wordpress/');
  });
});
