const flow = [
  { time: '9:00', label: '送迎・体調確認' },
  { time: '10:00', label: '健康チェック' },
  { time: '12:00', label: '昼食' },
  { time: '14:00', label: 'レクリエーション' },
  { time: '15:30', label: 'おやつ' },
  { time: '16:00', label: '送迎' },
];

const features = [
  { title: '一人ひとりに合わせたケア', body: '経験豊富なスタッフが、丁寧にサポートします。' },
  { title: '送迎エリア対応', body: '近隣エリアはご自宅まで送迎いたします。' },
  { title: '楽しいレクリエーション', body: '季節の行事やレクリエーションを毎月開催。' },
];

export default function DayServiceMockup() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] font-sans text-[#4A3729]">
      <header className="flex items-center justify-between px-8 py-6">
        <span className="rounded-full bg-[#6B9080] px-4 py-1 text-sm font-bold text-white">
          さくら
        </span>
        <nav className="hidden gap-6 text-sm sm:flex">
          <span>ケアの内容</span>
          <span>1日の流れ</span>
          <span>アクセス</span>
        </nav>
        <span className="rounded-full border border-[#4A3729]/20 px-4 py-1 text-xs">
          お問い合わせ
        </span>
      </header>

      <section className="grid gap-10 px-8 pb-20 pt-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-[#6B9080]">
            DAYCARE FACILITY
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-relaxed">
            毎日を、
            <br />
            その人らしく。
          </h1>
          <p className="mt-6 max-w-sm leading-loose">
            住み慣れた地域で、安心して通っていただけるデイサービスです。
          </p>
          <button className="mt-8 rounded-full bg-[#6B9080] px-8 py-3 font-bold text-white">
            見学予約はこちら
          </button>
        </div>
        <div className="relative h-64 sm:h-80">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#E8A87C] to-[#6B9080] opacity-90"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          />
          <div
            className="absolute left-8 top-8 h-2/3 w-2/3 bg-white/40 backdrop-blur"
            style={{ borderRadius: '40% 60% 70% 30% / 50% 60% 30% 60%' }}
          />
        </div>
      </section>

      <section className="bg-white px-8 py-16">
        <h2 className="text-xl font-bold">1日の流れ</h2>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {flow.map((step) => (
            <div
              key={step.time}
              className="w-36 shrink-0 rounded-2xl border border-[#6B9080]/20 bg-[#FFF9F2] p-5"
            >
              <p className="font-bold text-[#6B9080]">{step.time}</p>
              <p className="mt-2 text-sm">{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#6B9080] px-8 py-16 text-center text-white">
        <p className="mx-auto max-w-lg font-serif text-2xl leading-relaxed">
          「母が毎日、行くのを楽しみにしています」
        </p>
        <p className="mt-3 text-sm opacity-80">ご家族の声（架空）</p>
      </section>

      <section className="grid gap-10 px-8 py-16 sm:grid-cols-3">
        {features.map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-[#E8A87C]/40 to-[#6B9080]/40" />
            <h3 className="mt-4 font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-[#4A3729]/10 px-8 py-8 text-center text-xs text-[#4A3729]/70">
        © デイサービスさくら（架空の制作事例）
      </footer>
    </div>
  );
}
