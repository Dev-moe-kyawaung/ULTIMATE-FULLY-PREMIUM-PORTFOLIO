import Link from "next/link";
import portfolioData from "@/data/portfolio";
import TechBadge from "./TechBadge";
import BackgroundFX from "./BackgroundFX";
import ParticleDots from "./ParticleDots";

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundFX />
      <ParticleDots />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {portfolioData.profile.availability}
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              {portfolioData.profile.name}
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-200 md:text-2xl">
              {portfolioData.profile.title}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
              {portfolioData.profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
              </Link>
              <a
                href="#contact"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {portfolioData.skills.slice(0, 8).map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </div>

          <div className="animate-float">
            <div className="hero-glow rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Developer Identity
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  Premium Developer Branding
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  A modern portfolio experience designed to showcase frontend quality,
                  clean structure, and a strong professional presence.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {portfolioData.stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-xl font-bold text-white">{item.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
