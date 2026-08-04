import { useCallback, useEffect, useMemo, useState } from "react";
import {
  backendQuestions,
  backendQuestionsMultipleChoice,
} from "../data/BackendQ";
import {
  frontendQuestions,
  frontendQuestionsMultipleChoice,
} from "../data/FrontendQ";
import {
  fullStackQuestions,
  fullStackQuestionsMultipleChoice,
} from "../data/FullStackQ";
import Home from "../pages/Home";
import Interview from "../pages/Interview";
import Results from "../pages/Results";
import { evaluateAnswer } from "../utils/evaluateAnswer";

const QUESTION_TIME_LIMIT_SECONDS = 150;
const SESSION_QUESTION_COUNT = 5;

const tracks = [
  {
    id: "backend",
    label: "Backend",
    description: "APIs, databases, caching, security, and system design.",
    questions: backendQuestions,
    multipleChoiceQuestions: backendQuestionsMultipleChoice,
  },
  {
    id: "frontend",
    label: "Frontend",
    description:
      "React, browser fundamentals, accessibility, and UI architecture.",
    questions: frontendQuestions,
    multipleChoiceQuestions: frontendQuestionsMultipleChoice,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    description: "Client-server flow, auth, deployment, and end-to-end design.",
    questions: fullStackQuestions,
    multipleChoiceQuestions: fullStackQuestionsMultipleChoice,
  },
];

function getRandomSessionQuestions(questions) {
  return [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, SESSION_QUESTION_COUNT);
}

function Interviewer() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [questionMode, setQuestionMode] = useState("theoretical");
  const [status, setStatus] = useState("not-started");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState([]);

  const selectedTrack = useMemo(
    () => tracks.find((track) => track.id === selectedTrackId) ?? null,
    [selectedTrackId],
  );

  const availableQuestions = useMemo(() => {
    if (!selectedTrack) {
      return [];
    }

    return questionMode === "multiple-choice"
      ? selectedTrack.multipleChoiceQuestions
      : selectedTrack.questions;
  }, [questionMode, selectedTrack]);

  const questions =
    status === "not-started" ? availableQuestions : sessionQuestions;
  const currentQuestion = questions[currentIndex];
  const totalScore = history.reduce((sum, item) => sum + item.result.score, 0);
  const questionTimeLimit =
    questionMode === "multiple-choice" ? 30 : QUESTION_TIME_LIMIT_SECONDS;

  const advanceFromQuestion = useCallback(
    (questionList = questions) => {
      const nextIndex = currentIndex + 1;

      if (nextIndex >= questionList.length) {
        setStatus("completed");
        setResult(null);
        setAnswer("");
        setSecondsLeft(0);
        return;
      }

      setCurrentIndex(nextIndex);
      setAnswer("");
      setResult(null);
      setSecondsLeft(questionTimeLimit);
    },
    [currentIndex, questionTimeLimit, questions],
  );

  const finishCurrentQuestion = useCallback(
    ({ autoAdvance = false } = {}) => {
      if (!currentQuestion || result) {
        return;
      }

      const evaluation = evaluateAnswer(answer, currentQuestion);

      setHistory((items) => [
        ...items,
        {
          question: currentQuestion,
          answer,
          result: evaluation,
        },
      ]);

      if (autoAdvance) {
        advanceFromQuestion();
        return;
      }

      setResult(evaluation);
    },
    [advanceFromQuestion, answer, currentQuestion, result],
  );

  const handleSubmit = useCallback(() => {
    if (!currentQuestion || result) {
      return;
    }

    finishCurrentQuestion();
  }, [currentQuestion, finishCurrentQuestion, result]);

  useEffect(() => {
    if (status !== "in-progress" || result || !currentQuestion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setSecondsLeft((seconds) => {
        if (seconds <= 1) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            finishCurrentQuestion({ autoAdvance: true });
          }, 0);
          return 0;
        }

        return seconds - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [currentQuestion, finishCurrentQuestion, result, status]);

  function startInterview() {
    if (!selectedTrack || availableQuestions.length === 0) {
      return;
    }

    const nextQuestions = getRandomSessionQuestions(availableQuestions);

    setSessionQuestions(nextQuestions);
    setStatus("in-progress");
    setCurrentIndex(0);
    setAnswer("");
    setResult(null);
    setHistory([]);
    setSecondsLeft(questionTimeLimit);
  }

  function resetInterview() {
    setStatus("not-started");
    setCurrentIndex(0);
    setAnswer("");
    setResult(null);
    setHistory([]);
    setSecondsLeft(0);
    setSessionQuestions([]);
  }

  function goToNextQuestion() {
    advanceFromQuestion();
  }

  if (status === "completed") {
    return (
      <Results
        history={history}
        onReset={resetInterview}
        questions={questions}
        questionMode={questionMode}
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
        questionMode={questionMode}
        onSelectTrack={setSelectedTrackId}
        onSelectQuestionMode={setQuestionMode}
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
      questionMode={questionMode}
      result={result}
      secondsLeft={secondsLeft}
      selectedTrack={selectedTrack}
    />
  );
}

export default Interviewer;
