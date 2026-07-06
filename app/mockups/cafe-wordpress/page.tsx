const menu = [
  { name: 'ブレンド珈琲', price: '¥550' },
  { name: '自家製シフォンケーキ', price: '¥480' },
  { name: '季節のタルト', price: '¥520' },
  { name: 'カフェオレ', price: '¥600' },
];

const posts = [
  { date: '2026.06.01', title: '夏季限定メニューを開始しました' },
  { date: '2026.05.10', title: '臨時休業のお知らせ' },
  { date: '2026.04.20', title: '新しい豆が入荷しました' },
];

export default function CafeMockup() {
  return (
    <div className="min-h-screen bg-[#F2EAD8] font-serif text-[#1C1712]">
      <header className="flex items-center justify-between border-b-2 border-[#1C1712] px-8 py-6">
        <span className="text-2xl font-black tracking-tight">IROHA</span>
        <nav className="flex gap-6 text-xs uppercase tracking-widest">
          <span>Menu</span>
          <span>Journal</span>
          <span>Access</span>
        </nav>
      </header>

      <section
        className="relative overflow-hidden bg-[#1C1712] px-8 py-24 text-[#F2EAD8]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(242,234,216,0.5) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}
      >
        <p className="relative text-xs tracking-[0.3em] text-[#B5502D]">
          SPECIALTY COFFEE ROASTER
        </p>
        <h1 className="relative mt-4 text-5xl font-black leading-none">
          豆から、
          <br />
          物語を焙煎する。
        </h1>
      </section>

      <section className="grid sm:grid-cols-2">
        <div className="flex items-center bg-[#B5502D] p-10 text-[#F2EAD8]">
          <p className="leading-loose">
            店主が生豆から選び、一杯ずつ丁寧にハンドドリップでお淹れします。
          </p>
        </div>
        <div className="aspect-video bg-gradient-to-br from-[#1C1712] to-[#B5502D]" />
      </section>

      <section className="px-8 py-20">
        <h2 className="text-center text-lg font-bold tracking-widest">MENU</h2>
        <div className="mx-auto mt-8 max-w-sm border-2 border-dashed border-[#1C1712] p-6">
          {menu.map((item) => (
            <div key={item.name} className="flex items-baseline gap-2 py-2 text-sm">
              <span>{item.name}</span>
              <span className="flex-1 border-b border-dotted border-[#1C1712]/50" />
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1C1712] px-8 py-16 text-[#F2EAD8]">
        <h2 className="text-lg font-bold tracking-widest">JOURNAL</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="border border-[#F2EAD8]/20 p-5">
              <p className="text-xs text-[#B5502D]">{post.date}</p>
              <p className="mt-2 text-sm leading-relaxed">{post.title}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="grid gap-6 px-8 py-10 text-xs sm:grid-cols-3">
        <div>
          <p className="font-bold">焙煎珈琲 いろは</p>
          <p className="mt-2">〒000-0000 架空市架空町4-5-6</p>
        </div>
        <div>
          <p className="font-bold">営業時間</p>
          <p className="mt-2">10:00–18:00（水曜定休）</p>
        </div>
        <div>
          <p className="font-bold">Powered by WordPress（静的再現）</p>
        </div>
      </footer>
    </div>
  );
}
