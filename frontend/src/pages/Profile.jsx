import Navbar from "../components/Navbar";
import MetricCard from "../components/MetricCard";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Profile
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white">
                Alexandra Chen
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                San Francisco, CA (PST) · Member since March 2022
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400">
                Share Profile
              </button>
              <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-500">
                Download Resume
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <MetricCard
              label="Interview Readiness"
              value="92%"
              description="Elite Ready — performing better than 92% of candidates."
            />
            <MetricCard
              label="Success Rate"
              value="87%"
              description="156 of 179 challenges completed successfully."
            />
            <MetricCard
              label="Current Streak"
              value="28 days"
              description="Personal best: 42 days"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
