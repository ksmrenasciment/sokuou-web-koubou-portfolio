import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
