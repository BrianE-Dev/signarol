import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    title: "Real-Time Processing",
    description:
      "Process complex signals with low latency and high reliability for mission-critical workflows.",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Leverage machine learning models to extract actionable insights from raw signal data.",
  },
  {
    title: "Enterprise Security",
    description:
      "Secure end-to-end telemetry data with zero-trust architecture and encrypted pipelines.",
  },
  {
    title: "Developer-First APIs",
    description:
      "Integrate easily with REST and WebSocket APIs for real-time observability and control.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Deploy across edge and cloud environments with elastic scaling and failover support.",
  },
  {
    title: "Performance Monitoring",
    description:
      "Monitor throughput, latency, and accuracy with dashboard-ready metrics and alerts.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="space-y-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Signal intelligence
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Elite Signal Intelligence for Modern Engineering
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            Harness advanced signal processing and real-time analytics to
            transform raw data into actionable intelligence. Built for teams
            that demand precision and performance.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              Start Free Trial
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500">
              View Demo
            </button>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {features.slice(0, 3).map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center text-slate-200 shadow-xl shadow-slate-950/30">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Signal performance
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Ready to transform your signal intelligence?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            Join elite engineering teams using Signarol to process critical
            signals with unprecedented accuracy and speed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400">
              Start Your Free Trial
            </button>
            <button className="rounded-full border border-slate-700 px-7 py-3 text-sm font-medium text-slate-100 hover:border-slate-500">
              Schedule Demo
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
