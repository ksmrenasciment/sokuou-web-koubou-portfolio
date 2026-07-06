import { getAllWorks } from '@/lib/works';
import WorkCard from './WorkCard';

export default function WorksSummary() {
  const works = getAllWorks();

  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent-indigo">
        Works
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-base-charcoal">
        制作実績
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
