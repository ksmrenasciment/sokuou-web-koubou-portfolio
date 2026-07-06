import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudy from '@/components/CaseStudy';
import { getWorkBySlug } from '@/lib/works';

describe('CaseStudy', () => {
  it('renders the fictional-case disclaimer', () => {
    const work = getWorkBySlug('day-service-corporate')!;
    render(<CaseStudy work={work} />);
    expect(screen.getByText(/架空の制作事例/)).toBeInTheDocument();
  });

  it('renders challenge, solution, and result content', () => {
    const work = getWorkBySlug('day-service-corporate')!;
    render(<CaseStudy work={work} />);
    expect(screen.getByText(work.challenge)).toBeInTheDocument();
    expect(screen.getByText(work.solution)).toBeInTheDocument();
    expect(screen.getByText(work.result)).toBeInTheDocument();
  });

  it('discloses the WordPress reproduction for the cafe case study', () => {
    const work = getWorkBySlug('cafe-wordpress')!;
    render(<CaseStudy work={work} />);
    expect(screen.getByText(work.solution)).toBeInTheDocument();
  });
});
