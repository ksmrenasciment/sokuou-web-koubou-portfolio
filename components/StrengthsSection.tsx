const strengths = [
  {
    title: '対応の速さ・コミュニケーション',
    description: '要望のヒアリングから返信まで、スピード感を持って対応します。',
  },
  {
    title: 'AI活用による高速・低コスト制作',
    description: 'AIを制作フローに組み込むことで、短納期かつ低コストでの制作を実現します。',
  },
  {
    title: '幅広い技術対応（静的サイト〜WordPress）',
    description: '静的サイトからWordPressまで、案件に合わせた技術選定に対応します。',
  },
];

export default function StrengthsSection() {
  return (
    <section className="bg-surface-tint">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent-indigo">
          Strengths
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-base-charcoal">強み</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:divide-x sm:divide-line-hairline">
          {strengths.map((strength) => (
            <div key={strength.title} className="sm:px-8 sm:first:pl-0">
              <h3 className="text-balance font-display text-lg font-semibold text-accent-indigo">
                {strength.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-base-charcoal">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
