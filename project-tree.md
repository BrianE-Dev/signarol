signarol/
├── frontend/                     # React + Vite client
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── index.html
│   ├── src/
│   │   ├── assets/               # images, icons, etc.
│   │   ├── components/           # reusable UI components
│   │   │   ├── FeatureCard.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/              # global state
│   │   ├── data/                 # static interview question data
│   │   ├── hooks/                # custom React hooks
│   │   ├── pages/                # page-level components
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Interview.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── RecruiterDashboard.jsx
│   │   │   ├── Results.jsx
│   │   │   └── UserProfile.jsx
│   │   ├── services/             # API calls / backend integration
│   │   ├── utils/                # helper functions
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                      # Backend/API workspace scaffold
│   ├── app/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── workers/
│   └── tests/
│
├── system-design.md
├── project-tree.md
├── README.md
└── .gitignore
