import Navbar from "../components/Navbar";
import MetricCard from "../components/MetricCard";
import ProfileCard from "../components/ProfileCard";

const stats = [
  { label: "Active Searches", value: "12" },
  { label: "Reviewed This Week", value: "247" },
  { label: "Pipeline Candidates", value: "89" },
  { label: "Interviews Scheduled", value: "23" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Welcome back, Sarah!
              </p>
              <h1 className="text-4xl font-semibold text-white">
                Your talent discovery dashboard
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400">
                New Search
              </button>
              <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-500">
                Export Report
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <MetricCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>
        </section>

        <section className="mt-10 space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Top Matches</h2>
            <p className="mt-2 text-sm text-slate-400">
              Leaderboard view of candidate readiness and profile highlights.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <ProfileCard
              name="Alex Chen"
              tag="@alexchen_dev"
              badge="Top 1%"
              stats={[
                { label: "Readiness Score", value: "92%" },
                { label: "Last Active", value: "2 days ago" },
              ]}
              actions={[{ label: "View Profile" }, { label: "Message" }]}
            />
            <ProfileCard
              name="Maria Rodriguez"
              tag="@maria_codes"
              badge="Top 15%"
              stats={[
                { label: "Readiness Score", value: "89%" },
                { label: "Last Active", value: "Today" },
              ]}
              actions={[{ label: "View Profile" }, { label: "Message" }]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
