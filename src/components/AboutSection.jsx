import portfolioData from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Crafting digital experiences with precision
        </h2>
        <p className="mt-6 text-sm leading-8 text-slate-300 md:text-base">
          {portfolioData.profile.bio}
        </p>
        <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">
          Based in {portfolioData.profile.location}, I work with clients and teams globally to design and ship software that people love to use. I believe great software is equal parts engineering and craft.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {portfolioData.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-cyan-400">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={portfolioData.profile.resume}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Skills & Technologies
          </p>
          <div className="space-y-5">
            {portfolioData.skillGroups.map((group) => (
              <div key={group.category}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Experience Timeline
          </p>
          <div className="space-y-5">
            {portfolioData.timeline.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs font-bold text-cyan-400">
                    {item.year.slice(2)}
                  </div>
                  {i < portfolioData.timeline.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-white/10" />
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-cyan-400">{item.company} · {item.year}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
