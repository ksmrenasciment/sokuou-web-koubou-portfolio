import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line-hairline bg-base-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold text-base-charcoal">
          即応Web工房
        </Link>
        <nav className="flex gap-6 text-sm text-base-charcoal">
          <Link href="/#about" className="transition hover:text-accent-indigo">
            プロフィール
          </Link>
          <Link href="/#works" className="transition hover:text-accent-indigo">
            制作実績
          </Link>
          <Link href="/#contact" className="transition hover:text-accent-indigo">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
