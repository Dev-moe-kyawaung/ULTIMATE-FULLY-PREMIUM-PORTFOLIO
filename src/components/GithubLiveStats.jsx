"use client";

import { useEffect, useState } from "react";

export default function GithubLiveStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStats();
  }, []);

  if (!data) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
        Loading GitHub stats...
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-2xl font-bold text-white">{data.public_repos}</div>
        <div className="mt-2 text-sm text-slate-300">Repositories</div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-2xl font-bold text-white">{data.followers}</div>
        <div className="mt-2 text-sm text-slate-300">Followers</div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-2xl font-bold text-white">{data.following}</div>
        <div className="mt-2 text-sm text-slate-300">Following</div>
      </div>
      <a
        href={data.profile_url}
        target="_blank"
        className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
      >
        <div className="text-2xl font-bold text-cyan-400">Profile</div>
        <div className="mt-2 text-sm text-slate-300">View GitHub</div>
      </a>
    </div>
  );
}
