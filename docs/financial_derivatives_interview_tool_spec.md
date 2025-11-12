## Vision
- **Audience**: Candidates preparing for front-office Markets & Treasury roles (analyst → senior).
- **Goal**: Provide an interactive learning and practice environment: staged learning paths, simulated interview panels, progress tracking, personalized question banks.
- **Format**: Web-first responsive app with vibrant visual design, clear hierarchy, and accessible controls.

## Core Experience
- **Home Dashboard**
  - At-a-glance progress, streaks, saved answers, recommended next steps.
  - Level selector (`Beginner`, `Intermediate`, `Senior`) with role focus (`Markets`, `Treasury`, `Structuring`).
- **Learning Pathways**
  - Modular curriculum covering derivatives fundamentals → advanced pricing → risk & regulatory topics.
  - Each module includes bite-sized theory cards, calculators, visual aids, practice drills.
  - Unlockable levels ensure scaffolding aligned with difficulty tier.
- **Panel Simulation**
  - Choose track (e.g. Markets Treasurer).
  - Configure panel style: `Rapid Fire`, `Case Study`, `Deep Dive`.
  - Timed rounds, question sequencing, AI-generated follow-ups, ability to pause and annotate answers.
- **Practice Question Bank**
  - Taggable by product type (IR, FX, Credit, Commodities, Hybrids), concept (Greeks, hedging, valuation), and difficulty.
  - Supports multi-format: multiple-choice, structured calculations, open-response, scenario explanation.
  - Users can mark confidence, flag for review, and add custom notes.
- **Saved Answers & Review**
  - Versioned answer history with rich text, math (Katex), attachments.
  - Feedback loop: self-assessment rubric + mentor comments (future scope).
  - Comparison feature across levels to show improvement.
- **Progress Tracking**
  - XP / badge system, module completion, difficulty mix, panel performance metrics.
  - Weekly goals and reminders.
- **Accessibility & UI**
  - High-contrast color palette with accent gradients.
  - Customizable themes (light/dark, corporate vs vibrant).
  - Keyboard navigation and WCAG-compliant structure.

## Content Architecture
- **Learning Modules**
  1. `Foundations`: Time value of money, forwards vs futures, options basics.
  2. `Products`: IRS, basis swaps, caps/floors, swaptions, FX options, commodity structures.
  3. `Pricing & Models`: Black-Scholes, binomial trees, SABR, Monte Carlo.
  4. `Risk`: Greeks, hedging strategies, VaR, stress testing, liquidity.
  5. `Markets & Treasury Focus`: Balance sheet management, FTP, liquidity buffers, ALM.
  6. `Regulation & Compliance`: Basel III/IV, IFRS 9, Dodd-Frank, EMIR.
  7. `Case Studies`: Historical events, structuring mandates, treasury crises.
- **Difficulty Calibration**
  - Beginner: conceptual clarity, simple numerics, guided steps.
  - Intermediate: multi-step calculations, product comparisons, scenario analysis.
  - Senior: portfolio-level reasoning, policy implications, cross-asset linkages.
- **Question Metadata**
  - Difficulty, topic, time estimate, required tools, prerequisites.
  - Interview context (phone screen, superday, on-desk).
  - Suggested follow-up questions for panel mode.
- **Reference Library**
  - Curated briefing notes per track (e.g., Markets Treasury deep dives on funding, governance, macro drivers).
  - Regulatory source excerpts (Basel liquidity standards, IRRBB guidelines).
  - Market primers (yield curve dynamics, cross-currency basis trends).

## Feature Roadmap (MVP → V1)
- **MVP**
  - User accounts with progress persistence.
  - Module library with reading cards and quizzes.
  - Panel simulation (Markets Treasurer) with curated question sets.
  - Basic analytics dashboard and saved answer editor.
- **V1 Enhancements**
  - Adaptive question engine (weights weak areas).
  - Collaboration (mentor feedback, shared panels).
  - Integration with calendar reminders.
  - Advanced visualization (P&L charts, hedging sims).

## Data Model Sketch
- `User`: profile, level, track, settings.
- `Module`: title, description, difficulty, prerequisites.
- `Lesson`: moduleId, content blocks, media, references.
- `Question`: prompt, tags, difficulty, sample answer, hints.
- `PanelSession`: userId, track, mode, question sequence, timestamps.
- `Response`: questionId, userId, answer body, self-score, feedback.
- `Progress`: userId, moduleId, status, XP, lastAccessed.

## UX Considerations
- Use card-based layout with color-coded difficulty.
- Multi-step forms with progress indicators for panel setup.
- Inline calculators for Greeks and P&L to reduce context switching.
- Reflective journaling prompts after each panel to capture insights.
- Mobile-friendly navigation with bottom tab bar (Dashboard, Learn, Practice, Panels, Profile).

## Tech Stack Proposal
- **Frontend**: React (Next.js) + TypeScript, TailwindCSS/Chakra for colorful UI, Zustand or Redux Toolkit for state.
- **Backend**: Node.js (NestJS / Express) or Python (FastAPI) for content APIs; PostgreSQL for relational data.
- **Auth & Storage**: Supabase/Auth0 for auth, S3-compatible storage for attachments.
- **AI Features (Future)**: OpenAI/Gemini for follow-up questions, evaluation hints.
- **Tooling**: Storybook for component library, Playwright/Cypress for E2E tests.

## Open Questions
- Should panel responses support audio/video recording?
- Do we need offline support or native app wrappers?
- How to incorporate real-time market data for context?
- What cadence should reference content (macro/treasury notes) be refreshed to stay current?

## Next Steps
- Validate content outline with SMEs.
- Define detailed question templates and scoring rubrics.
- Create wireframes for dashboard, learning module, and panel flow.
- Build MVP backlog with story sizing and milestones.

