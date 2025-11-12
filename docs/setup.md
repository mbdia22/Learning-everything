## Local Development Setup

### Prerequisites
- Node.js 18+ (Next.js/Nest dev server)
- Docker Desktop (for Postgres)
- npm (bundled with Node)

### Boot Postgres
```bash
cp apps/api/env.sample apps/api/.env  # adjust credentials if desired
docker compose up -d postgres
```

Default credentials are:
- Host: `localhost`
- Port: `5432`
- Database: `aurora`
- User: `aurora`
- Password: `aurora`

Override via environment variables before running Docker if needed.

### Install Dependencies
```bash
cd apps/api && npm install
cd ../web && npm install
```

### Prisma Migrations & Seed
```bash
cd apps/api
npx prisma migrate dev --name init
npm run db:seed
```

### Start Apps
- Backend: `npm run start:dev` inside `apps/api`
- Frontend: `npm run dev` inside `apps/web`

Both services are configured to communicate via `http://localhost:3000/api/v1`.

