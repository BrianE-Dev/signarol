export const backendQuestions = [
  {
    id: 1,
    category: "Core",
    difficulty: "junior",
    question: "What is a REST API?",
    type: "concept",

    expectedKeywords: ["stateless", "http", "resource", "methods"],

    idealAnswer: `
A REST API is an architectural style that uses HTTP methods 
(GET, POST, PUT, DELETE) to operate on resources. It is stateless, 
meaning each request contains all necessary information.
    `,

    explanation: `
REST ensures scalability and simplicity by making the server stateless 
and using standard HTTP conventions.
    `,

    scoring: {
      base: 10,
      keywordWeight: 2,
    },

    timeLimit: 30, // seconds

    interviewer: {
      correct: "Good. You covered the fundamentals. Keep it concise.",
      partial:
        "You're missing key REST constraints. Think about statelessness and HTTP verbs.",
      wrong: "That's not accurate. Focus on how REST uses HTTP and resources.",
    },
  },

  {
    id: 2,
    category: "Database",
    difficulty: "junior",
    question: "What is indexing in a database?",
    type: "concept",

    expectedKeywords: ["speed", "query", "data structure", "lookup"],

    idealAnswer: `
Indexing is a technique used to speed up data retrieval by creating 
a data structure (like a B-tree) that allows faster lookups.
    `,

    explanation: `
Indexes improve read performance but slow down writes because the index 
must also be updated.
    `,

    scoring: {
      base: 10,
      keywordWeight: 2,
    },

    timeLimit: 30,

    interviewer: {
      correct: "Solid. You understand performance trade-offs.",
      partial: "You're on track, but explain how indexing improves speed.",
      wrong: "No. Indexing is about query optimization, not storage.",
    },
  },

  {
    id: 3,
    category: "API Design",
    difficulty: "mid",
    question: "What is idempotency in APIs?",
    type: "concept",

    expectedKeywords: ["same result", "multiple requests", "no side effects"],

    idealAnswer: `
Idempotency means making the same request multiple times results 
in the same outcome without additional side effects.
    `,

    explanation: `
Critical for retries in distributed systems, especially in payments.
    `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Good. This is critical for reliable systems.",
      partial: "You're close. Think about repeated requests.",
      wrong: "Incorrect. Idempotency is about consistent outcomes.",
    },
  },

  {
    id: 4,
    category: "System Design",
    difficulty: "mid",
    question: "How would you design a URL shortener?",
    type: "design",

    expectedKeywords: ["hash", "database", "redirect", "scaling", "cache"],

    idealAnswer: `
Generate a unique short ID, store mapping in a database, 
use a redirect service, and add caching for performance.
    `,

    explanation: `
At scale, you must handle collisions, caching, and distributed traffic.
    `,

    scoring: {
      base: 20,
      keywordWeight: 4,
    },

    timeLimit: 60,

    interviewer: {
      correct: "Good structure. Now think about scaling to millions.",
      partial: "Basic idea is there, but you're missing scalability concerns.",
      wrong: "This lacks system design thinking. Break it into components.",
    },
  },

  {
    id: 5,
    category: "Distributed Systems",
    difficulty: "senior",
    question: "Explain the CAP theorem.",
    type: "concept",

    expectedKeywords: ["consistency", "availability", "partition"],

    idealAnswer: `
CAP theorem states that in a distributed system, you can only guarantee 
two of three: Consistency, Availability, and Partition Tolerance.
    `,

    explanation: `
Most real systems sacrifice either consistency or availability under partition.
    `,

    scoring: {
      base: 25,
      keywordWeight: 5,
    },

    timeLimit: 60,

    interviewer: {
      correct: "Good. Now give a real-world example.",
      partial: "You're missing one of the CAP components.",
      wrong: "That's incorrect. CAP is fundamental in distributed systems.",
    },
  },

  {
    id: 6,
    category: "Caching",
    difficulty: "mid",
    question: "How does caching work and what are its pitfalls?",
    type: "concept",

    expectedKeywords: [
      "fast storage",
      "frequent data",
      "stale",
      "invalidation",
    ],

    idealAnswer: `
Caching stores frequently accessed data in fast storage like Redis 
to reduce database load and improve performance.
  `,

    explanation: `
Caching improves speed but introduces complexity like stale data 
and cache invalidation challenges.
  `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Good. You understand performance trade-offs.",
      partial: "You're missing cache invalidation or stale data concerns.",
      wrong: "That's incomplete. Caching is about performance optimization.",
    },
  },

  {
    id: 7,
    category: "Security",
    difficulty: "mid",
    question: "How does JWT authentication work?",
    type: "concept",

    expectedKeywords: ["token", "signature", "client", "verify"],

    idealAnswer: `
JWT works by issuing a signed token to the client. The client sends 
the token with each request, and the server verifies the signature 
to authenticate the user.
  `,

    explanation: `
JWT removes the need for server-side sessions but introduces risks 
if tokens are improperly stored.
  `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Good. Now consider security implications.",
      partial: "You're missing how verification works.",
      wrong: "That's incorrect. JWT relies on signed tokens.",
    },
  },

  {
    id: 8,
    category: "Concurrency",
    difficulty: "mid",
    question: "What is a race condition?",
    type: "concept",

    expectedKeywords: ["concurrent", "shared data", "conflict", "inconsistent"],

    idealAnswer: `
A race condition occurs when multiple processes access shared data 
concurrently, leading to unpredictable or inconsistent results.
  `,

    explanation: `
Race conditions are common in concurrent systems and require locking 
or synchronization mechanisms.
  `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Good. Give a real-world example next time.",
      partial: "You're close. Mention concurrency explicitly.",
      wrong: "No. This is about concurrent access issues.",
    },
  },

  {
    id: 9,
    category: "System Design",
    difficulty: "senior",
    question: "How would you design a chat system?",
    type: "design",

    expectedKeywords: [
      "websocket",
      "real-time",
      "queue",
      "database",
      "scaling",
    ],

    idealAnswer: `
Use WebSockets for real-time communication, a message queue for 
asynchronous processing, a database for persistence, and services 
for presence and notifications.
  `,

    explanation: `
At scale, chat systems require distributed systems, message delivery 
guarantees, and offline handling.
  `,

    scoring: {
      base: 25,
      keywordWeight: 5,
    },

    timeLimit: 60,

    interviewer: {
      correct: "Strong. Now explain scaling strategy.",
      partial: "You're missing real-time or scalability aspects.",
      wrong: "This lacks system design depth.",
    },
  },

  {
    id: 10,
    category: "Performance",
    difficulty: "mid",
    question: "How do you debug a slow API?",
    type: "problem-solving",

    expectedKeywords: [
      "database",
      "profiling",
      "latency",
      "logs",
      "monitoring",
    ],

    idealAnswer: `
Start by analyzing database queries, profiling the code, checking 
network latency, and using logs and monitoring tools to identify 
bottlenecks.
  `,

    explanation: `
Optimization without diagnosis leads to wasted effort. Always measure first.
  `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Good. Structured debugging approach.",
      partial: "You're missing diagnostics or tools.",
      wrong: "No. You must diagnose before optimizing.",
    },
  },

  {
    id: 11,
    category: "Distributed Systems",
    difficulty: "senior",
    question: "Explain CAP theorem with a real example",
    type: "concept",

    expectedKeywords: ["consistency", "availability", "partition"],

    idealAnswer: `
CAP theorem states that a distributed system can only guarantee 
two of Consistency, Availability, and Partition Tolerance.

For example, banking systems prioritize consistency, while social 
media systems prioritize availability.
  `,

    explanation: `
Partition tolerance is unavoidable, so systems must trade off between 
consistency and availability.
  `,

    scoring: {
      base: 25,
      keywordWeight: 5,
    },

    timeLimit: 60,

    interviewer: {
      correct: "Good. Real-world application matters here.",
      partial: "You're missing one CAP component.",
      wrong: "That's incorrect. CAP is fundamental.",
    },
  },

  {
    id: 12,
    category: "Architecture",
    difficulty: "mid",
    question: "Monolith vs Microservices?",
    type: "concept",

    expectedKeywords: ["scalable", "complex", "independent", "coupled"],

    idealAnswer: `
Monoliths are simple and tightly coupled but hard to scale. 
Microservices are independent and scalable but introduce 
complexity in communication and deployment.
  `,

    explanation: `
Microservices are not always better; they introduce operational overhead.
  `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Balanced answer. Good.",
      partial: "You're missing trade-offs.",
      wrong: "Oversimplified. Think in trade-offs.",
    },
  },

  {
    id: 13,
    category: "Data Integrity",
    difficulty: "junior",
    question: "What are ACID properties?",
    type: "concept",

    expectedKeywords: ["atomicity", "consistency", "isolation", "durability"],

    idealAnswer: `
ACID stands for Atomicity, Consistency, Isolation, and Durability, 
ensuring reliable database transactions.
  `,

    explanation: `
These properties guarantee correctness even in failures.
  `,

    scoring: {
      base: 10,
      keywordWeight: 2,
    },

    timeLimit: 30,

    interviewer: {
      correct: "Good. Solid fundamentals.",
      partial: "You're missing one property.",
      wrong: "Incorrect. These are core DB guarantees.",
    },
  },

  {
    id: 14,
    category: "Advanced",
    difficulty: "mid",
    question: "What is idempotency and why is it critical in APIs?",
    type: "concept",

    expectedKeywords: ["same result", "repeated requests", "no side effects"],

    idealAnswer: `
Idempotency ensures that repeated requests produce the same result 
without unintended side effects, which is critical for retries in systems 
like payments.
  `,

    explanation: `
Without idempotency, retries can cause duplicate operations.
  `,

    scoring: {
      base: 15,
      keywordWeight: 3,
    },

    timeLimit: 45,

    interviewer: {
      correct: "Good. This is crucial in distributed systems.",
      partial: "You're missing why it's important.",
      wrong: "Incorrect. Focus on repeatable outcomes.",
    },
  },

  {
    id: 15,
    category: "Real-world",
    difficulty: "senior",
    question: "Tell me about a backend system you built",
    type: "behavioral",

    expectedKeywords: ["architecture", "scaling", "trade-offs", "challenges"],

    idealAnswer: `
Describe the problem, architecture, decisions made, trade-offs, 
and challenges faced while building the system.
  `,

    explanation: `
Interviewers evaluate real experience, not theory.
  `,

    scoring: {
      base: 20,
      keywordWeight: 4,
    },

    timeLimit: 60,

    interviewer: {
      correct: "Good structure. Keep it concrete.",
      partial: "Too vague. Be specific.",
      wrong: "This lacks real experience detail.",
    },
  },
];

export const backendQuestionsMultipleChoice = [
  {
    id: 1,
    category: "Core",
    difficulty: "junior",
    question: "What is a REST API?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "A database that stores HTTP requests" },
      {
        id: "B",
        text: "An architectural style using HTTP methods on resources",
      },
      { id: "C", text: "A browser-only rendering pattern" },
      { id: "D", text: "A client-side validation library" },
    ],
    correctOption: "B",
    scoring: { base: 10 },
    interviewer: {
      correct: "Correct. REST is resource-oriented and uses HTTP methods.",
      wrong:
        "Incorrect. REST is an HTTP-based architectural style for resources.",
    },
  },
  {
    id: 2,
    category: "Database",
    difficulty: "junior",
    question: "What is indexing in a database?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "A way to store data in a flat file" },
      { id: "B", text: "A data structure that speeds up lookup" },
      { id: "C", text: "A backup mechanism for failed writes" },
      { id: "D", text: "A synonym for normalization" },
    ],
    correctOption: "B",
    scoring: { base: 10 },
    interviewer: {
      correct: "Correct. Indexes improve lookup performance.",
      wrong: "Incorrect. Indexing adds a lookup structure to speed reads.",
    },
  },
  {
    id: 3,
    category: "API Design",
    difficulty: "mid",
    question: "What does idempotency mean in an API?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Each request must be processed exactly once" },
      {
        id: "B",
        text: "Repeated requests produce the same result without extra side effects",
      },
      { id: "C", text: "Requests always return a 500 error" },
      { id: "D", text: "Only GET requests can be retried" },
    ],
    correctOption: "B",
    scoring: { base: 15 },
    interviewer: {
      correct: "Correct. Idempotency is about repeatable outcomes.",
      wrong:
        "Incorrect. Idempotency means repeated calls stay safe and consistent.",
    },
  },
  {
    id: 4,
    category: "System Design",
    difficulty: "mid",
    question:
      "Which is most important when designing a URL shortener at scale?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "A hash or unique ID plus redirect lookup and caching" },
      { id: "B", text: "Rendering all URLs into HTML on the frontend" },
      { id: "C", text: "Storing every mapping in the browser localStorage" },
      { id: "D", text: "Avoiding database storage entirely" },
    ],
    correctOption: "A",
    scoring: { base: 20 },
    interviewer: {
      correct:
        "Correct. A shortener needs ID generation, storage, and redirect flow.",
      wrong:
        "Incorrect. Scaling a shortener depends on storage, redirect logic, and caching.",
    },
  },
  {
    id: 5,
    category: "Distributed Systems",
    difficulty: "senior",
    question: "In the CAP theorem, which three properties are involved?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Consistency, Availability, Partition Tolerance" },
      { id: "B", text: "Concurrency, Authentication, Persistence" },
      { id: "C", text: "Caching, Auditing, Performance" },
      { id: "D", text: "Reliability, Scaling, Isolation" },
    ],
    correctOption: "A",
    scoring: { base: 25 },
    interviewer: {
      correct:
        "Correct. CAP stands for Consistency, Availability, and Partition Tolerance.",
      wrong:
        "Incorrect. CAP refers to Consistency, Availability, and Partition Tolerance.",
    },
  },
  {
    id: 6,
    category: "Caching",
    difficulty: "mid",
    question: "What is the main downside of caching frequently accessed data?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "It guarantees strong consistency for every request" },
      {
        id: "B",
        text: "It can return stale data unless invalidation is handled",
      },
      { id: "C", text: "It always increases write latency" },
      { id: "D", text: "It removes the need for a database" },
    ],
    correctOption: "B",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Stale data and invalidation are the key cache trade-offs.",
      wrong:
        "Incorrect. Caching often introduces stale data and invalidation concerns.",
    },
  },
  {
    id: 7,
    category: "Security",
    difficulty: "mid",
    question: "How does JWT authentication work?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "The server signs a token and the client sends it for verification",
      },
      { id: "B", text: "The browser stores the password in a cookie" },
      { id: "C", text: "JWT is only for database encryption" },
      { id: "D", text: "JWT replaces the backend entirely" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. JWT relies on signed tokens that are verified by the server.",
      wrong: "Incorrect. JWT uses signed tokens that are sent and verified.",
    },
  },
  {
    id: 8,
    category: "Concurrency",
    difficulty: "mid",
    question: "What is a race condition?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "A failure when two processes access shared data concurrently and produce inconsistent results",
      },
      { id: "B", text: "A database backup process" },
      { id: "C", text: "A special HTTP status code" },
      { id: "D", text: "A load balancer timeout" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Race conditions come from concurrent access to shared state.",
      wrong:
        "Incorrect. A race condition is a concurrency bug with shared mutable state.",
    },
  },
  {
    id: 9,
    category: "System Design",
    difficulty: "senior",
    question:
      "Which component is most associated with real-time chat delivery?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "WebSockets for live communication" },
      { id: "B", text: "A static HTML page only" },
      { id: "C", text: "A build step without a queue" },
      { id: "D", text: "A mock API response" },
    ],
    correctOption: "A",
    scoring: { base: 25 },
    interviewer: {
      correct: "Correct. WebSockets are widely used for realtime chat updates.",
      wrong:
        "Incorrect. Real-time chat usually relies on a bidirectional channel like WebSockets.",
    },
  },
  {
    id: 10,
    category: "Performance",
    difficulty: "mid",
    question: "What is the best first step when debugging a slow API?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Add random retries and hope the problem disappears" },
      {
        id: "B",
        text: "Measure latency, logs, and bottlenecks before optimizing",
      },
      { id: "C", text: "Rewrite the whole backend in another language" },
      { id: "D", text: "Disable monitoring tools" },
    ],
    correctOption: "B",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Diagnosis via profiling and logs comes before optimization.",
      wrong:
        "Incorrect. Effective debugging starts with measurement, logs, and profiling.",
    },
  },
  {
    id: 11,
    category: "Distributed Systems",
    difficulty: "senior",
    question:
      "Which CAP property is impossible to avoid in a distributed system?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Partition Tolerance" },
      { id: "B", text: "Serverless deployment" },
      { id: "C", text: "Caching" },
      { id: "D", text: "Object serialization" },
    ],
    correctOption: "A",
    scoring: { base: 25 },
    interviewer: {
      correct:
        "Correct. Partition tolerance is a core assumption in distributed systems.",
      wrong:
        "Incorrect. Partition tolerance is one of the CAP guarantees you must account for.",
    },
  },
  {
    id: 12,
    category: "Architecture",
    difficulty: "mid",
    question: "Which statement best contrasts monoliths and microservices?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Monoliths are simple but tightly coupled; microservices are independently scalable but more complex",
      },
      { id: "B", text: "Microservices never have operational overhead" },
      { id: "C", text: "Monoliths always outperform microservices" },
      { id: "D", text: "Microservices are only used for frontend rendering" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. The trade-off is simplicity versus operational complexity.",
      wrong:
        "Incorrect. Microservices trade deployment simplicity for independence and complexity.",
    },
  },
  {
    id: 13,
    category: "Data Integrity",
    difficulty: "junior",
    question: "What does ACID stand for?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Atomicity, Consistency, Isolation, Durability" },
      { id: "B", text: "Availability, Consistency, Integrity, Durability" },
      { id: "C", text: "Authorization, Caching, Isolation, Data" },
      { id: "D", text: "Access, Control, Integrity, Delivery" },
    ],
    correctOption: "A",
    scoring: { base: 10 },
    interviewer: {
      correct: "Correct. ACID is the standard set of transaction guarantees.",
      wrong:
        "Incorrect. ACID stands for Atomicity, Consistency, Isolation, and Durability.",
    },
  },
  {
    id: 14,
    category: "Advanced",
    difficulty: "mid",
    question: "Why is idempotency especially important for retries in APIs?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "It prevents accidental duplicate side effects on repeated requests",
      },
      { id: "B", text: "It disables all retry behavior" },
      { id: "C", text: "It removes the need for network errors" },
      { id: "D", text: "It makes all requests non-deterministic" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Idempotency helps retries remain safe and predictable.",
      wrong:
        "Incorrect. Idempotency protects against harmful duplicate effects on retries.",
    },
  },
  {
    id: 15,
    category: "Real-world",
    difficulty: "senior",
    question: "What should a strong backend system walkthrough include?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Problem, architecture, trade-offs, and challenges" },
      { id: "B", text: "Only a list of technologies used" },
      { id: "C", text: "Only the final deployment screenshot" },
      { id: "D", text: "Only the database schema" },
    ],
    correctOption: "A",
    scoring: { base: 20 },
    interviewer: {
      correct:
        "Correct. Great system walkthroughs explain decisions and trade-offs.",
      wrong:
        "Incorrect. A strong walkthrough covers architecture, decisions, and trade-offs.",
    },
  },
];
