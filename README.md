# 即応Web工房 ポートフォリオサイト

クラウドワークスでのホームページ制作受託営業に使うポートフォリオサイトです。掲載している5件の制作実績はすべて架空の案件です。

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## テスト

```bash
npm test
```

## 静的書き出し

```bash
npm run build
```

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
