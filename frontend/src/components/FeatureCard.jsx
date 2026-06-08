function FeatureCard({ title, description }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Feature
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}

export default FeatureCard;
