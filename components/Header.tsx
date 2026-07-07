'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '/#about', label: 'プロフィール' },
  { href: '/#works', label: '制作実績' },
  { href: '/#contact', label: 'お問い合わせ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-line-hairline bg-base-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold text-base-charcoal">
          即応Web工房
        </Link>
        <nav className="hidden gap-6 text-sm text-base-charcoal sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-accent-indigo"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          className="text-sm text-base-charcoal sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '閉じる' : 'メニュー'}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line-hairline px-6 py-4 text-sm text-base-charcoal sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 transition hover:text-accent-indigo"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
