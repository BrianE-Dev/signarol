import { ArrowRight } from "lucide-react";

function Home({ selectedTrackId, tracks, onSelectTrack, onStart }) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="surface-card space-y-8 p-6 shadow-glow sm:p-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              signarol
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Practice with a focused interview track
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300">
              Pick a track, answer timed questions, and get immediate scoring
              based on the expected concepts for each prompt.
            </p>
          </div>

          <div
            className="grid gap-4 md:grid-cols-2"
            role="radiogroup"
            aria-label="Interview track"
          >
            {tracks.map((track) => (
              <button
                className={`rounded-3xl border p-5 text-left transition ${
                  selectedTrackId === track.id
                    ? "border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/10"
                    : "border-slate-800 bg-slate-950/70 hover:border-slate-600"
                }`}
                key={track.id}
                onClick={() => onSelectTrack(track.id)}
                role="radio"
                aria-checked={selectedTrackId === track.id}
                type="button"
              >
                <span className="mb-3 inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                  {track.questions.length} questions
                </span>
                <h2 className="text-xl font-semibold text-white">
                  {track.label}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  {track.description}
                </p>
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              onClick={onStart}
              type="button"
            >
              Start interview
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
