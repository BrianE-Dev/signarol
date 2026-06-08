Signarol — System Design
High-Level Goal
Signarol is a:
distributed engineering assessment and talent intelligence platform
The system must support:
•	secure code execution,
•	realtime interview sessions,
•	AI-generated feedback,
•	global rankings,
•	recruiter analytics,
•	and scalable concurrent assessments.
________________________________________
Core System Requirements
Functional Requirements
Developer Side
•	authentication,
•	coding interviews,
•	timed assessments,
•	code submissions,
•	AI feedback,
•	rankings,
•	public profiles.
________________________________________
Recruiter Side
•	candidate filtering,
•	performance analytics,
•	ranked talent discovery,
•	hiring pipelines.
________________________________________
Non-Functional Requirements
Critical Requirements
Security
Untrusted user code must execute safely.
________________________________________
Scalability
Support:
•	thousands of concurrent submissions,
•	realtime updates,
•	distributed workers.
________________________________________
Reliability
No lost submissions.
Consistent scoring.
________________________________________
Low Latency
Submission feedback should feel near-realtime.
________________________________________
Integrity
Anti-cheat and trust systems are mandatory.
________________________________________
High-Level Architecture
                         ┌────────────────────┐
                         │    React Client    │
                         └─────────┬──────────┘
                                   │
                            HTTPS / WSS
                                   │
                    ┌──────────────▼──────────────┐
                    │         API Gateway         │
                    └───────┬─────────┬──────────┘
                            │         │
         ┌──────────────────┘         └──────────────────┐
         │                                               │
 ┌───────▼────────┐                           ┌──────────▼─────────┐
 │ Authentication │                           │ Assessment Service │
 └───────┬────────┘                           └──────────┬─────────┘
         │                                               │
         │                                               │
         │                                  ┌────────────▼────────────┐
         │                                  │     Submission Queue    │
         │                                  │       (BullMQ)          │
         │                                  └────────────┬────────────┘
         │                                               │
         │                                  ┌────────────▼────────────┐
         │                                  │     Worker Cluster      │
         │                                  └────────────┬────────────┘
         │                                               │
         │                                  ┌────────────▼────────────┐
         │                                  │ Docker Sandbox Runners  │
         │                                  └────────────┬────────────┘
         │                                               │
         │                                  ┌────────────▼────────────┐
         │                                  │    Result Aggregator    │
         │                                  └────────────┬────────────┘
         │                                               │
         │                  ┌────────────────────────────┴────────────────────────────┐
         │                  │                                                         │
┌────────▼────────┐ ┌───────▼────────┐ ┌──────────────▼──────────────┐ ┌────────────▼──────────┐
 │ PostgreSQL DB   │  │ Ranking Engine │   │      AI Feedback Engine     │ │  Recruiter Analytics  │
└─────────────────┘ └────────────────┘ └─────────────────────────────┘ └───────────────────────┘
________________________________________
Major Components
<!-- 1. API Gateway -->
Acts as the entry point for all requests.
Responsibilities
•	routing,
•	authentication middleware,
•	rate limiting,
•	validation,
•	logging,
•	websocket upgrade handling.
________________________________________
Why Important?
Prevents:
•	abuse,
•	flooding,
•	invalid requests,
•	unauthorized access.
________________________________________
<!-- 2. Authentication Service -->
Responsibilities
•	signup/login,
•	JWT management,
•	refresh token rotation,
•	recruiter roles,
•	session validation.
________________________________________
Recommended Auth Flow
Client Login
      ↓
Access Token Issued
      ↓
Refresh Token Stored Securely
      ↓
Protected API Access
________________________________________
<!-- 3. Assessment Service -->
Core Business Engine
Handles:
•	interview sessions,
•	challenge retrieval,
•	submission lifecycle,
•	scoring orchestration.
________________________________________
Key Features
Interview Session Management
Tracks:
•	timers,
•	autosaves,
•	tab switching,
•	suspicious behavior.
________________________________________
Challenge Delivery
Supports:
•	frontend,
•	backend,
•	DSA,
•	API/system design challenges.
________________________________________
<!-- 4. Submission Queue System -->
Why Queueing Is Critical
Code execution is expensive.
Without queues:
•	servers crash,
•	requests block,
•	latency spikes.
________________________________________
BullMQ Queue Flow
Submission Created
       ↓
Queue Job Added
       ↓
Worker Picks Job
       ↓
Docker Execution Starts
       ↓
Results Returned
________________________________________
Benefits
•	load balancing,
•	retry handling,
•	horizontal scaling,
•	fault tolerance.
________________________________________
<!-- 5. Worker Cluster -->
Workers process submissions asynchronously.
________________________________________
Responsibilities
Worker Responsibilities
•	create containers,
•	mount code,
•	execute test cases,
•	collect results,
•	destroy containers.
________________________________________
Horizontal Scalability
You can scale workers independently:
5 workers
20 workers
100 workers
depending on traffic.
________________________________________
<!-- 6. Docker Sandbox System -->

Most Critical Security Component
Users submit untrusted code.
Never execute directly on host machines.
________________________________________
Secure Sandbox Architecture
Each submission gets:
•	isolated container,
•	restricted memory,
•	CPU limits,
•	disabled networking,
•	execution timeout,
•	temporary filesystem.
________________________________________
Example Constraints
CPU Limit: 0.5
Memory: 256MB
Timeout: 5s
Internet: disabled
Disk: ephemeral
________________________________________
Execution Flow
Create Container
      ↓
Inject User Code
      ↓
Run Hidden Tests
      ↓
Capture Output
      ↓
Destroy Container
________________________________________
<!-- 7. Result Aggregator -->
Collects:
•	stdout,
•	stderr,
•	execution time,
•	memory usage,
•	pass/fail metrics.
Stores structured execution results.
________________________________________
<!-- 8. AI Feedback Engine -->
Intelligence Layer
Transforms execution data into:
•	interviewer critique,
•	optimization suggestions,
•	readability analysis,
•	engineering observations.
________________________________________
AI Processing Flow
Submission Result
        ↓
Prompt Builder
        ↓
LLM Request
        ↓
Structured Feedback
        ↓
Database Storage
________________________________________
<!-- 9. Ranking Engine -->
Core Competitive Advantage
Produces:
•	readiness scores,
•	percentile rankings,
•	specialization strength,
•	trust metrics.
________________________________________
Ranking Factors
Accuracy
Difficulty
Speed
Consistency
Question Diversity
Integrity Score
Historical Trend
________________________________________
Example Output
Frontend Readiness: 84%
Backend Readiness: 76%
Global Percentile: Top 12%
________________________________________
<!-- 10. Recruiter Analytics Service -->
Enterprise Layer
Supports:
•	candidate filtering,
•	ranking search,
•	recruiter dashboards,
•	hiring pipelines.
________________________________________
Candidate Filters
Frontend Score
Backend Score
Consistency
Trust Score
Language
Region
________________________________________
Database Design
Core Tables
users
profiles
challenges
test_cases
submissions
submission_results
scores
rankings
ai_feedback
sessions
leaderboards
recruiters
saved_candidates
________________________________________
Core Relationships
User
 └── Profile
      └── Submissions
            └── Scores
                  └── Rankings
________________________________________
Realtime System Design
Socket.io Layer
Used for:
•	timer sync,
•	submission updates,
•	leaderboard refreshes,
•	realtime notifications.
________________________________________
Example Events
submission:running
submission:completed
leaderboard:update
timer:warning
ranking:update
________________________________________
Anti-Cheat System Design
Essential For Platform Trust
________________________________________
Frontend Signals
•	tab switching,
•	copy/paste,
•	window blur,
•	inactivity.
________________________________________
Backend Signals
•	suspicious speed,
•	repeated patterns,
•	AI-generated code heuristics,
•	impossible completion timing.
________________________________________
Trust Scoring
Each user gets:
Integrity Score
Used internally in ranking calibration.
________________________________________
Scalability Design
Horizontal Scaling Strategy
Independently Scalable Components
API Servers
Worker Nodes
AI Workers
WebSocket Servers
Recruiter Analytics
________________________________________
Why This Matters
Code execution traffic is unpredictable.
You must scale:
•	workers,
•	queues,
•	websocket servers
without scaling everything else.
________________________________________
Caching Strategy
Redis
Use Redis for:
•	session caching,
•	leaderboard caching,
•	rate limiting,
•	queue management,
•	realtime presence.
________________________________________
Observability & Monitoring
Monitoring Stack
Concern	Tool
Metrics	Prometheus
Dashboards	Grafana
Logs	Winston / Pino
Error Tracking	Sentry
Uptime	Better Stack
________________________________________
Metrics To Track
submission latency
queue depth
worker health
execution failures
AI response latency
ranking update duration
________________________________________
Failure Handling
Important Strategy
If Worker Crashes
•	BullMQ retries job.
________________________________________
If Docker Execution Fails
•	mark submission failed safely.
________________________________________
If AI Service Fails
•	submission still succeeds,
•	AI feedback retried asynchronously.
________________________________________
Recommended MVP System Design
Build First
Core Systems
•	auth,
•	challenge engine,
•	submission queue,
•	Docker execution,
•	scoring,
•	rankings,
•	AI feedback.
________________________________________
Delay Until Later
Avoid early:
•	Kubernetes,
•	microservices explosion,
•	advanced ML,
•	live collaboration,
•	video interviews,
•	mobile apps.
________________________________________
Recommended Evolution Path
Phase 1
Monolith + worker architecture.
________________________________________
Phase 2
Separate:
•	AI service,
•	ranking service,
•	recruiter analytics.
________________________________________
Phase 3
Distributed infrastructure with Kubernetes.
________________________________________
Final Design Philosophy
Signarol’s real product is not:
“coding practice.”
It is:
trusted engineering verification infrastructure.
The entire system design should optimize for:
•	integrity,
•	scalability,
•	execution safety,
•	and credibility under real interview conditions.