import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TechBadge from "@/components/TechBadge";
import portfolioData from "@/data/portfolio";

export async function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Moe Kyaw Aung`,
    description: project.excerpt,
  };
}

export default function ProjectPage({ params }) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const otherProjects = portfolioData.projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All Projects
      </Link>

      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={630}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Case Study
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Overview
            </p>
            <p className="mt-3 text-base leading-8 text-slate-300">{project.excerpt}</p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Details
            </p>
            <p className="mt-3 text-base leading-8 text-slate-300">{project.description}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Technologies
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Project Info
            </p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs text-slate-500">Type</dt>
                <dd className="mt-1 text-sm font-medium text-white">
                  {project.featured ? "Featured Project" : "Side Project"}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Status</dt>
                <dd className="mt-1">
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    Live
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Source Code</dt>
                <dd className="mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 transition hover:text-cyan-300"
                  >
                    GitHub Repository
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Developer
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-white">{portfolioData.profile.name}</p>
              <p className="mt-1 text-xs text-slate-400">{portfolioData.profile.title}</p>
              <p className="mt-3 text-xs text-slate-400">{portfolioData.profile.location}</p>
            </div>
          </div>
        </div>
      </div>

      {otherProjects.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">More Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-cyan-400/40"
              >
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={300}
                    className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
