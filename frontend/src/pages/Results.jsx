import { RotateCcw } from "lucide-react";

const resultLabels = {
  correct: "Strong answer",
  partial: "Partial answer",
  wrong: "Needs work"
};

function Results({ history, onReset, questions, selectedTrack, totalScore }) {
  const finalMaxScore = questions.reduce((sum, question) => sum + question.scoring.base, 0);
  const percent = finalMaxScore > 0 ? Math.round((totalScore / finalMaxScore) * 100) : 0;

  return (
    <main className="interview-shell">
      <section className="interview-results">
        <p className="eyebrow">Interview completed</p>
        <h1>{selectedTrack.label} score: {percent}%</h1>
        <p className="results-summary">
          You scored {totalScore} out of {finalMaxScore} across {history.length} questions.
        </p>

        <div className="summary-grid">
          {history.map((item, index) => (
            <article className={`summary-card ${item.result.level}`} key={`${item.question.id}-${index}`}>
              <span>Question {index + 1}</span>
              <h2>{item.question.question}</h2>
              <p>{resultLabels[item.result.level]}</p>
              <strong>{item.result.score}/{item.question.scoring.base}</strong>
            </article>
          ))}
        </div>

        <button className="primary-action" onClick={onReset} type="button">
          <RotateCcw size={18} aria-hidden="true" />
          Start over
        </button>
      </section>
    </main>
  );
}

export default Results;
