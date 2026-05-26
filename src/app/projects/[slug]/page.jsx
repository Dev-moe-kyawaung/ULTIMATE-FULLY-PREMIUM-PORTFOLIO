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

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All Projects
      </Link>

      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={630}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Project
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white">{project.title}</h1>
        <p className="mt-6 text-base leading-8 text-slate-300">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View on GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
