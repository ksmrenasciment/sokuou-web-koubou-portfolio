import type { Work } from '@/lib/works';
import MockupPreview from './MockupPreview';

export default function CaseStudy({ work }: { work: Work }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex items-start gap-3 border border-line-hairline bg-surface-tint px-4 py-3">
        <span className="mt-0.5 shrink-0 border border-accent-indigo px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-accent-indigo">
          Sample
        </span>
        <p className="text-sm leading-relaxed text-base-charcoal">
          ※本事例は実力を示すための架空の制作事例です。実在の企業・団体とは関係ありません。
        </p>
      </div>

      <p className="mt-10 font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent-indigo">
        {work.category}
      </p>
      <h1 className="mt-3 text-balance font-display text-3xl font-semibold text-base-charcoal">
        {work.title}
      </h1>

      <div className="mt-8">
        <MockupPreview slug={work.slug} title={work.title} />
      </div>

      <dl className="mt-8 grid grid-cols-2 border border-line-hairline sm:grid-cols-4">
        <div className="border-b border-r border-line-hairline p-4 sm:border-b-0">
          <dt className="font-mono text-[11px] uppercase tracking-wide text-accent-indigo">
            クライアント
          </dt>
          <dd className="mt-1 text-sm text-base-charcoal">{work.client}</dd>
        </div>
        <div className="border-b border-line-hairline p-4 sm:border-b-0 sm:border-r">
          <dt className="font-mono text-[11px] uppercase tracking-wide text-accent-indigo">
            制作期間
          </dt>
          <dd className="mt-1 text-sm text-base-charcoal">{work.duration}</dd>
        </div>
        <div className="border-r border-line-hairline p-4">
          <dt className="font-mono text-[11px] uppercase tracking-wide text-accent-indigo">
            体制
          </dt>
          <dd className="mt-1 text-sm text-base-charcoal">{work.team}</dd>
        </div>
        <div className="p-4">
          <dt className="font-mono text-[11px] uppercase tracking-wide text-accent-indigo">
            使用技術
          </dt>
          <dd className="mt-1 text-sm text-base-charcoal">{work.techStack.join(' / ')}</dd>
        </div>
      </dl>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-base-charcoal">課題</h2>
        <p className="mt-3 leading-loose text-base-charcoal">{work.challenge}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-base-charcoal">対応内容</h2>
        <p className="mt-3 leading-loose text-base-charcoal">{work.solution}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-base-charcoal">実現できたこと</h2>
        <p className="mt-3 leading-loose text-base-charcoal">{work.result}</p>
      </section>
    </article>
  );
}
