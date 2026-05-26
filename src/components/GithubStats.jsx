import portfolioData from "@/data/portfolio";

export default function GithubStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {portfolioData.stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
        >
          <div className="text-3xl font-bold text-white">{item.value}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
