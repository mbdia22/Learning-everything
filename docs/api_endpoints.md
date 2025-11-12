## Initial API Surface (Aurora Markets Interview Studio)

Base URL: `/api/v1`

### System
- `GET /` — Service summary (name, version, key routes).
- `GET /health` — Simple heartbeat with timestamp.

### Learning & Curriculum
- `GET /learning/modules` — Returns Markets Treasurer learning track snapshot (current level, upcoming level, module progress, reference notes) sourced from Prisma/Postgres seed data.

### Panel Simulation
- `GET /panels/upcoming` — Provides next scheduled panel, personas, focus areas, prep checklist, and quick practice drills persisted in Postgres.

### Progress & Analytics
- `GET /progress/overview` — Aggregated KPIs (XP, streak, difficulty mix, metric sparklines, upcoming goals) backed by progress snapshot table.

### Roadmap
- Add authenticated routes for saving responses (`POST /panels/:id/responses`).
- Integrate content management endpoints (`/admin/modules`, `/admin/questions`).
- Stream panel events via WebSocket for real-time simulation feedback.

