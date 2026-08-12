const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'candidates', label: 'Candidates Search' },
  { id: 'pipeline', label: 'Hiring Pipeline' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'saved', label: 'Saved Candidates' },
  { id: 'settings', label: 'Team Settings' },
];

const RecruiterSidebar = ({ activeNav = 'dashboard', onNavChange }) => {
  return (
    <aside className="fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-72 border-r border-slate-800 bg-[#141414] p-4 lg:block lg:overflow-y-auto">
      <div className="space-y-2">
        <p className="px-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Recruiter Workspace
        </p>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavChange?.(item.id)}
            className={`flex w-full items-center rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
              activeNav === item.id
                ? 'bg-amber-500/15 text-amber-400'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default RecruiterSidebar;