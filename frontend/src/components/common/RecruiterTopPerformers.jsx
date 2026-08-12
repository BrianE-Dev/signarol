import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const categories = ['Algorithms', 'Frontend', 'Backend', 'System Design'];

const topPerformers = [
  {
    rank: '#1',
    name: 'Alex Chen',
    percentile: '98.5%',
    readiness: 'Expert',
    skills: 3,
    consistency: '96%',
    avatar: 'from-cyan-400 via-slate-500 to-orange-300',
  },
  {
    rank: '#2',
    name: 'Maria Rodriguez',
    percentile: '97.8%',
    readiness: 'Expert',
    skills: 3,
    consistency: '94%',
    avatar: 'from-fuchsia-500 via-blue-600 to-cyan-400',
  },
  {
    rank: '#3',
    name: 'David Kim',
    percentile: '96.2%',
    readiness: 'Advanced',
    skills: 3,
    consistency: '91%',
    avatar: 'from-sky-400 via-teal-500 to-orange-400',
  },
];

const RecruiterTopPerformers = () => {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-white">Top Performers by Category</h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
              index === 0
                ? 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25'
                : 'bg-[#1b1b1b] text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-slate-800 bg-[#141414]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[660px] text-left">
            <thead className="bg-[#1b1b1b] text-[11px] font-semibold text-slate-400">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-4 py-4">Developer</th>
                <th className="px-4 py-4">Percentile</th>
                <th className="px-4 py-4">Readiness</th>
                <th className="px-4 py-4">Skills</th>
                <th className="px-4 py-4">Consistency</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {topPerformers.map((performer) => (
                <tr key={performer.rank} className="text-slate-300 transition hover:bg-slate-900/45">
                  <td className="px-6 py-4 font-bold text-amber-400">{performer.rank}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 shrink-0 rounded-full bg-gradient-to-br ${performer.avatar} p-0.5`}>
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-[10px] font-bold text-white">
                          {performer.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')}
                        </div>
                      </div>
                      <span className="max-w-[92px] font-semibold leading-tight text-white">
                        {performer.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-white">{performer.percentile}</td>
                  <td className={`px-4 py-4 ${performer.readiness === 'Expert' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {performer.readiness}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex h-7 items-end gap-1">
                      {Array.from({ length: performer.skills }).map((_, index) => (
                        <span
                          key={index}
                          className="w-2 rounded-sm bg-amber-500"
                          style={{ height: `${16 + index * 4}px` }}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-white">{performer.consistency}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-xs font-medium text-amber-400 transition hover:text-amber-300">
                        Contact
                      </button>
                      <button className="text-slate-500 transition hover:text-white">
                        <Heart className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1b1b1b] text-slate-500 transition hover:text-white">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold transition ${
              page === 1
                ? 'bg-amber-500 text-black'
                : 'bg-[#1b1b1b] text-slate-300 hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1b1b1b] text-slate-500 transition hover:text-white">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default RecruiterTopPerformers;
