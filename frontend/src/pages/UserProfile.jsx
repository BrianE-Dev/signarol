import MetricCard from "../components/MetricCard";

function UserProfile() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Candidate Profile
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white">
                Alexandra Chen
              </h1>
              <p className="mt-3 text-sm text-slate-400">
                Senior software engineer with a focus on performance, scalable
                APIs, and interview readiness.
              </p>
            </div>
            <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400">
              Edit Profile
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <MetricCard
              label="Interview Readiness"
              value="92%"
              description="Strong technical readiness and interview performance."
            />
            <MetricCard
              label="Success Rate"
              value="87%"
              description="Completed 156 of 179 challenges successfully."
            />
            <MetricCard
              label="Current Streak"
              value="28 days"
              description="Active streak of continuous practice and progress."
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Experience</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Proven experience across frontend and backend systems with a
              strong focus on delivering real-time signal intelligence and
              enterprise-grade applications.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• 8 years building full-stack products</li>
              <li>• Expert in React, Node.js, and scalable APIs</li>
              <li>
                • Strong background in systems design and performance tuning
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">
              Recruiter Visibility
            </h2>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <p>Location: San Francisco, CA</p>
              <p>Preferred Role: Senior SWE</p>
              <p>Availability: 1-2 months</p>
              <p>Profile Views (30 days): 247</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
