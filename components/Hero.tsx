export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line-hairline bg-base-white">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-surface-tint sm:block"
        style={{ clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 0% 100%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent-indigo">
          Web Production
        </p>
        <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.45] text-base-charcoal sm:text-5xl">
          <span className="block">小さな会社・お店の</span>
          <span className="block">ホームページを、</span>
          <span className="block text-accent-indigo">AIの力でスピーディーに。</span>
        </h1>
        <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-base-charcoal">
          コーポレートサイトからランディングページまで、1人で企画・デザイン・実装まで対応します。
        </p>
      </div>
    </section>
  );
}
