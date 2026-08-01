import { ArrowRight } from "lucide-react";

function Home({
  selectedTrackId,
  tracks,
  questionMode,
  onSelectTrack,
  onSelectQuestionMode,
  onStart,
}) {
  const hasSelectedTrack = Boolean(selectedTrackId);

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

          {hasSelectedTrack && (
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <p className="mb-3 text-sm font-semibold text-white">
                Select your interview format
              </p>
              <div
                className="grid gap-3 md:grid-cols-2"
                role="radiogroup"
                aria-label="Interview format"
              >
                {[
                  {
                    id: "theoretical",
                    label: "Direct theoretical questions",
                    description: "Free-form answers with a 2:30 timer",
                  },
                  {
                    id: "multiple-choice",
                    label: "Multiple-choice version",
                    description:
                      "One correct choice per question with a 30 second timer",
                  },
                ].map((mode) => (
                  <button
                    className={`rounded-2xl border p-4 text-left transition ${
                      questionMode === mode.id
                        ? "border-amber-400 bg-amber-500/10"
                        : "border-slate-700 bg-slate-900/60 hover:border-slate-500"
                    }`}
                    key={mode.id}
                    onClick={() => onSelectQuestionMode(mode.id)}
                    role="radio"
                    aria-checked={questionMode === mode.id}
                    type="button"
                  >
                    <div className="text-sm font-semibold text-white">
                      {mode.label}
                    </div>
                    <div className="mt-1 text-xs text-slate-300">
                      {mode.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
              disabled={!hasSelectedTrack}
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
