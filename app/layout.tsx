import type { Metadata } from 'next';
import { Shippori_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['500', '600', '800'],
  variable: '--font-display',
});

const body = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: '即応Web工房',
  description: 'ホームページ制作の受託ポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
