## Architecture Overview

### User Experience Goals
- Responsive, immersive UI with vibrant theming and clear progression cues.
- Frictionless panel setup, multi-level learning paths, and quick access to saved answers.
- Offline-friendly reading mode (future), keyboard accessible, optimized for desk and tablet.

### High-Level System Components
1. **Front-End Web App (Next.js + React + TypeScript)**
   - Pages/Routes: dashboard, learn modules, practice bank, panel simulator, profile/settings.
   - Design system with Tailwind CSS + custom theme tokens (colorful gradients, accessibility).
   - State management: Zustand for lightweight global state (auth, progress, panel config).
   - Client-side caching via React Query for API data (modules, questions, sessions).
   - Component storybook for collaborative UI iteration.
2. **Backend API (NestJS + TypeScript)**
   - Modular architecture: Auth, Content, Panel, Progress, Analytics.
   - REST + GraphQL hybrid (REST for auth/session, GraphQL for flexible content queries).
   - Rate limiting, input validation (class-validator), OpenAPI documentation.
3. **Database (PostgreSQL)**
   - Relational schema matching spec (User, Module, Lesson, Question, PanelSession, Response, Progress).
   - Use Prisma ORM for schema migrations and type-safe access.
4. **Storage**
   - S3-compatible bucket for user attachments (audio, files) and rich content assets.
5. **Auth**
   - Supabase/Auth0 integration with JWT; role-based access (user, mentor, admin).
6. **Background Jobs**
   - BullMQ (Redis) for streak reminders, adaptive difficulty recalcs, panel analytics.
7. **Observability**
   - Logging (Winston + centralized sink), metrics (Prometheus/OpenTelemetry), error tracking (Sentry).

### Data Flow
1. User authenticates via Auth0 → obtains JWT for API calls.
2. Front-end fetches modules/questions via GraphQL → caches with React Query.
3. Panel simulator orchestrates question flow client-side; responses persisted via REST endpoint.
4. Background jobs update progress metrics and recommendations; UI polls or subscribes via web sockets (future).

### Panel Simulation Engine
- Client orchestrator for timing, question sequencing, follow-ups.
- Panel configuration stored server-side for persistence and analytics.
- Support for branching questions based on user confidence/self-score.
- Future upgrade: server-simulated panel persona using LLM for dynamic responses.

### Theming & UI Library
- Tailwind CSS with custom config for brand palette (primary gradient, accent colors).
- Component primitives: cards, progress bars, badges, timeline, question forms, rubric scoring.
- Motion: Framer Motion for smooth transitions (module completion, panel progress).

### Testing Strategy
- Unit tests: Jest for front-end components + backend services.
- Integration tests: Playwright for user flows (panel setup, practice session).
- Contract tests: GraphQL schema validation, REST endpoint schemas.
- Linting/formatting: ESLint, Prettier, StyleLint (Tailwind plugin).

### DevOps & Deployment
- Monorepo (TurboRepo) for shared types and utilities.
- CI (GitHub Actions): lint/test/build pipelines, preview deployments (Vercel for front-end).
- Staging + production environments with environment-specific configs.
- IaC (Terraform) for backend infrastructure (Postgres, Redis, buckets).

### MVP Scope Alignment
- Core flows: auth, dashboard, learning modules, panel simulation (Markets Treasurer), question bank, saved answers.
- Essential analytics: progress chart, difficulty mix, last panel performance.
- Admin console (future) to manage content and track user performance.

