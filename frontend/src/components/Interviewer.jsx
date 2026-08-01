import { useCallback, useEffect, useMemo, useState } from "react";
import { backendQuestions } from "../data/BackendQ";
import { frontendQuestions } from "../data/FrontendQ";
import { fullStackQuestions } from "../data/FullStackQ";
import Home from "../pages/Home";
import Interview from "../pages/Interview";
import Results from "../pages/Results";
import { evaluateAnswer } from "../utils/evaluateAnswer";

const QUESTION_TIME_LIMIT_SECONDS = 150;

const tracks = [
  {
    id: "backend",
    label: "Backend",
    description: "APIs, databases, caching, security, and system design.",
    questions: backendQuestions,
  },
  {
    id: "frontend",
    label: "Frontend",
    description:
      "React, browser fundamentals, accessibility, and UI architecture.",
    questions: frontendQuestions,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    description: "Client-server flow, auth, deployment, and end-to-end design.",
    questions: fullStackQuestions,
  },
];

function Interviewer() {
  const [selectedTrackId, setSelectedTrackId] = useState("backend");
  const [status, setStatus] = useState("not-started");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const selectedTrack = useMemo(
    () => tracks.find((track) => track.id === selectedTrackId) ?? tracks[0],
    [selectedTrackId],
  );

  const questions = selectedTrack.questions;
  const currentQuestion = questions[currentIndex];
  const totalScore = history.reduce((sum, item) => sum + item.result.score, 0);

  const handleSubmit = useCallback(() => {
    if (!currentQuestion || result) {
      return;
    }

    const evaluation = evaluateAnswer(answer, currentQuestion);
    setResult(evaluation);
    setHistory((items) => [
      ...items,
      {
        question: currentQuestion,
        answer,
        result: evaluation,
      },
    ]);
  }, [answer, currentQuestion, result]);

  useEffect(() => {
    if (status !== "in-progress" || result || !currentQuestion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setSecondsLeft((seconds) => {
        if (seconds <= 1) {
          window.clearInterval(interval);
          handleSubmit();
          return 0;
        }

        return seconds - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [currentQuestion, handleSubmit, result, status]);

  function startInterview() {
    setStatus("in-progress");
    setCurrentIndex(0);
    setAnswer("");
    setResult(null);
    setHistory([]);
    setSecondsLeft(QUESTION_TIME_LIMIT_SECONDS);
  }

  function resetInterview() {
    setStatus("not-started");
    setCurrentIndex(0);
    setAnswer("");
    setResult(null);
    setHistory([]);
    setSecondsLeft(0);
  }

  function goToNextQuestion() {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      setStatus("completed");
      setResult(null);
      setAnswer("");
      setSecondsLeft(0);
      return;
    }

    setCurrentIndex(nextIndex);
    setAnswer("");
    setResult(null);
    setSecondsLeft(QUESTION_TIME_LIMIT_SECONDS);
  }

  if (status === "completed") {
    return (
      <Results
        history={history}
        onReset={resetInterview}
        questions={questions}
        selectedTrack={selectedTrack}
        totalScore={totalScore}
      />
    );
  }

  if (status === "not-started") {
    return (
      <Home
        selectedTrackId={selectedTrackId}
        tracks={tracks}
        onSelectTrack={setSelectedTrackId}
        onStart={startInterview}
      />
    );
  }

  return (
    <Interview
      answer={answer}
      currentIndex={currentIndex}
      currentQuestion={currentQuestion}
      onAnswerChange={setAnswer}
      onNextQuestion={goToNextQuestion}
      onReset={resetInterview}
      onSubmit={handleSubmit}
      questions={questions}
      result={result}
      secondsLeft={secondsLeft}
      selectedTrack={selectedTrack}
    />
  );
}

export default Interviewer;
