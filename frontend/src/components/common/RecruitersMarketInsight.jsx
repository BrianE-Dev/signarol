import { ExternalLink } from 'lucide-react';

const readinessBars = [
  { label: 'Frontend', value: 82 },
  { label: 'Full Stack', value: 84 },
  { label: 'Backend', value: 74 },
];

const pipelineStages = [
  {
    name: 'Sourced',
    count: 34,
    avatars: ['AM', 'DK', 'SJ'],
    overflow: '+31',
  },
  {
    name: 'Under Review',
    count: 18,
    avatars: ['MR', 'AC'],
    overflow: '+16',
  },
  {
    name: 'Interview Scheduled',
    count: 23,
    avatars: ['EW', 'JP', 'LH'],
    overflow: '+20',
  },
  {
    name: 'Offer Stage',
    count: 8,
    avatars: ['SJ', 'DK'],
    overflow: '+6',
  },
];

const savedCandidates = [
  {
    name: 'Emma Wilson',
    summary: 'Frontend - Top 12%',
    skill: 'React',
    avatar: 'from-sky-400 via-indigo-500 to-pink-400',
  },
  {
    name: 'James Park',
    summary: 'Backend - Top 18%',
    skill: 'Python',
    avatar: 'from-orange-300 via-slate-500 to-stone-700',
  },
  {
    name: 'Lisa Zhang',
    summary: 'Full Stack - Top 9%',
    skill: 'Node.js',
    avatar: 'from-amber-300 via-orange-500 to-slate-600',
  },
];

const RecruitersMarketInsight = () => {
  const linePoints = '36,120 82,104 128,86 174,70 224,62';

  return (
    <aside className="space-y-6 lg:min-w-0">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Market Insights</h2>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-800 bg-[#141414] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <h3 className="text-xs font-semibold text-white">Average Readiness by Skill</h3>
            <div className="mt-3 h-36">
              <svg viewBox="0 0 260 150" role="img" aria-label="Average readiness by skill bar chart" className="h-full w-full">
                {[22, 48, 74, 100, 126].map((y) => (
                  <line key={y} x1="34" x2="244" y1={y} y2={y} stroke="#475569" strokeWidth="1" opacity="0.55" />
                ))}
                {[100, 80, 60, 40, 20].map((tick, index) => (
                  <text key={tick} x="7" y={25 + index * 26} fill="#94a3b8" fontSize="9">
                    {tick}
                  </text>
                ))}
                {readinessBars.map((bar, index) => {
                  const barHeight = (bar.value / 100) * 100;
                  const x = 56 + index * 58;
                  return (
                    <g key={bar.label}>
                      <rect x={x} y={128 - barHeight} width="30" height={barHeight} rx="2" fill="#f59e0b" />
                      <text x={x + 15} y="144" fill="#94a3b8" fontSize="8" textAnchor="middle">
                        {bar.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#141414] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <h3 className="text-xs font-semibold text-white">Candidate Availability</h3>
            <div className="mt-3 h-36">
              <svg viewBox="0 0 260 150" role="img" aria-label="Candidate availability trend chart" className="h-full w-full">
                {[22, 44, 66, 88, 110, 132].map((y) => (
                  <line key={y} x1="36" x2="246" y1={y} y2={y} stroke="#64748b" strokeWidth="1" opacity="0.65" />
                ))}
                {[350, 300, 250, 200, 150, 100].map((tick, index) => (
                  <text key={tick} x="6" y={24 + index * 22} fill="#94a3b8" fontSize="9">
                    {tick}
                  </text>
                ))}
                <polyline fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={linePoints} />
                {['Week 1', 'Week 3'].map((week, index) => (
                  <text key={week} x={62 + index * 114} y="144" fill="#94a3b8" fontSize="9" textAnchor="middle">
                    {week}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Your Active Pipeline</h2>
        <div className="space-y-4">
          {pipelineStages.map((stage) => (
            <div key={stage.name} className="rounded-lg border border-slate-800 bg-[#141414] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-white">{stage.name}</h3>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[11px] font-semibold text-slate-300">
                  {stage.count}
                </span>
              </div>
              <div className="mt-5 flex items-center">
                <div className="flex -space-x-2">
                  {stage.avatars.map((avatar, index) => (
                    <span
                      key={avatar}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#141414] bg-gradient-to-br from-cyan-400 via-blue-600 to-fuchsia-500 text-[9px] font-bold text-white"
                      style={{ zIndex: stage.avatars.length - index }}
                    >
                      {avatar}
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-xs font-semibold text-slate-300">{stage.overflow}</span>
              </div>
              <button className="mt-5 text-xs font-medium text-amber-400 transition hover:text-amber-300">
                View All
              </button>
            </div>
          ))}

          <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b1b1b] px-4 py-3 text-xs font-semibold text-white transition hover:bg-slate-800">
            <ExternalLink className="h-3.5 w-3.5 text-slate-300" />
            View Full Pipeline
          </button>
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Recently Saved</h2>
          <button className="text-xs font-medium text-amber-400 transition hover:text-amber-300">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {savedCandidates.map((candidate) => (
            <div
              key={candidate.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-[#141414] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-slate-700"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className={`h-9 w-9 shrink-0 rounded-full bg-gradient-to-br ${candidate.avatar} p-0.5`}>
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-[10px] font-bold text-white">
                    {candidate.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold text-white">{candidate.name}</h3>
                  <p className="mt-1 truncate text-[11px] text-slate-500">{candidate.summary}</p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-semibold text-amber-400">
                {candidate.skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RecruitersMarketInsight;
