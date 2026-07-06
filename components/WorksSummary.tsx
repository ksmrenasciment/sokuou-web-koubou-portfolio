import { getAllWorks } from '@/lib/works';
import WorkCard from './WorkCard';

export default function WorksSummary() {
  const works = getAllWorks();

  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-base-charcoal">制作実績</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
