const stats = [
  { value: '200+', label: '施工実績件数' },
  { value: '50', label: '創業からの年数' },
  { value: '0', label: '重大労災件数' },
];

const projects = ['戸建て住宅', '共同住宅', '外構工事'];

export default function ConstructionMockup() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111]">
      <header className="flex items-center justify-between bg-[#111111] px-8 py-5 text-white">
        <span className="font-black tracking-tight">YAMADA CONSTRUCTION</span>
        <nav className="hidden gap-6 text-xs sm:flex">
          <span>実績</span>
          <span>会社概要</span>
          <span>採用</span>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#111111] px-8 py-24 text-white">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[#FF6B00]"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        <p className="relative text-xs tracking-[0.3em] text-[#FF6B00]">SINCE 1976</p>
        <h1 className="relative mt-4 max-w-lg text-4xl font-black leading-tight">
          地図に残る仕事を、
          <br />
          次の世代へ。
        </h1>
      </section>

      <section className="grid grid-cols-3 border-y-4 border-[#111111]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-r-4 border-[#111111] px-4 py-8 text-center last:border-r-0"
          >
            <p className="text-3xl font-black sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-[11px] sm:text-xs">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="px-8 py-20">
        <p className="font-mono text-xs text-[#2E5EAA]">FIG. 01 — 施工実績</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project} className={index === 1 ? 'sm:mt-8' : ''}>
              <div
                className="h-40 bg-gradient-to-br from-[#111111] to-[#2E5EAA]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                }}
              />
              <p className="mt-3 font-mono text-xs text-[#2E5EAA]">NO.0{index + 1}</p>
              <p className="font-bold">{project}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-4 border-[#111111] px-8 py-12">
        <h2 className="text-center font-bold">会社概要</h2>
        <table className="mx-auto mt-6 text-sm">
          <tbody>
            <tr>
              <td className="py-1 pr-6 font-bold">所在地</td>
              <td>架空市架空町10-11-12</td>
            </tr>
            <tr>
              <td className="py-1 pr-6 font-bold">創業</td>
              <td>架空年（創業50年）</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="border-b-4 border-[#111111] bg-[#FF6B00] px-8 py-10 text-center">
        <p className="text-xl font-black">採用情報はこちら</p>
      </section>

      <footer className="bg-[#111111] px-8 py-8 text-center text-xs text-white/70">
        © 山田建設株式会社（架空の制作事例）
      </footer>
    </div>
  );
}
