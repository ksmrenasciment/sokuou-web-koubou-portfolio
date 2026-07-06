import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-base-gray">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-base-charcoal">
          即応Web工房
        </Link>
        <nav className="flex gap-6 text-sm text-base-charcoal">
          <Link href="/#about">プロフィール</Link>
          <Link href="/#works">制作実績</Link>
          <Link href="/#contact">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}
