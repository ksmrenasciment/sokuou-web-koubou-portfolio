import { CROWDWORKS_PROFILE_URL } from '@/lib/config';

export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-base-charcoal">お問い合わせ</h2>
      <p className="mt-4 text-base-charcoal">
        ホームページ制作のご相談は、クラウドワークスよりお気軽にご連絡ください。
      </p>
      <a
        href={CROWDWORKS_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded bg-accent-indigo px-6 py-3 font-semibold text-base-white"
      >
        クラウドワークスのプロフィールを見る
      </a>
    </section>
  );
}
