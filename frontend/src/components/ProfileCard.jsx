function ProfileCard({ name, tag, badge, stats, actions }) {
  return (
    <article className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{tag}</p>
        </div>
        <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-slate-950">
          {badge}
        </span>
      </div>

      <div className="grid gap-2 text-sm text-slate-400">
        {stats.map((stat) => (
          <p key={stat.label}>
            <span className="font-semibold text-slate-100">{stat.label}:</span>{" "}
            {stat.value}
          </p>
        ))}
      </div>

      {actions && (
        <div className="flex flex-wrap gap-2">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProfileCard;
