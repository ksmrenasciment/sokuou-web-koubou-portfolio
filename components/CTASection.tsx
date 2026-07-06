import { CROWDWORKS_PROFILE_URL } from '@/lib/config';

export default function CTASection() {
  return (
    <section id="contact" className="bg-base-charcoal">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent-indigo">
          Contact
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-base-white">
          お問い合わせ
        </h2>
        <p className="mt-4 text-base-white/80">
          ホームページ制作のご相談は、クラウドワークスよりお気軽にご連絡ください。
        </p>
        <a
          href={CROWDWORKS_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-accent-indigo bg-accent-indigo px-8 py-3 font-semibold text-base-white transition hover:bg-transparent"
        >
          クラウドワークスのプロフィールを見る
        </a>
      </div>
    </section>
  );
}
