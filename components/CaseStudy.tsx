import type { Work } from '@/lib/works';

export default function CaseStudy({ work }: { work: Work }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="rounded bg-base-gray px-4 py-2 text-sm text-base-charcoal">
        ※本事例は実力を示すための架空の制作事例です。実在の企業・団体とは関係ありません。
      </p>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-accent-indigo">
        {work.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-base-charcoal">{work.title}</h1>
      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-base-charcoal sm:grid-cols-3">
        <div>
          <dt className="font-semibold">クライアント</dt>
          <dd>{work.client}</dd>
        </div>
        <div>
          <dt className="font-semibold">制作期間</dt>
          <dd>{work.duration}</dd>
        </div>
        <div>
          <dt className="font-semibold">体制</dt>
          <dd>{work.team}</dd>
        </div>
        <div>
          <dt className="font-semibold">使用技術</dt>
          <dd>{work.techStack.join(' / ')}</dd>
        </div>
      </dl>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-base-charcoal">課題</h2>
        <p className="mt-3 leading-relaxed text-base-charcoal">{work.challenge}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-base-charcoal">対応内容</h2>
        <p className="mt-3 leading-relaxed text-base-charcoal">{work.solution}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-base-charcoal">実現できたこと</h2>
        <p className="mt-3 leading-relaxed text-base-charcoal">{work.result}</p>
      </section>
    </article>
  );
}
