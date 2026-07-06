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
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-base-charcoal">強み</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {strengths.map((strength) => (
          <div key={strength.title}>
            <h3 className="font-semibold text-accent-indigo">{strength.title}</h3>
            <p className="mt-2 text-sm text-base-charcoal">{strength.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
