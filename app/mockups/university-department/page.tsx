const stats = [
  { value: '94%', label: '就職内定率' },
  { value: '1:12', label: '教員1人あたり学生数' },
  { value: '32', label: '演習科目数' },
];

const years = [
  { title: '基礎', body: 'デザインとプログラミングの基礎を横断的に学ぶ。' },
  { title: '応用', body: '実際の企業課題に取り組む演習を開始。' },
  { title: '専門', body: '関心分野を選び、専門性を深める。' },
  { title: '卒業制作', body: '4年間の集大成として卒業制作に取り組む。' },
];

const faculty = [
  { initial: 'K.S', name: '教授 / 情報デザイン' },
  { initial: 'M.T', name: '准教授 / UXリサーチ' },
  { initial: 'R.H', name: '准教授 / データ可視化' },
  { initial: 'A.N', name: '講師 / インタラクション' },
];

export default function UniversityMockup() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-serif text-[#14213D]">
      <header className="flex items-center justify-between border-b border-[#14213D]/10 px-8 py-6">
        <span className="font-bold">桜丘大学 情報デザイン学部</span>
        <nav className="hidden gap-6 text-xs tracking-widest sm:flex">
          <span>ABOUT</span>
          <span>CURRICULUM</span>
          <span>ACCESS</span>
        </nav>
      </header>

      <section className="grid overflow-hidden sm:grid-cols-[auto_1fr]">
        <div className="hidden items-center justify-center bg-[#14213D] px-6 py-16 text-[#FAFAF7] sm:flex">
          <p
            className="text-2xl font-bold tracking-widest"
            style={{ writingMode: 'vertical-rl' }}
          >
            情報デザイン学部
          </p>
        </div>
        <div className="px-8 py-16 sm:px-10">
          <p className="text-xs tracking-[0.3em] text-[#C9A227]">
            FACULTY OF INFORMATION DESIGN
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-relaxed">
            テクノロジーと美意識を、
            <br />
            社会実装する力を。
          </h1>
          <p className="mt-4 max-w-md leading-loose">
            情報デザイン学部では、実践的な演習を通じて、社会に求められるデザインとテクノロジーの力を学びます。
          </p>
        </div>
      </section>

      <section className="grid divide-y divide-[#14213D]/10 border-y border-[#14213D]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="px-8 py-10 text-center">
            <p className="text-4xl font-black text-[#C9A227]">{stat.value}</p>
            <p className="mt-2 text-xs">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="px-8 py-16">
        <h2 className="font-bold">4年間の学び</h2>
        <div className="mt-8 grid gap-px bg-[#14213D]/10 sm:grid-cols-4">
          {years.map((year, index) => (
            <div key={year.title} className="bg-[#FAFAF7] p-6">
              <p className="text-xs text-[#C9A227]">YEAR 0{index + 1}</p>
              <p className="mt-2 font-bold">{year.title}</p>
              <p className="mt-2 text-sm leading-relaxed">{year.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#14213D] px-8 py-16 text-[#FAFAF7]">
        <h2 className="font-bold">教員紹介</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          {faculty.map((person) => (
            <div key={person.initial} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C9A227] font-bold">
                {person.initial}
              </div>
              <p className="mt-3 text-sm">{person.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-8 py-8 text-center text-xs text-[#14213D]/60">
        © 桜丘大学 情報デザイン学部（架空の制作事例）
      </footer>
    </div>
  );
}
