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
      keywordWeight: 2,
    },
    timeLimit: 30,
    interviewer: {
      correct: "Good. You described the client-server exchange clearly.",
      partial: "You're close. Mention requests, responses, and JSON.",
      wrong: "The frontend usually talks to the backend through HTTP APIs.",
    },
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
      keywordWeight: 3,
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. You covered both client state and backend protection.",
      partial:
        "You're missing either secure token/session handling or route protection.",
      wrong: "Auth must be verified by the backend, not only shown in the UI.",
    },
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
      keywordWeight: 3,
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. You understand server state and UI state boundaries.",
      partial: "You're close. Add cache, refresh, or mutation handling.",
      wrong:
        "Think about fetching, cache, loading states, and refreshing after changes.",
    },
  },
  {
    id: 4,
    category: "Deployment",
    difficulty: "mid",
    question: "What should you consider when deploying a full-stack app?",
    type: "concept",
    expectedKeywords: [
      "environment",
      "database",
      "build",
      "security",
      "monitoring",
    ],
    idealAnswer: `
Prepare frontend builds, backend environment variables, database connections,
security settings, logging, and monitoring before deploying.
    `,
    explanation: `
Deployment is not just uploading code; runtime configuration and observability matter.
    `,
    scoring: {
      base: 15,
      keywordWeight: 3,
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. That is a production-minded answer.",
      partial:
        "You're missing configuration, database, security, or monitoring.",
      wrong:
        "Deployments need builds, env config, data setup, security, and monitoring.",
    },
  },
  {
    id: 5,
    category: "Architecture",
    difficulty: "senior",
    question: "How would you design this AI interviewer app end to end?",
    type: "design",
    expectedKeywords: [
      "frontend",
      "api",
      "database",
      "queue",
      "ai",
      "realtime",
    ],
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
      keywordWeight: 5,
    },
    timeLimit: 60,
    interviewer: {
      correct: "Strong. You tied product flow to system architecture.",
      partial:
        "Good start. Add queues, AI evaluation, persistence, or realtime updates.",
      wrong:
        "Break it into frontend, API, data, AI evaluation, and realtime flow.",
    },
  },
];

export const fullStackQuestionsMultipleChoice = [
  {
    id: 1,
    category: "API Integration",
    difficulty: "junior",
    question: "How does a frontend app communicate with a backend API?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "By sending HTTP requests and receiving JSON responses",
      },
      { id: "B", text: "By directly editing the database from the browser" },
      { id: "C", text: "By using CSS media queries only" },
      { id: "D", text: "By importing the backend into the DOM" },
    ],
    correctOption: "A",
    scoring: { base: 10 },
    interviewer: {
      correct:
        "Correct. Frontends usually talk to APIs through HTTP requests and JSON responses.",
      wrong:
        "Incorrect. A frontend communicates with the backend over HTTP using request-response cycles.",
    },
  },
  {
    id: 2,
    category: "Authentication",
    difficulty: "mid",
    question: "What is the usual backend responsibility in auth flows?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Verify credentials and protect routes with middleware",
      },
      { id: "B", text: "Store secrets only in CSS" },
      { id: "C", text: "Hide the login form forever" },
      { id: "D", text: "Only validate the UI label text" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. The backend should validate auth and enforce route protection.",
      wrong:
        "Incorrect. Auth requires backend verification and protected route enforcement.",
    },
  },
  {
    id: 3,
    category: "Data Flow",
    difficulty: "mid",
    question: "How do you keep frontend state in sync with backend data?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Fetch, show loading/error states, cache, and refresh after mutations",
      },
      { id: "B", text: "Only render local strings and ignore the network" },
      { id: "C", text: "Never fetch data more than once" },
      { id: "D", text: "Delete the cache after every request" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Syncing UI state with backend data requires loading, caching, and refresh handling.",
      wrong:
        "Incorrect. Keeping the UI consistent usually means fetching, caching, and refreshing properly.",
    },
  },
  {
    id: 4,
    category: "Deployment",
    difficulty: "mid",
    question: "What matters most before deploying a full-stack app?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Environment config, database connections, build output, security, and monitoring",
      },
      { id: "B", text: "Only the frontend color palette" },
      { id: "C", text: "Ignoring logs" },
      { id: "D", text: "Deleting all env variables" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Deployment requires runtime configuration and observability.",
      wrong:
        "Incorrect. Production deployment needs config, security, and monitoring as well as code.",
    },
  },
  {
    id: 5,
    category: "Architecture",
    difficulty: "senior",
    question: "How would you design this AI interviewer app end to end?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Frontend UI, backend APIs, database, queue, AI services, and realtime updates",
      },
      { id: "B", text: "Only a single HTML file with no backend" },
      { id: "C", text: "Only the database schema without a frontend" },
      { id: "D", text: "Only a static screenshot of the app" },
    ],
    correctOption: "A",
    scoring: { base: 25 },
    interviewer: {
      correct:
        "Correct. An end-to-end design connects frontend UX to backend services and AI flow.",
      wrong:
        "Incorrect. A robust design includes frontend, API, persistence, queues, AI, and realtime.",
    },
  },
];
