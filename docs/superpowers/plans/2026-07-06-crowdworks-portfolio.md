# クラウドワークス営業用ポートフォリオサイト Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** クラウドワークスでのホームページ制作受託営業に使う、実績5件（架空案件）を掲載したポートフォリオサイトを構築する。

**Architecture:** Next.js（App Router、静的書き出し）+ Tailwind CSS の1リポジトリ構成。トップページ（自己紹介・強み・実績サマリー・CTA）と、5件のケーススタディ詳細ページ（`/works/[slug]`）から成るハイブリッド構成。データはすべて `lib/works.ts` の1ファイルに集約し、ページ・カード双方から参照する。

**Tech Stack:** Next.js 14（TypeScript, App Router, `output: 'export'`）, Tailwind CSS 3, Vitest + Testing Library（コンポーネント・データ層のテスト）

## Global Constraints

- ホスティング前提は Vercel の無料サブドメイン。`next.config.mjs` は `output: 'export'` を指定し、サーバー機能（API Routes, 画像最適化サーバー等）は使用しない
- カラートークン: ベース `#FFFFFF` / `#F4F4F4` / `#1A1A1A`、アクセント `#2F3E63`（CTA・リンク・強調箇所のみに使用）
- 実在人物の顔写真・実在企業のロゴは使用しない
- 5件のケーススタディはすべて架空案件であり、各ケーススタディページに「架空の制作事例である」旨の注記を必ず表示する
- ダミー案件#2（カフェ）はWordPressを実際には稼働させず、静的HTML/CSSでの再現であることをページ本文で明記する
- ダミー案件は福祉1件・飲食1件・LP1件・教育1件・建設1件の5業種に分散させ、特定業界への特化に見えないようにする
- Node.js 18以上を前提とする

---

## Task 1: プロジェクト scaffold（Next.js + Tailwind + Vitest）

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `next.config.mjs`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx`

**Interfaces:**
- Consumes: なし（最初のタスク）
- Produces: Tailwindカラートークン `base.white` (`#FFFFFF`) / `base.gray` (`#F4F4F4`) / `base.charcoal` (`#1A1A1A`) / `accent.indigo` (`#2F3E63`)。以降のタスクはこれらのクラス名（例: `text-base-charcoal`, `bg-accent-indigo`）を使用する。

- [ ] **Step 1: package.json を作成**

```json
{
  "name": "sokuou-web-koubou-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run"
  },
  "dependencies": {
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/react": "^15.0.7",
    "@types/node": "^20.14.9",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "jsdom": "^24.1.0",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.3",
    "vitest": "^1.6.0"
  }
}
```

- [ ] **Step 2: tsconfig.json を作成**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: next-env.d.ts を作成**

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
```

- [ ] **Step 4: next.config.mjs を作成**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

- [ ] **Step 5: tailwind.config.ts を作成**

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          gray: '#F4F4F4',
          charcoal: '#1A1A1A',
        },
        accent: {
          indigo: '#2F3E63',
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 6: postcss.config.mjs を作成**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 7: vitest.config.ts を作成**

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

- [ ] **Step 8: tests/setup.ts を作成**

```ts
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 9: app/globals.css を作成**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  color: #1a1a1a;
  background-color: #ffffff;
}
```

- [ ] **Step 10: app/layout.tsx を作成**

```tsx
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
```

- [ ] **Step 11: app/page.tsx を作成（仮実装）**

```tsx
export default function HomePage() {
  return <main>Coming soon</main>;
}
```

- [ ] **Step 12: 依存関係をインストール**

Run: `npm install`
Expected: エラーなく完了する

- [ ] **Step 13: 静的書き出しビルドを実行して検証**

Run: `npm run build`
Expected: ビルドが成功し、`out/index.html` が生成される

- [ ] **Step 14: Commit**

```bash
git add package.json tsconfig.json next-env.d.ts next.config.mjs tailwind.config.ts postcss.config.mjs vitest.config.ts tests/setup.ts app/layout.tsx app/globals.css app/page.tsx package-lock.json
git commit -m "chore: scaffold Next.js + Tailwind + Vitest project"
```

---

## Task 2: ダミー案件データ層（lib/works.ts）

**Files:**
- Create: `lib/works.ts`
- Test: `lib/works.test.ts`

**Interfaces:**
- Consumes: なし
- Produces: `export type Work = { slug: string; title: string; client: string; category: string; summary: string; duration: string; team: string; techStack: string[]; challenge: string; solution: string; result: string; isFictional: true }`、`export function getAllWorks(): Work[]`、`export function getWorkBySlug(slug: string): Work | undefined`。以降のタスク（Task 5, 6, 7）はこれらの型・関数名をそのまま使用する。

- [ ] **Step 1: 失敗するテストを書く**

```ts
// lib/works.test.ts
import { describe, it, expect } from 'vitest';
import { getAllWorks, getWorkBySlug } from './works';

describe('works data layer', () => {
  it('returns exactly 5 works', () => {
    expect(getAllWorks()).toHaveLength(5);
  });

  it('returns a work when the slug exists', () => {
    const work = getWorkBySlug('day-service-corporate');
    expect(work).toBeDefined();
    expect(work?.title).toBe('地域密着デイサービスのコーポレートサイト');
  });

  it('returns undefined when the slug does not exist', () => {
    expect(getWorkBySlug('does-not-exist')).toBeUndefined();
  });

  it('every work is flagged as fictional', () => {
    for (const work of getAllWorks()) {
      expect(work.isFictional).toBe(true);
    }
  });

  it('the cafe case study discloses that WordPress is a static reproduction', () => {
    const work = getWorkBySlug('cafe-wordpress');
    expect(work?.solution).toMatch(/WordPress/);
    expect(work?.solution).toMatch(/静的/);
  });
});
```

- [ ] **Step 2: テストを実行し、失敗することを確認**

Run: `npx vitest run lib/works.test.ts`
Expected: FAIL（`./works` module not found）

- [ ] **Step 3: lib/works.ts を実装**

```ts
export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  duration: string;
  team: string;
  techStack: string[];
  challenge: string;
  solution: string;
  result: string;
  isFictional: true;
};

const works: Work[] = [
  {
    slug: 'day-service-corporate',
    title: '地域密着デイサービスのコーポレートサイト',
    client: 'デイサービスさくら（架空）',
    category: '福祉・コーポレートサイト',
    summary: '地域密着デイサービスの、家族にもわかりやすいコーポレートサイト',
    duration: '制作期間：2週間',
    team: '1名（デザイン・コーディング・進行管理を一貫して担当）',
    techStack: ['Next.js', 'Tailwind CSS'],
    challenge:
      '新規開設のデイサービス様より、地域の家族層に向けて安心感を伝えられるホームページが欲しいというご相談を想定。既存の資料は文字中心で、施設の雰囲気が伝わりにくい状態でした。',
    solution:
      '福祉業界の現場を知る立場から、利用者様やご家族が知りたい情報（1日の過ごし方、スタッフ体制、送迎エリア）を整理し、写真とアイコンを使ったわかりやすい導線に再構成。専門用語を避け、平易な言葉で説明する構成にしました。',
    result:
      '資料請求ページまでを3クリック以内で到達できる導線に整理し、トップページと各ページの両方に問い合わせ導線を配置しました。',
    isFictional: true,
  },
  {
    slug: 'cafe-wordpress',
    title: '個人経営カフェのコーポレートサイト',
    client: '焙煎珈琲 いろは（架空）',
    category: '飲食・コーポレートサイト（WordPress想定）',
    summary: 'オーナー自身で更新できる、個人経営カフェのコーポレートサイト',
    duration: '制作期間：2週間',
    team: '1名（デザイン・コーディング・進行管理を一貫して担当）',
    techStack: ['HTML / CSS（WordPressテーマ想定の静的再現）'],
    challenge:
      'オーナー自身でメニューや営業時間を更新したいという個人経営カフェを想定。更新のしやすさと、来店前に雰囲気が伝わるビジュアル重視のデザインが必要でした。',
    solution:
      'WordPressでの納品を想定し、カスタム投稿タイプでメニューを管理できる構成を設計。本ポートフォリオでは見た目を静的HTML/CSSで再現して掲載しており、実際にWordPressは稼働していません。',
    result:
      'オーナー自身で写真とメニューを更新できる運用設計により、更新の都度制作者に依頼するコストを抑えられる構成にしました。',
    isFictional: true,
  },
  {
    slug: 'seminar-landing-page',
    title: '新商品・セミナー集客のランディングページ',
    client: '株式会社ネクストセミナー（架空）',
    category: 'ランディングページ',
    summary: 'セミナー集客に特化した、申込み導線重視のランディングページ',
    duration: '制作期間：1週間',
    team: '1名（デザイン・コーディング・進行管理を一貫して担当）',
    techStack: ['Next.js', 'Tailwind CSS'],
    challenge: 'オンラインセミナーの集客のため、短期間で申込みにつながるランディングページが必要というご相談を想定。',
    solution:
      'AIを活用したコーディングにより制作期間を短縮し、ファーストビューで訴求ポイントが伝わる構成、申込みボタンを複数箇所に配置する設計にしました。',
    result: '画像を軽量化し、表示速度を意識した実装により、スマートフォンでもストレスなく閲覧できるページに仕上げました。',
    isFictional: true,
  },
  {
    slug: 'university-department',
    title: '小規模学部・学科紹介サイト',
    client: '桜丘大学 情報デザイン学部（架空）',
    category: '教育機関サイト',
    summary: '受験生に学びの魅力を伝える、学部紹介サイト',
    duration: '制作期間：3週間',
    team: '1名（デザイン・コーディング・進行管理を一貫して担当）',
    techStack: ['Next.js', 'Tailwind CSS'],
    challenge:
      '大学の一学部について、受験生に向けて学びの内容や特色を伝えるサイトが必要という想定。実際の大学公式サイトは規模が大きいため、学部単体の紹介に範囲を絞っています。',
    solution:
      'トップ・学部紹介・カリキュラム・アクセスの4ページ構成とし、教育機関にふさわしい落ち着いたデザイントーンで設計。情報量が多くても迷わないようにナビゲーションを整理しました。',
    result: '受験生と保護者、双方が知りたい情報に迷わずたどり着けるシンプルな構成を実現しました。',
    isFictional: true,
  },
  {
    slug: 'construction-company',
    title: '地場の建設会社のコーポレートサイト',
    client: '山田建設株式会社（架空）',
    category: '建設業・コーポレートサイト',
    summary: '地域密着の建設会社に信頼感を伝えるコーポレートサイト',
    duration: '制作期間：2週間',
    team: '1名（デザイン・コーディング・進行管理を一貫して担当）',
    techStack: ['Next.js', 'Tailwind CSS'],
    challenge: '地域密着で施工を行う建設会社を想定。信頼感を伝えつつ、施工実績や採用情報も掲載したいというご相談。',
    solution:
      '施工実績・会社概要・採用情報を軸としたコーポレートサイト構成とし、信頼感を重視した配色・レイアウトで設計しました。',
    result: '問い合わせと採用応募、2つの導線を整理し、閲覧者の目的に応じてすぐアクセスできる構成にしました。',
    isFictional: true,
  },
];

export function getAllWorks(): Work[] {
  return works;
}

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
```

- [ ] **Step 4: テストを実行し、成功することを確認**

Run: `npx vitest run lib/works.test.ts`
Expected: PASS（5テストすべて成功）

- [ ] **Step 5: Commit**

```bash
git add lib/works.ts lib/works.test.ts
git commit -m "feat: add dummy case study data layer"
```

---

## Task 3: 共通レイアウト（Header / Footer）

**Files:**
- Create: `components/Header.tsx`
- Create: `components/Footer.tsx`
- Test: `tests/header.test.tsx`
- Test: `tests/footer.test.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: なし
- Produces: `<Header />`, `<Footer />`（props無し）。Task 4以降で `app/layout.tsx` から利用される。

- [ ] **Step 1: 失敗するテストを書く（Header）**

```tsx
// tests/header.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />);
    expect(screen.getByText('即応Web工房')).toBeInTheDocument();
  });

  it('renders navigation links to key sections', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'プロフィール' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: '制作実績' })).toHaveAttribute('href', '/#works');
    expect(screen.getByRole('link', { name: 'お問い合わせ' })).toHaveAttribute('href', '/#contact');
  });
});
```

- [ ] **Step 2: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/header.test.tsx`
Expected: FAIL（`@/components/Header` module not found）

- [ ] **Step 3: components/Header.tsx を実装**

```tsx
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
```

- [ ] **Step 4: テストを実行し、成功することを確認**

Run: `npx vitest run tests/header.test.tsx`
Expected: PASS

- [ ] **Step 5: 失敗するテストを書く（Footer）**

```tsx
// tests/footer.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders the copyright notice with the brand name', () => {
    render(<Footer />);
    expect(screen.getByText(/即応Web工房/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 6: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/footer.test.tsx`
Expected: FAIL（`@/components/Footer` module not found）

- [ ] **Step 7: components/Footer.tsx を実装**

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-base-gray py-8 text-center text-sm text-base-charcoal">
      <p>&copy; {new Date().getFullYear()} 即応Web工房</p>
    </footer>
  );
}
```

- [ ] **Step 8: テストを実行し、成功することを確認**

Run: `npx vitest run tests/footer.test.tsx`
Expected: PASS

- [ ] **Step 9: app/layout.tsx を更新して Header / Footer を組み込む**

```tsx
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
```

- [ ] **Step 10: Commit**

```bash
git add components/Header.tsx components/Footer.tsx tests/header.test.tsx tests/footer.test.tsx app/layout.tsx
git commit -m "feat: add site header and footer"
```

---

## Task 4: トップページ — Hero / About / Strengths

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/AboutSection.tsx`
- Create: `components/StrengthsSection.tsx`
- Test: `tests/hero.test.tsx`
- Test: `tests/about-section.test.tsx`
- Test: `tests/strengths-section.test.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: なし
- Produces: `<Hero />`, `<AboutSection />`, `<StrengthsSection />`（props無し）。Task 6で `app/page.tsx` に組み込む。

- [ ] **Step 1: 失敗するテストを書く（Hero）**

```tsx
// tests/hero.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(
      screen.getByText('小さな会社・お店のホームページを、AIの力でスピーディーに。')
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/hero.test.tsx`
Expected: FAIL（`@/components/Hero` module not found）

- [ ] **Step 3: components/Hero.tsx を実装**

```tsx
export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent-indigo">
        Web Production
      </p>
      <h1 className="mt-4 text-3xl font-bold text-base-charcoal sm:text-4xl">
        小さな会社・お店のホームページを、AIの力でスピーディーに。
      </h1>
      <p className="mt-6 text-base text-base-charcoal">
        コーポレートサイトからランディングページまで、1人で企画・デザイン・実装まで対応します。
      </p>
    </section>
  );
}
```

- [ ] **Step 4: テストを実行し、成功することを確認**

Run: `npx vitest run tests/hero.test.tsx`
Expected: PASS

- [ ] **Step 5: 失敗するテストを書く（AboutSection）**

```tsx
// tests/about-section.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutSection from '@/components/AboutSection';

describe('AboutSection', () => {
  it('renders the self-introduction mentioning IT, Recruit, and welfare experience', () => {
    render(<AboutSection />);
    expect(screen.getByText(/IT企業/)).toBeInTheDocument();
    expect(screen.getByText(/リクルート/)).toBeInTheDocument();
    expect(screen.getByText(/福祉企業/)).toBeInTheDocument();
  });

  it('has an id for header navigation to link to', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector('#about')).not.toBeNull();
  });
});
```

- [ ] **Step 6: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/about-section.test.tsx`
Expected: FAIL（`@/components/AboutSection` module not found）

- [ ] **Step 7: components/AboutSection.tsx を実装**

```tsx
export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold text-base-charcoal">プロフィール</h2>
      <p className="mt-6 leading-relaxed text-base-charcoal">
        社会人1年目にIT企業でキャリアをスタートし、その後リクルートで営業・企画を経験。現在は大手福祉企業に勤務しながら、AIを活用したホームページ制作を行っています。IT・営業・福祉と異なる業種を経験してきたからこそ、技術だけでなく事業側の視点に立った提案を強みにしています。
      </p>
    </section>
  );
}
```

- [ ] **Step 8: テストを実行し、成功することを確認**

Run: `npx vitest run tests/about-section.test.tsx`
Expected: PASS

- [ ] **Step 9: 失敗するテストを書く（StrengthsSection）**

```tsx
// tests/strengths-section.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StrengthsSection from '@/components/StrengthsSection';

describe('StrengthsSection', () => {
  it('renders all three strengths', () => {
    render(<StrengthsSection />);
    expect(screen.getByText('対応の速さ・コミュニケーション')).toBeInTheDocument();
    expect(screen.getByText('AI活用による高速・低コスト制作')).toBeInTheDocument();
    expect(screen.getByText('幅広い技術対応（静的サイト〜WordPress）')).toBeInTheDocument();
  });
});
```

- [ ] **Step 10: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/strengths-section.test.tsx`
Expected: FAIL（`@/components/StrengthsSection` module not found）

- [ ] **Step 11: components/StrengthsSection.tsx を実装**

```tsx
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
```

- [ ] **Step 12: テストを実行し、成功することを確認**

Run: `npx vitest run tests/strengths-section.test.tsx`
Expected: PASS

- [ ] **Step 13: app/page.tsx を更新して3セクションを組み込む**

```tsx
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StrengthsSection />
    </main>
  );
}
```

- [ ] **Step 14: Commit**

```bash
git add components/Hero.tsx components/AboutSection.tsx components/StrengthsSection.tsx tests/hero.test.tsx tests/about-section.test.tsx tests/strengths-section.test.tsx app/page.tsx
git commit -m "feat: add hero, about, and strengths sections to home page"
```

---

## Task 5: 実績サマリー（WorksSummary / WorkCard）

**Files:**
- Create: `components/WorkCard.tsx`
- Create: `components/WorksSummary.tsx`
- Test: `tests/works-summary.test.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Work` 型、`getAllWorks()`（Task 2の `lib/works.ts` から）
- Produces: `<WorkCard work={Work} />`、`<WorksSummary />`（props無し、内部で `getAllWorks()` を呼ぶ）

- [ ] **Step 1: 失敗するテストを書く**

```tsx
// tests/works-summary.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WorksSummary from '@/components/WorksSummary';
import { getAllWorks } from '@/lib/works';

describe('WorksSummary', () => {
  it('renders a link for every work pointing to its case study page', () => {
    render(<WorksSummary />);
    const works = getAllWorks();
    for (const work of works) {
      const link = screen.getByRole('link', { name: new RegExp(work.title) });
      expect(link).toHaveAttribute('href', `/works/${work.slug}`);
    }
  });

  it('has an id for header navigation to link to', () => {
    const { container } = render(<WorksSummary />);
    expect(container.querySelector('#works')).not.toBeNull();
  });
});
```

- [ ] **Step 2: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/works-summary.test.tsx`
Expected: FAIL（`@/components/WorksSummary` module not found）

- [ ] **Step 3: components/WorkCard.tsx を実装**

```tsx
import Link from 'next/link';
import type { Work } from '@/lib/works';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="block rounded-lg border border-base-gray p-6 transition hover:border-accent-indigo"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-indigo">
        {work.category}
      </p>
      <h3 className="mt-2 font-semibold text-base-charcoal">{work.title}</h3>
      <p className="mt-2 text-sm text-base-charcoal">{work.summary}</p>
    </Link>
  );
}
```

- [ ] **Step 4: components/WorksSummary.tsx を実装**

```tsx
import { getAllWorks } from '@/lib/works';
import WorkCard from './WorkCard';

export default function WorksSummary() {
  const works = getAllWorks();

  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-base-charcoal">制作実績</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: テストを実行し、成功することを確認**

Run: `npx vitest run tests/works-summary.test.tsx`
Expected: PASS

- [ ] **Step 6: app/page.tsx に WorksSummary を追加**

```tsx
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';
import WorksSummary from '@/components/WorksSummary';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StrengthsSection />
      <WorksSummary />
    </main>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add components/WorkCard.tsx components/WorksSummary.tsx tests/works-summary.test.tsx app/page.tsx
git commit -m "feat: add works summary section linking to case studies"
```

---

## Task 6: CTAセクション（クラウドワークス導線）

**Files:**
- Create: `lib/config.ts`
- Create: `components/CTASection.tsx`
- Test: `tests/cta-section.test.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: なし
- Produces: `export const CROWDWORKS_PROFILE_URL: string`（`lib/config.ts`）。`<CTASection />`（props無し）。

- [ ] **Step 1: 失敗するテストを書く**

```tsx
// tests/cta-section.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from '@/components/CTASection';
import { CROWDWORKS_PROFILE_URL } from '@/lib/config';

describe('CTASection', () => {
  it('renders a link to the configured CrowdWorks profile URL', () => {
    render(<CTASection />);
    const link = screen.getByRole('link', { name: 'クラウドワークスのプロフィールを見る' });
    expect(link).toHaveAttribute('href', CROWDWORKS_PROFILE_URL);
  });

  it('has an id for header navigation to link to', () => {
    const { container } = render(<CTASection />);
    expect(container.querySelector('#contact')).not.toBeNull();
  });
});
```

- [ ] **Step 2: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/cta-section.test.tsx`
Expected: FAIL（`@/components/CTASection` module not found）

- [ ] **Step 3: lib/config.ts を実装**

```ts
export const CROWDWORKS_PROFILE_URL = 'https://crowdworks.jp/public/employees/REPLACE_ME';
```

- [ ] **Step 4: components/CTASection.tsx を実装**

```tsx
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
        className="mt-6 inline-block rounded bg-accent-indigo px-6 py-3 font-semibold text-base-white"
      >
        クラウドワークスのプロフィールを見る
      </a>
    </section>
  );
}
```

- [ ] **Step 5: テストを実行し、成功することを確認**

Run: `npx vitest run tests/cta-section.test.tsx`
Expected: PASS

- [ ] **Step 6: app/page.tsx に CTASection を追加**

```tsx
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';
import WorksSummary from '@/components/WorksSummary';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StrengthsSection />
      <WorksSummary />
      <CTASection />
    </main>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add lib/config.ts components/CTASection.tsx tests/cta-section.test.tsx app/page.tsx
git commit -m "feat: add CTA section with CrowdWorks profile link"
```

---

## Task 7: ケーススタディ詳細ページ（/works/[slug]）

**Files:**
- Create: `components/CaseStudy.tsx`
- Create: `app/works/[slug]/page.tsx`
- Test: `tests/case-study.test.tsx`
- Test: `tests/work-page.test.tsx`

**Interfaces:**
- Consumes: `Work` 型、`getAllWorks()`、`getWorkBySlug()`（Task 2）
- Produces: `<CaseStudy work={Work} />`。`generateStaticParams(): { slug: string }[]`、`default function WorkPage({ params }: { params: { slug: string } })`（`app/works/[slug]/page.tsx`）

- [ ] **Step 1: 失敗するテストを書く（CaseStudy）**

```tsx
// tests/case-study.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudy from '@/components/CaseStudy';
import { getWorkBySlug } from '@/lib/works';

describe('CaseStudy', () => {
  it('renders the fictional-case disclaimer', () => {
    const work = getWorkBySlug('day-service-corporate')!;
    render(<CaseStudy work={work} />);
    expect(screen.getByText(/架空の制作事例/)).toBeInTheDocument();
  });

  it('renders challenge, solution, and result content', () => {
    const work = getWorkBySlug('day-service-corporate')!;
    render(<CaseStudy work={work} />);
    expect(screen.getByText(work.challenge)).toBeInTheDocument();
    expect(screen.getByText(work.solution)).toBeInTheDocument();
    expect(screen.getByText(work.result)).toBeInTheDocument();
  });

  it('discloses the WordPress reproduction for the cafe case study', () => {
    const work = getWorkBySlug('cafe-wordpress')!;
    render(<CaseStudy work={work} />);
    expect(screen.getByText(work.solution)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/case-study.test.tsx`
Expected: FAIL（`@/components/CaseStudy` module not found）

- [ ] **Step 3: components/CaseStudy.tsx を実装**

```tsx
import type { Work } from '@/lib/works';

export default function CaseStudy({ work }: { work: Work }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="rounded bg-base-gray px-4 py-2 text-sm text-base-charcoal">
        ※本事例は実力を示すための架空の制作事例です。実在の企業・団体とは関係ありません。
      </p>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-accent-indigo">
        {work.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-base-charcoal">{work.title}</h1>
      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-base-charcoal sm:grid-cols-3">
        <div>
          <dt className="font-semibold">クライアント</dt>
          <dd>{work.client}</dd>
        </div>
        <div>
          <dt className="font-semibold">制作期間</dt>
          <dd>{work.duration}</dd>
        </div>
        <div>
          <dt className="font-semibold">体制</dt>
          <dd>{work.team}</dd>
        </div>
        <div>
          <dt className="font-semibold">使用技術</dt>
          <dd>{work.techStack.join(' / ')}</dd>
        </div>
      </dl>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-base-charcoal">課題</h2>
        <p className="mt-3 leading-relaxed text-base-charcoal">{work.challenge}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-base-charcoal">対応内容</h2>
        <p className="mt-3 leading-relaxed text-base-charcoal">{work.solution}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-base-charcoal">実現できたこと</h2>
        <p className="mt-3 leading-relaxed text-base-charcoal">{work.result}</p>
      </section>
    </article>
  );
}
```

- [ ] **Step 4: テストを実行し、成功することを確認**

Run: `npx vitest run tests/case-study.test.tsx`
Expected: PASS

- [ ] **Step 5: 失敗するテストを書く（WorkPage の generateStaticParams）**

```tsx
// tests/work-page.test.tsx
import { describe, it, expect } from 'vitest';
import { generateStaticParams } from '@/app/works/[slug]/page';
import { getAllWorks } from '@/lib/works';

describe('generateStaticParams', () => {
  it('returns a param entry for every work slug', () => {
    const params = generateStaticParams();
    const expectedSlugs = getAllWorks().map((work) => work.slug);
    expect(params.map((p) => p.slug).sort()).toEqual(expectedSlugs.sort());
  });
});
```

- [ ] **Step 6: テストを実行し、失敗することを確認**

Run: `npx vitest run tests/work-page.test.tsx`
Expected: FAIL（`@/app/works/[slug]/page` module not found）

- [ ] **Step 7: app/works/[slug]/page.tsx を実装**

```tsx
import { notFound } from 'next/navigation';
import { getAllWorks, getWorkBySlug } from '@/lib/works';
import CaseStudy from '@/components/CaseStudy';

export function generateStaticParams() {
  return getAllWorks().map((work) => ({ slug: work.slug }));
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return <CaseStudy work={work} />;
}
```

- [ ] **Step 8: テストを実行し、成功することを確認**

Run: `npx vitest run tests/work-page.test.tsx`
Expected: PASS

- [ ] **Step 9: Commit**

```bash
git add components/CaseStudy.tsx app/works tests/case-study.test.tsx tests/work-page.test.tsx
git commit -m "feat: add case study detail pages for all dummy works"
```

---

## Task 8: 静的書き出し検証・README・公開前チェック

**Files:**
- Create: `README.md`

**Interfaces:**
- Consumes: 全タスクの成果物一式
- Produces: なし（最終検証・ドキュメントタスク）

- [ ] **Step 1: 全テストを実行**

Run: `npm test`
Expected: すべてのテストスイートが PASS する

- [ ] **Step 2: 静的書き出しビルドを実行**

Run: `npm run build`
Expected: ビルドが成功する

- [ ] **Step 3: 出力ファイルを確認**

Run:
```bash
ls out/index.html
ls out/works/day-service-corporate/index.html
ls out/works/cafe-wordpress/index.html
ls out/works/seminar-landing-page/index.html
ls out/works/university-department/index.html
ls out/works/construction-company/index.html
```
Expected: 6ファイルすべてが存在する

- [ ] **Step 4: README.md を作成**

```markdown
# 即応Web工房 ポートフォリオサイト

クラウドワークスでのホームページ制作受託営業に使うポートフォリオサイトです。掲載している5件の制作実績はすべて架空の案件です。

## ローカル開発

\`\`\`bash
npm install
npm run dev
\`\`\`

http://localhost:3000 で確認できます。

## テスト

\`\`\`bash
npm test
\`\`\`

## 静的書き出し

\`\`\`bash
npm run build
\`\`\`

`out/` ディレクトリに静的ファイルが生成されます。

## デプロイ（Vercel）

1. GitHubにこのリポジトリをプッシュする
2. Vercelにログインし、「Add New Project」からこのリポジトリを選択する
3. Framework Presetは自動的に「Next.js」が検出されるので、そのままデプロイする
4. 無料の `*.vercel.app` サブドメインで公開される

## 公開前に確認すること

- `lib/config.ts` の `CROWDWORKS_PROFILE_URL` を実際のクラウドワークスのプロフィールURLに差し替える
- スマートフォン幅（375px程度）での表示崩れがないか確認する
- 各ケーススタディページへのリンクがすべて正しく機能するか確認する
```

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs: add README with dev, build, and deployment instructions"
```

---
