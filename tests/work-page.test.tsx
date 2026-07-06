import { describe, it, expect } from 'vitest';
import { generateStaticParams } from '@/app/works/[slug]/page';
import { getAllWorks } from '@/lib/works';

describe('generateStaticParams', () => {
  it('returns a param entry for every work slug', () => {
    const params = generateStaticParams();
    const expectedSlugs = getAllWorks().map((work) => work.slug);
    expect(params.map((p) => p.slug).sort()).toEqual(expectedSlugs.sort());
  });
});
