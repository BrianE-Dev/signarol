export function evaluateAnswer(userAnswer, question) {
  if (!userAnswer || userAnswer.trim() === "") {
    return {
      score: 0,
      level: "wrong",
      feedback: "No answer provided. Speak up."
    };
  }

  const normalizedAnswer = userAnswer.toLowerCase();

  const { expectedKeywords, scoring, interviewer } = question;

  let matchedKeywords = 0;

  // ✅ Keyword matching
  expectedKeywords.forEach((keyword) => {
    if (normalizedAnswer.includes(keyword.toLowerCase())) {
      matchedKeywords++;
    }
  });

  // ✅ Score calculation
  const keywordScore = matchedKeywords * scoring.keywordWeight;
  const totalScore = Math.min(scoring.base, keywordScore);

  // ✅ Coverage ratio
  const coverage = matchedKeywords / expectedKeywords.length;

  let level;
  let feedback;

  if (coverage >= 0.75) {
    level = "correct";
    feedback = interviewer.correct;
  } else if (coverage >= 0.4) {
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
    totalKeywords: expectedKeywords.length
  };
}