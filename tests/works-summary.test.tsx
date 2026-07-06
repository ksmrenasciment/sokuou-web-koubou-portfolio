import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WorksSummary from '@/components/WorksSummary';
import { getAllWorks } from '@/lib/works';

describe('WorksSummary', () => {
  it('renders a link for every work pointing to its case study page', () => {
    render(<WorksSummary />);
    const works = getAllWorks();
    for (const work of works) {
      const link = screen.getByRole('link', { name: new RegExp(work.title) });
      expect(link).toHaveAttribute('href', `/works/${work.slug}`);
    }
  });

  it('has an id for header navigation to link to', () => {
    const { container } = render(<WorksSummary />);
    expect(container.querySelector('#works')).not.toBeNull();
  });
});
