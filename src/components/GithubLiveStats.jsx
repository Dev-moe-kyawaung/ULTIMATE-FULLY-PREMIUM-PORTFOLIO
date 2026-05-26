"use client";

import { useEffect, useState } from "react";

function StatCard({ value, label, href }) {
  const inner = (
    <>
      <div className="flex items-center justify-center">
        <span className="text-3xl font-bold tabular-nums text-white">{value}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-400">{label}</div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
      >
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold text-cyan-400 transition group-hover:text-cyan-300">
            GitHub
          </span>
        </div>
        <div className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-400">View Profile</div>
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1">
      {inner}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="mx-auto h-8 w-16 animate-pulse rounded-lg bg-white/10" />
      <div className="mx-auto mt-3 h-3 w-20 animate-pulse rounded bg-white/5" />
    </div>
  );
}

export default function GithubLiveStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        if (json.error) {
          setError(true);
        } else {
          setData(json);
        }
      } catch {
        setError(true);
      }
    }

    fetchStats();
  }, []);

  if (error) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-400">
        Could not load GitHub stats. Check your token configuration.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <StatCard value={data.public_repos} label="Repositories" />
      <StatCard value={data.followers} label="Followers" />
      <StatCard value={data.following} label="Following" />
      <StatCard href={data.profile_url} />
    </div>
  );
}
