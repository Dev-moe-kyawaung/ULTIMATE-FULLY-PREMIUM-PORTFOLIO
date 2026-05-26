export default function TechBadge({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300">
      {label}
    </span>
  );
}
