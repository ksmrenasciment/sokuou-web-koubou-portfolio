const countdown = [
  { value: '03', label: 'DAYS' },
  { value: '12', label: 'HOURS' },
  { value: '45', label: 'MIN' },
];

export default function SeminarMockup() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19] font-sans text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(124,58,237,0.35), transparent 50%), radial-gradient(circle at 85% 0%, rgba(34,211,238,0.25), transparent 50%)',
        }}
      />

      <header className="relative flex items-center justify-between px-8 py-6">
        <span className="font-bold">NEXT SEMINAR</span>
        <span className="rounded-full border border-white/20 px-4 py-1 text-xs">無料参加</span>
      </header>

      <section className="relative grid gap-12 px-8 pb-20 pt-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#22D3EE]">ONLINE SEMINAR</p>
          <h1 className="mt-4 text-4xl font-black leading-tight">
            データで伸ばす、
            <br />
            Web集客の教科書。
          </h1>
          <p className="mt-4 max-w-sm text-white/70">
            先着50名・参加無料・オンライン開催（Zoom）
          </p>
          <div className="mt-6 flex gap-3">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-center backdrop-blur"
              >
                <p className="text-2xl font-black">{item.value}</p>
                <p className="text-[10px] tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-8 py-3 font-bold">
            今すぐ無料で申し込む
          </button>
        </div>

        <div className="relative rotate-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          </div>
          <div className="h-40 rounded-lg bg-gradient-to-br from-[#7C3AED]/50 to-[#22D3EE]/50" />
          <p className="mt-4 text-xs text-white/60">Preview: セミナー資料スライド</p>
        </div>
      </section>

      <section className="relative grid grid-cols-4 gap-4 px-8 py-16">
        <div className="col-span-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2 sm:row-span-2">
          <p className="text-xs text-[#22D3EE]">01</p>
          <h3 className="mt-3 text-lg font-bold">集客の仕組み化</h3>
          <p className="mt-2 text-sm text-white/70">
            属人化しがちな集客業務を、再現性のある仕組みに落とし込む方法を解説します。
          </p>
        </div>
        <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-1">
          <p className="text-xs text-[#22D3EE]">02</p>
          <h3 className="mt-3 font-bold">広告費を抑える</h3>
        </div>
        <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-1">
          <p className="text-xs text-[#22D3EE]">03</p>
          <h3 className="mt-3 font-bold">導線設計</h3>
        </div>
        <div className="col-span-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
          <p className="text-xs text-[#22D3EE]">04</p>
          <h3 className="mt-3 font-bold">成果の可視化</h3>
          <p className="mt-2 text-sm text-white/70">数字で成果を追える体制づくりまで伴走します。</p>
        </div>
      </section>

      <div className="sticky bottom-0 z-10 flex items-center justify-between border-t border-white/10 bg-[#0B0F19]/90 px-8 py-4 backdrop-blur">
        <span className="text-sm text-white/70">先着50名・参加無料</span>
        <button className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] px-6 py-2 text-sm font-bold">
          申し込む
        </button>
      </div>

      <footer className="relative px-8 py-6 text-center text-xs text-white/40">
        © 株式会社ネクストセミナー（架空の制作事例）
      </footer>
    </div>
  );
}
