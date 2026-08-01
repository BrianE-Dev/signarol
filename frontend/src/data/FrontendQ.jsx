export const frontendQuestions = [
  {
    id: 1,
    category: "React",
    difficulty: "junior",
    question: "What is component state in React?",
    type: "concept",
    expectedKeywords: ["data", "component", "changes", "render"],
    idealAnswer: `
Component state is data owned by a component. When state changes, React
re-renders the component so the UI reflects the latest data.
    `,
    explanation: `
State lets React components respond to user actions and other changing values.
    `,
    scoring: {
      base: 10,
      keywordWeight: 2,
    },
    timeLimit: 30,
    interviewer: {
      correct: "Good. You connected state changes to rendering.",
      partial: "You're close. Mention that state changes trigger rendering.",
      wrong: "State is component-owned data that changes over time.",
    },
  },
  {
    id: 2,
    category: "JavaScript",
    difficulty: "junior",
    question: "What is event bubbling?",
    type: "concept",
    expectedKeywords: ["event", "parent", "child", "propagation"],
    idealAnswer: `
Event bubbling happens when an event starts on a child element and then
propagates up through its parent elements.
    `,
    explanation: `
Understanding event propagation helps with handlers, delegation, and stopping events.
    `,
    scoring: {
      base: 10,
      keywordWeight: 2,
    },
    timeLimit: 30,
    interviewer: {
      correct: "Good. You explained the direction of propagation.",
      partial: "You're close. Say how the event moves from child to parent.",
      wrong: "Event bubbling is about propagation through ancestor elements.",
    },
  },
  {
    id: 3,
    category: "Performance",
    difficulty: "mid",
    question: "How would you improve the performance of a slow React page?",
    type: "problem-solving",
    expectedKeywords: [
      "memoization",
      "render",
      "code splitting",
      "profiling",
      "state",
    ],
    idealAnswer: `
Profile the page first, reduce unnecessary renders, memoize expensive work,
split large bundles, and keep state as close as possible to where it is used.
    `,
    explanation: `
Frontend performance work should start with measurement before optimization.
    `,
    scoring: {
      base: 15,
      keywordWeight: 3,
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. You covered both diagnosis and optimization.",
      partial: "You're on track. Add profiling or render reduction.",
      wrong: "Start by measuring, then reduce render and bundle costs.",
    },
  },
  {
    id: 4,
    category: "Accessibility",
    difficulty: "mid",
    question: "What makes a form accessible?",
    type: "concept",
    expectedKeywords: ["label", "keyboard", "error", "focus", "semantic"],
    idealAnswer: `
Accessible forms use semantic controls, clear labels, keyboard support,
visible focus, and helpful error messages tied to the relevant inputs.
    `,
    explanation: `
Accessibility improves usability for assistive technology users and keyboard users.
    `,
    scoring: {
      base: 15,
      keywordWeight: 3,
    },
    timeLimit: 45,
    interviewer: {
      correct: "Good. That is a practical accessibility answer.",
      partial: "You're missing labels, keyboard support, or error handling.",
      wrong:
        "Accessible forms need semantic controls, labels, and focus support.",
    },
  },
  {
    id: 5,
    category: "Architecture",
    difficulty: "senior",
    question: "How do you structure a large frontend application?",
    type: "design",
    expectedKeywords: [
      "components",
      "state",
      "routing",
      "services",
      "features",
    ],
    idealAnswer: `
Organize by features or domains, keep reusable components separate, define
clear routing, isolate API services, and manage state with predictable boundaries.
    `,
    explanation: `
Large frontend apps need ownership boundaries and predictable data flow.
    `,
    scoring: {
      base: 25,
      keywordWeight: 5,
    },
    timeLimit: 60,
    interviewer: {
      correct: "Strong. You described boundaries and maintainability.",
      partial: "Good start. Add state, routing, and service boundaries.",
      wrong:
        "Think about feature ownership, reusable UI, state, and API services.",
    },
  },
];

export const frontendQuestionsMultipleChoice = [
  {
    id: 1,
    category: "React",
    difficulty: "junior",
    question: "What is component state in React?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Data owned by a component that triggers re-render when it changes",
      },
      { id: "B", text: "A global variable shared across all pages" },
      { id: "C", text: "A CSS style object applied to DOM nodes" },
      { id: "D", text: "A backend API response cache" },
    ],
    correctOption: "A",
    scoring: { base: 10 },
    interviewer: {
      correct:
        "Correct. Component state is owned data that drives a re-render.",
      wrong: "Incorrect. State is component-owned data that changes over time.",
    },
  },
  {
    id: 2,
    category: "JavaScript",
    difficulty: "junior",
    question: "What is event bubbling?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "An event moves from child to parent through ancestor elements",
      },
      { id: "B", text: "An event only runs on the window object" },
      { id: "C", text: "A lifecycle hook in React" },
      { id: "D", text: "A CSS transition effect" },
    ],
    correctOption: "A",
    scoring: { base: 10 },
    interviewer: {
      correct:
        "Correct. Bubbling means the event travels upward through parents.",
      wrong:
        "Incorrect. Event bubbling is propagation upward through ancestor elements.",
    },
  },
  {
    id: 3,
    category: "Performance",
    difficulty: "mid",
    question: "What is a good first step when a React page feels slow?",
    type: "multiple-choice",
    options: [
      { id: "A", text: "Profile the page and reduce unnecessary renders" },
      { id: "B", text: "Delete the component tree entirely" },
      { id: "C", text: "Move all state into CSS" },
      { id: "D", text: "Avoid using React hooks" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Performance work starts with profiling and render reduction.",
      wrong:
        "Incorrect. Start with measurement and targeted render optimization.",
    },
  },
  {
    id: 4,
    category: "Accessibility",
    difficulty: "mid",
    question: "What makes a form accessible?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "Semantic controls, labels, keyboard support, and visible focus",
      },
      { id: "B", text: "Only adding more color to the screen" },
      { id: "C", text: "Removing all labels to save space" },
      { id: "D", text: "Avoiding error messages entirely" },
    ],
    correctOption: "A",
    scoring: { base: 15 },
    interviewer: {
      correct:
        "Correct. Accessible forms rely on semantics, labels, and focus behavior.",
      wrong:
        "Incorrect. Accessibility depends on proper labels, keyboard support, and focus.",
    },
  },
  {
    id: 5,
    category: "Architecture",
    difficulty: "senior",
    question: "How should a large frontend app usually be organized?",
    type: "multiple-choice",
    options: [
      {
        id: "A",
        text: "By features or domains with clear component, routing, and state boundaries",
      },
      { id: "B", text: "By keeping all code in one giant component" },
      { id: "C", text: "By storing every API call in CSS files" },
      { id: "D", text: "By ignoring state management entirely" },
    ],
    correctOption: "A",
    scoring: { base: 25 },
    interviewer: {
      correct:
        "Correct. Good large-app structure uses clear boundaries and ownership.",
      wrong:
        "Incorrect. Large apps are usually organized by features and ownership boundaries.",
    },
  },
];
