import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
