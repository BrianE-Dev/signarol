import { ArrowRight, CheckCircle2, RotateCcw, Send, Timer } from "lucide-react";

const resultLabels = {
  correct: "Strong answer",
  partial: "Partial answer",
  wrong: "Needs work",
};

function formatCountdown(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function Interview({
  answer,
  currentIndex,
  currentQuestion,
  onAnswerChange,
  onNextQuestion,
  onReset,
  onSubmit,
  questions,
  questionMode,
  result,
  secondsLeft,
  selectedTrack,
}) {
  const isLowTime = secondsLeft <= 20;
  const isMultipleChoice = currentQuestion?.type === "multiple-choice";
  const answerPrompt = isMultipleChoice
    ? "Choose the best answer"
    : "Your answer";
  const timerDescription =
    questionMode === "multiple-choice"
      ? "You have 30 seconds per question."
      : "You have exactly 2 minutes and 30 seconds for each question.";
  const selectedOption = currentQuestion?.options?.find(
    (option) => option.id === answer,
  );
  const correctOption = currentQuestion?.options?.find(
    (option) => option.id === currentQuestion?.correctOption,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="surface-card space-y-6 p-6 shadow-glow sm:p-8">
          <header className="flex flex-col gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                {selectedTrack.label} interview
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Question {currentIndex + 1} of {questions.length}
              </h1>
              <p className="text-sm text-slate-300">{timerDescription}</p>
            </div>

            <div
              className={`flex flex-col items-center rounded-full border px-4 py-2 text-center ${
                isLowTime
                  ? "animate-pulse border-rose-500/60 bg-rose-500/15 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.45)]"
                  : "border-amber-400/40 bg-amber-500/10 text-amber-300"
              }`}
              aria-live="polite"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium">
                <Timer size={18} aria-hidden="true" />
                {formatCountdown(secondsLeft)}
              </div>
              {isLowTime && (
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-rose-200">
                  Time is running out
                </span>
              )}
            </div>
          </header>

          <div
            className={`h-2 overflow-hidden rounded-full ${
              isLowTime ? "bg-rose-950/60" : "bg-slate-800"
            }`}
            aria-hidden="true"
          >
            <div
              className={`h-full rounded-full ${
                isLowTime
                  ? "animate-pulse bg-gradient-to-r from-rose-400 via-red-500 to-rose-600"
                  : "bg-gradient-to-r from-amber-400 to-amber-500"
              }`}
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                {currentQuestion.category}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                {currentQuestion.difficulty}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                {currentQuestion.type}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {currentQuestion.question}
            </h2>
          </article>

          {isMultipleChoice ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-200 sm:p-6">
              <span className="mb-3 block text-sm font-semibold text-white">
                {answerPrompt}
              </span>
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = answer === option.id;
                  const isCorrect = option.id === currentQuestion.correctOption;
                  const isWrongSelection =
                    Boolean(result) && isSelected && !isCorrect;

                  return (
                    <button
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        Boolean(result)
                          ? isCorrect
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-100"
                            : isWrongSelection
                              ? "border-rose-500 bg-rose-500/10 text-rose-100"
                              : "border-slate-700 bg-slate-900 text-slate-200 opacity-75"
                          : isSelected
                            ? "border-amber-400 bg-amber-500/10 text-amber-100"
                            : "border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500"
                      }`}
                      disabled={Boolean(result)}
                      key={option.id}
                      onClick={() => onAnswerChange(option.id)}
                      type="button"
                    >
                      <span className="mr-2 font-semibold text-amber-300">
                        {option.id}.
                      </span>
                      {option.text}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <label
              className="block rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-200 sm:p-6"
              htmlFor="answer"
            >
              <span className="mb-3 block text-sm font-semibold text-white">
                {answerPrompt}
              </span>
              <textarea
                id="answer"
                value={answer}
                onChange={(event) => onAnswerChange(event.target.value)}
                placeholder="Explain your thinking clearly and include the important technical terms."
                disabled={Boolean(result)}
                rows={8}
                className="min-h-[220px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/25"
              />
            </label>
          )}

          {result && (
            <aside
              className={`rounded-3xl border p-5 sm:p-6 ${
                result.level === "correct"
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : result.level === "partial"
                    ? "border-amber-500/40 bg-amber-500/10"
                    : "border-rose-500/40 bg-rose-500/10"
              }`}
              aria-live="polite"
            >
              <div className="mb-3 flex items-center gap-2 text-base font-semibold text-white">
                <CheckCircle2 size={22} aria-hidden="true" />
                {resultLabels[result.level]}
              </div>
              <p className="mb-3 text-sm text-slate-200">{result.feedback}</p>
              <p className="mb-4 text-sm text-slate-300">
                {isMultipleChoice ? (
                  <>
                    Your choice: {selectedOption?.text ?? answer}. Score:{" "}
                    {result.score}/{currentQuestion.scoring.base}.
                  </>
                ) : (
                  <>
                    Matched {result.matchedKeywords ?? 0} of{" "}
                    {result.totalKeywords ??
                      currentQuestion.expectedKeywords.length}{" "}
                    keywords. Score: {result.score}/
                    {currentQuestion.scoring.base}.
                  </>
                )}
              </p>
              <details className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-200">
                <summary className="cursor-pointer font-medium text-amber-300">
                  {isMultipleChoice ? "View explanation" : "View ideal answer"}
                </summary>
                <div className="mt-3 space-y-3 text-slate-300">
                  {isMultipleChoice && (
                    <p>
                      <span className="font-semibold text-white">
                        Correct answer:
                      </span>{" "}
                      {correctOption?.id}. {correctOption?.text}
                    </p>
                  )}
                  <p>
                    {currentQuestion.idealAnswer?.trim() ??
                      currentQuestion.explanation?.trim() ??
                      "No detailed explanation is available for this question."}
                  </p>
                </div>
              </details>
            </aside>
          )}

          <footer className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
              onClick={onReset}
              type="button"
            >
              <RotateCcw size={18} aria-hidden="true" />
              Reset
            </button>
            {!result ? (
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                onClick={onSubmit}
                type="button"
              >
                <Send size={18} aria-hidden="true" />
                {isMultipleChoice ? "Submit choice" : "Submit answer"}
              </button>
            ) : (
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                onClick={onNextQuestion}
                type="button"
              >
                {currentIndex + 1 === questions.length
                  ? "See results"
                  : "Next question"}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            )}
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Interview;
