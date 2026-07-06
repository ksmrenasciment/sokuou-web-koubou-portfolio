import { describe, it, expect } from 'vitest';
import { getAllWorks, getWorkBySlug } from './works';

describe('works data layer', () => {
  it('returns exactly 5 works', () => {
    expect(getAllWorks()).toHaveLength(5);
  });

  it('returns a work when the slug exists', () => {
    const work = getWorkBySlug('day-service-corporate');
    expect(work).toBeDefined();
    expect(work?.title).toBe('地域密着デイサービスのコーポレートサイト');
  });

  it('returns undefined when the slug does not exist', () => {
    expect(getWorkBySlug('does-not-exist')).toBeUndefined();
  });

  it('every work is flagged as fictional', () => {
    for (const work of getAllWorks()) {
      expect(work.isFictional).toBe(true);
    }
  });

  it('the cafe case study discloses that WordPress is a static reproduction', () => {
    const work = getWorkBySlug('cafe-wordpress');
    expect(work?.solution).toMatch(/WordPress/);
    expect(work?.solution).toMatch(/静的/);
  });
});
