import { RotateCcw } from "lucide-react";

const resultLabels = {
  correct: "Strong answer",
  partial: "Partial answer",
  wrong: "Needs work",
};

function Results({
  history,
  onReset,
  questions,
  questionMode,
  selectedTrack,
  totalScore,
}) {
  const finalMaxScore = questions.reduce(
    (sum, question) => sum + question.scoring.base,
    0,
  );
  const percent =
    finalMaxScore > 0 ? Math.round((totalScore / finalMaxScore) * 100) : 0;

  const theoreticalScore = history.reduce((sum, item) => {
    if (item.question.type !== "multiple-choice") {
      return sum + item.result.score;
    }

    return sum;
  }, 0);

  const multipleChoiceScore = history.reduce((sum, item) => {
    if (item.question.type === "multiple-choice") {
      return sum + item.result.score;
    }

    return sum;
  }, 0);

  const theoreticalMaxScore = questions.reduce((sum, question) => {
    if (question.type !== "multiple-choice") {
      return sum + question.scoring.base;
    }

    return sum;
  }, 0);

  const multipleChoiceMaxScore = questions.reduce((sum, question) => {
    if (question.type === "multiple-choice") {
      return sum + question.scoring.base;
    }

    return sum;
  }, 0);

  const theoreticalPercent =
    theoreticalMaxScore > 0
      ? Math.round((theoreticalScore / theoreticalMaxScore) * 100)
      : 0;

  const multipleChoicePercent =
    multipleChoiceMaxScore > 0
      ? Math.round((multipleChoiceScore / multipleChoiceMaxScore) * 100)
      : 0;

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
            <p className="text-sm text-slate-400">
              Mode:{" "}
              {questionMode === "multiple-choice"
                ? "Multiple-choice"
                : "Direct theoretical"}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <h2 className="text-lg font-semibold text-white">
                Theoretical score
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {theoreticalScore} / {theoreticalMaxScore} ({theoreticalPercent}
                %)
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
              <h2 className="text-lg font-semibold text-white">
                Multiple-choice score
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {multipleChoiceScore} / {multipleChoiceMaxScore} (
                {multipleChoicePercent}%)
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {history.map((item, index) => {
              const isMultipleChoice = item.question.type === "multiple-choice";
              const selectedOption = item.question.options?.find(
                (option) => option.id === item.answer,
              );
              const correctOption = item.question.options?.find(
                (option) => option.id === item.question.correctOption,
              );

              return (
                <article
                  className={`rounded-3xl border p-5 shadow-lg ${
                    item.result.level === "correct"
                      ? "border-emerald-500/50 bg-emerald-500/10 shadow-emerald-950/30"
                      : item.result.level === "partial"
                        ? "border-amber-500/50 bg-amber-500/10 shadow-amber-950/30"
                        : "border-rose-500/50 bg-rose-500/10 shadow-rose-950/30"
                  }`}
                  key={`${item.question.id}-${index}`}
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                      Question {index + 1}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        item.result.level === "correct"
                          ? "bg-emerald-500/15 text-emerald-200"
                          : item.result.level === "partial"
                            ? "bg-amber-500/15 text-amber-200"
                            : "bg-rose-500/15 text-rose-200"
                      }`}
                    >
                      {item.result.level === "correct"
                        ? "Correct"
                        : item.result.level === "partial"
                          ? "Partial"
                          : "Wrong"}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-white">
                    {item.question.question}
                  </h2>
                  <p className="mt-3 text-sm font-medium text-slate-100">
                    {resultLabels[item.result.level]}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {item.result.feedback}
                  </p>
                  <div className="mt-4 rounded-2xl border border-slate-700/80 bg-slate-950/50 p-3 text-sm">
                    <p className="text-slate-200">
                      {isMultipleChoice
                        ? `Your choice: ${selectedOption?.text ?? item.answer}`
                        : `Your answer: ${item.answer || "No answer submitted"}`}
                    </p>
                    {isMultipleChoice && correctOption && (
                      <p className="mt-2 text-slate-300">
                        Correct answer: {correctOption.id}. {correctOption.text}
                      </p>
                    )}
                  </div>
                  <strong className="mt-4 block text-base text-amber-300">
                    Score: {item.result.score}/{item.question.scoring.base}
                  </strong>
                  <details className="mt-4 rounded-2xl border border-slate-700 bg-slate-950/50 p-3 text-sm text-slate-200">
                    <summary className="cursor-pointer font-medium text-amber-300">
                      {isMultipleChoice
                        ? "View explanation"
                        : "View ideal answer"}
                    </summary>
                    <p className="mt-3 text-slate-300">
                      {item.question.idealAnswer?.trim() ??
                        item.question.explanation?.trim() ??
                        "No detailed explanation is available for this question."}
                    </p>
                  </details>
                </article>
              );
            })}
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
