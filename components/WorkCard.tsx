import Link from 'next/link';
import type { Work } from '@/lib/works';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block border border-line-hairline bg-base-white p-6 transition hover:-translate-y-0.5 hover:border-accent-indigo hover:shadow-[0_8px_24px_-12px_rgba(47,62,99,0.35)]"
    >
      <p className="inline-block border border-line-hairline px-2 py-0.5 font-mono text-[11px] tracking-wide text-accent-indigo">
        {work.category}
      </p>
      <h3 className="mt-4 text-balance font-display text-lg font-semibold text-base-charcoal">
        {work.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-base-charcoal">{work.summary}</p>
      <p className="mt-4 font-mono text-xs text-accent-indigo opacity-0 transition-opacity group-hover:opacity-100">
        詳しく見る →
      </p>
    </Link>
  );
}
