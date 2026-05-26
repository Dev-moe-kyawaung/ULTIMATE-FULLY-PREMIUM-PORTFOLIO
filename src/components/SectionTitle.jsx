export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="text-center">
      {label && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {label}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
