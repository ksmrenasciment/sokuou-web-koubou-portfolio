import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from '@/components/CTASection';
import { CROWDWORKS_PROFILE_URL } from '@/lib/config';

describe('CTASection', () => {
  it('renders a link to the configured CrowdWorks profile URL with correct attributes', () => {
    render(<CTASection />);
    const link = screen.getByRole('link', { name: 'クラウドワークスのプロフィールを見る' });
    expect(link).toHaveAttribute('href', CROWDWORKS_PROFILE_URL);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has an id for header navigation to link to', () => {
    const { container } = render(<CTASection />);
    expect(container.querySelector('#contact')).not.toBeNull();
  });
});
