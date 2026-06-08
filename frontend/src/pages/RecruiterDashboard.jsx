import MetricCard from "../components/MetricCard";
import ProfileCard from "../components/ProfileCard";

const candidates = [
  {
    name: "Alex Chen",
    tag: "@alexchen_dev",
    badge: "Top 1%",
    stats: [
      { label: "Readiness", value: "92%" },
      { label: "Last Active", value: "2 days ago" },
    ],
  },
  {
    name: "Maria Rodriguez",
    tag: "@maria_codes",
    badge: "Top 15%",
    stats: [
      { label: "Readiness", value: "89%" },
      { label: "Last Active", value: "Today" },
    ],
  },
];

function Recruiter() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Recruiter Dashboard
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white">
                Your hiring pipeline
              </h1>
            </div>
            <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400">
              Post New Role
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <MetricCard
              label="Active Searches"
              value="12"
              description="Open searches in the platform."
            />
            <MetricCard
              label="Pipeline Candidates"
              value="89"
              description="Candidates in active review."
            />
            <MetricCard
              label="Interviews Scheduled"
              value="23"
              description="Interviews booked for this week."
            />
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">
              Candidate short list
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Review recent top-match candidates and open candidate profiles.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {candidates.map((candidate) => (
              <ProfileCard
                key={candidate.name}
                name={candidate.name}
                tag={candidate.tag}
                badge={candidate.badge}
                stats={candidate.stats}
                actions={[{ label: "View Profile" }, { label: "Shortlist" }]}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recruiter;
