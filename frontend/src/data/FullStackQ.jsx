export const fullStackQuestions = [
  {
    id: 1,
    category: "API Integration",
    difficulty: "junior",
    question: "How does a frontend app communicate with a backend API?",
    type: "concept",
    expectedKeywords: ["http", "request", "response", "json"],
    idealAnswer: `
A frontend app sends HTTP requests to backend endpoints and receives responses,
often as JSON, which it then uses to update the UI.
    `,
    explanation: `
This is the basic client-server contract for most web applications.
    `,
    scoring: {
      base: 10,
      keywordWeight: 2
    },
    timeLimit: 30,
    interviewer: {
      correct: "Good. You described the client-server exchange clearly.",
      partial: "You're close. Mention requests, responses, and JSON.",
      wrong: "The frontend usually talks to the backend through HTTP APIs."
    }
  },
  {
    id: 2,
    category: "Authentication",
    difficulty: "mid",
    question: "How would you handle authentication in a full-stack app?",
    type: "concept",
    expectedKeywords: ["login", "token", "session", "secure", "middleware"],
    idealAnswer: `
The backend verifies login credentials, issues a secure session or token,
and protects routes with middleware. The frontend stores auth state and sends
credentials or tokens with protected requests.
    `,
    explanation: `
Authentication requires both UI state and backend enforcement.
    `,
    scoring: {
      base: 15,
      keywordWeight: 3
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. You covered both client state and backend protection.",
      partial: "You're missing either secure token/session handling or route protection.",
      wrong: "Auth must be verified by the backend, not only shown in the UI."
    }
  },
  {
    id: 3,
    category: "Data Flow",
    difficulty: "mid",
    question: "How do you keep frontend state in sync with backend data?",
    type: "problem-solving",
    expectedKeywords: ["fetch", "cache", "refresh", "mutation", "loading"],
    idealAnswer: `
Fetch server data, show loading and error states, cache results where useful,
refresh after mutations, and avoid duplicating server state unnecessarily.
    `,
    explanation: `
Clear data ownership prevents stale UI and confusing user experiences.
    `,
    scoring: {
      base: 15,
      keywordWeight: 3
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. You understand server state and UI state boundaries.",
      partial: "You're close. Add cache, refresh, or mutation handling.",
      wrong: "Think about fetching, cache, loading states, and refreshing after changes."
    }
  },
  {
    id: 4,
    category: "Deployment",
    difficulty: "mid",
    question: "What should you consider when deploying a full-stack app?",
    type: "concept",
    expectedKeywords: ["environment", "database", "build", "security", "monitoring"],
    idealAnswer: `
Prepare frontend builds, backend environment variables, database connections,
security settings, logging, and monitoring before deploying.
    `,
    explanation: `
Deployment is not just uploading code; runtime configuration and observability matter.
    `,
    scoring: {
      base: 15,
      keywordWeight: 3
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. That is a production-minded answer.",
      partial: "You're missing configuration, database, security, or monitoring.",
      wrong: "Deployments need builds, env config, data setup, security, and monitoring."
    }
  },
  {
    id: 5,
    category: "Architecture",
    difficulty: "senior",
    question: "How would you design this AI interviewer app end to end?",
    type: "design",
    expectedKeywords: ["frontend", "api", "database", "queue", "ai", "realtime"],
    idealAnswer: `
Use a frontend interview UI, backend APIs for sessions and submissions, a database
for users and results, queues for expensive evaluation work, AI services for
feedback, and realtime updates for live interview state.
    `,
    explanation: `
End-to-end design should connect user experience to backend services and scale concerns.
    `,
    scoring: {
      base: 25,
      keywordWeight: 5
    },
    timeLimit: 60,
    interviewer: {
      correct: "Strong. You tied product flow to system architecture.",
      partial: "Good start. Add queues, AI evaluation, persistence, or realtime updates.",
      wrong: "Break it into frontend, API, data, AI evaluation, and realtime flow."
    }
  }
];
