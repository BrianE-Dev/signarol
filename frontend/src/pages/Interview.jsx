import { ArrowRight, CheckCircle2, RotateCcw, Send, Timer } from "lucide-react";

const resultLabels = {
  correct: "Strong answer",
  partial: "Partial answer",
  wrong: "Needs work"
};

function Interview({
  answer,
  currentIndex,
  currentQuestion,
  onAnswerChange,
  onNextQuestion,
  onReset,
  onSubmit,
  questions,
  result,
  secondsLeft,
  selectedTrack
}) {
  return (
    <main className="interview-shell">
      <section className="interview-panel">
        <header className="interview-header">
          <div>
            <p className="eyebrow">{selectedTrack.label} interview</p>
            <h1>Question {currentIndex + 1} of {questions.length}</h1>
          </div>
          <div className="timer-pill" aria-live="polite">
            <Timer size={18} aria-hidden="true" />
            {secondsLeft}s
          </div>
        </header>

        <div className="progress-track" aria-hidden="true">
          <div
            className="progress-bar"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <article className="question-card">
          <div className="question-meta">
            <span>{currentQuestion.category}</span>
            <span>{currentQuestion.difficulty}</span>
            <span>{currentQuestion.type}</span>
          </div>
          <h2>{currentQuestion.question}</h2>
        </article>

        <label className="answer-field" htmlFor="answer">
          <span>Your answer</span>
          <textarea
            id="answer"
            value={answer}
            onChange={(event) => onAnswerChange(event.target.value)}
            placeholder="Explain your thinking clearly and include the important technical terms."
            disabled={Boolean(result)}
            rows={8}
          />
        </label>

        {result && (
          <aside className={`feedback-panel ${result.level}`} aria-live="polite">
            <div>
              <CheckCircle2 size={22} aria-hidden="true" />
              <strong>{resultLabels[result.level]}</strong>
            </div>
            <p>{result.feedback}</p>
            <p>
              Matched {result.matchedKeywords ?? 0} of{" "}
              {result.totalKeywords ?? currentQuestion.expectedKeywords.length} keywords. Score:{" "}
              {result.score}/{currentQuestion.scoring.base}.
            </p>
            <details>
              <summary>View ideal answer</summary>
              <p>{currentQuestion.idealAnswer.trim()}</p>
            </details>
          </aside>
        )}

        <footer className="interview-actions">
          <button className="secondary-action" onClick={onReset} type="button">
            <RotateCcw size={18} aria-hidden="true" />
            Reset
          </button>
          {!result ? (
            <button className="primary-action" onClick={onSubmit} type="button">
              <Send size={18} aria-hidden="true" />
              Submit answer
            </button>
          ) : (
            <button className="primary-action" onClick={onNextQuestion} type="button">
              {currentIndex + 1 === questions.length ? "See results" : "Next question"}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}

export default Interview;
