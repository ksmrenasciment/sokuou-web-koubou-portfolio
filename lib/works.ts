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
