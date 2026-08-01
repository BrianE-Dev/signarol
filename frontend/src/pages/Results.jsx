import { RotateCcw } from "lucide-react";

const resultLabels = {
  correct: "Strong answer",
  partial: "Partial answer",
  wrong: "Needs work",
};

function Results({ history, onReset, questions, selectedTrack, totalScore }) {
  const finalMaxScore = questions.reduce(
    (sum, question) => sum + question.scoring.base,
    0,
  );
  const percent =
    finalMaxScore > 0 ? Math.round((totalScore / finalMaxScore) * 100) : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="surface-card space-y-6 p-6 shadow-glow sm:p-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Interview completed
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              {selectedTrack.label} score: {percent}%
            </h1>
            <p className="text-base text-slate-300">
              You scored {totalScore} out of {finalMaxScore} across{" "}
              {history.length} questions.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {history.map((item, index) => (
              <article
                className={`rounded-3xl border p-5 ${
                  item.result.level === "correct"
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : item.result.level === "partial"
                      ? "border-amber-500/40 bg-amber-500/10"
                      : "border-rose-500/40 bg-rose-500/10"
                }`}
                key={`${item.question.id}-${index}`}
              >
                <span className="mb-3 inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                  Question {index + 1}
                </span>
                <h2 className="text-lg font-semibold text-white">
                  {item.question.question}
                </h2>
                <p className="mt-3 text-sm text-slate-200">
                  {resultLabels[item.result.level]}
                </p>
                <strong className="mt-3 block text-base text-amber-300">
                  {item.result.score}/{item.question.scoring.base}
                </strong>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              onClick={onReset}
              type="button"
            >
              <RotateCcw size={18} aria-hidden="true" />
              Start over
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Results;
