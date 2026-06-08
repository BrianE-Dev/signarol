function MetricCard({ label, value, description }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-lg shadow-slate-950/20">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        {label}
      </p>
      <p className="mt-4 text-5xl font-semibold text-white">{value}</p>
      {description && (
        <p className="mt-3 text-sm text-slate-400">{description}</p>
      )}
    </article>
  );
}

export default MetricCard;
