const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "with",
  "without",
]);

const KEYWORD_VARIANTS = {
  "same result": ["same result", "same outcome", "same response"],
  "multiple requests": [
    "multiple requests",
    "repeated requests",
    "many requests",
  ],
  "no side effects": [
    "no side effects",
    "no additional side effects",
    "no extra effects",
  ],
  "data structure": [
    "data structure",
    "index structure",
    "tree",
    "b tree",
    "b-tree",
  ],
  query: ["query", "queries", "lookup", "lookups"],
  "real-time": ["real-time", "realtime", "live updates"],
  "same result": ["same result", "same outcome", "same response"],
  "fast storage": [
    "fast storage",
    "high performance storage",
    "high-speed storage",
  ],
  stale: ["stale", "outdated"],
  invalidation: ["invalidation", "cache invalidation"],
};

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(" ")
    .filter((token) => token && !STOP_WORDS.has(token));
}

function matchesKeyword(answerText, keyword) {
  const answerTokens = tokenize(answerText);
  const variants = KEYWORD_VARIANTS[keyword] ?? [keyword];

  return variants.some((variant) => {
    const variantText = normalizeText(variant);
    const variantTokens = tokenize(variantText);

    if (!variantTokens.length) {
      return false;
    }

    if (answerText.includes(variantText)) {
      return true;
    }

    const matchedTokenCount = variantTokens.filter((token) =>
      answerTokens.includes(token),
    ).length;
    return matchedTokenCount >= Math.ceil(variantTokens.length * 0.6);
  });
}

function calculateLexicalSimilarity(answerText, idealAnswerText) {
  const answerTokens = new Set(tokenize(answerText));
  const idealTokens = new Set(tokenize(idealAnswerText));

  if (!answerTokens.size || !idealTokens.size) {
    return 0;
  }

  let overlap = 0;
  answerTokens.forEach((token) => {
    if (idealTokens.has(token)) {
      overlap += 1;
    }
  });

  return overlap / Math.max(answerTokens.size, idealTokens.size);
}

export function evaluateAnswer(userAnswer, question) {
  if (!userAnswer || userAnswer.trim() === "") {
    return {
      score: 0,
      level: "wrong",
      feedback: "No answer provided. Speak up.",
    };
  }

  if (question.type === "multiple-choice") {
    const selectedAnswer = String(userAnswer).trim();
    const isCorrect = selectedAnswer === question.correctOption;
    const score = isCorrect ? (question.scoring?.base ?? 10) : 0;

    return {
      score,
      level: isCorrect ? "correct" : "wrong",
      feedback: isCorrect
        ? question.interviewer.correct
        : question.interviewer.wrong,
      matchedKeywords: isCorrect ? 1 : 0,
      totalKeywords: 1,
      correctOption: question.correctOption,
    };
  }

  const normalizedAnswer = normalizeText(userAnswer);
  const { expectedKeywords, scoring, interviewer, idealAnswer } = question;

  const matchedKeywords = expectedKeywords.filter((keyword) =>
    matchesKeyword(normalizedAnswer, keyword),
  ).length;

  const coverage = matchedKeywords / expectedKeywords.length;
  const lexicalSimilarity = calculateLexicalSimilarity(
    normalizedAnswer,
    idealAnswer,
  );
  const confidence = Math.min(1, coverage * 0.7 + lexicalSimilarity * 0.3);
  const totalScore = Math.round(scoring.base * confidence);

  let level;
  let feedback;

  if (confidence >= 0.75) {
    level = "correct";
    feedback = interviewer.correct;
  } else if (confidence >= 0.4) {
    level = "partial";
    feedback = interviewer.partial;
  } else {
    level = "wrong";
    feedback = interviewer.wrong;
  }

  return {
    score: totalScore,
    level,
    feedback,
    matchedKeywords,
    totalKeywords: expectedKeywords.length,
    coverage,
    confidence,
  };
}
