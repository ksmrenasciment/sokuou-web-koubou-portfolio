import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StrengthsSection from '@/components/StrengthsSection';

describe('StrengthsSection', () => {
  it('renders all three strengths', () => {
    render(<StrengthsSection />);
    expect(screen.getByText('対応の速さ・コミュニケーション')).toBeInTheDocument();
    expect(screen.getByText('AI活用による高速・低コスト制作')).toBeInTheDocument();
    expect(screen.getByText('幅広い技術対応（静的サイト〜WordPress）')).toBeInTheDocument();
  });
});
