import Link from 'next/link';
import type { Work } from '@/lib/works';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="block rounded-lg border border-base-gray p-6 transition hover:border-accent-indigo"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-indigo">
        {work.category}
      </p>
      <h3 className="mt-2 font-semibold text-base-charcoal">{work.title}</h3>
      <p className="mt-2 text-sm text-base-charcoal">{work.summary}</p>
    </Link>
  );
}
