# Markets Treasury Interview Prep Platform

A comprehensive, interactive learning and practice platform designed to help candidates prepare for front-office Markets & Treasury roles. Built with modern web technologies and AI-powered coaching.

## 🎯 Features

- **Learning Pathways**: Structured curriculum covering derivatives fundamentals through advanced treasury strategies
- **Panel Simulation**: Realistic interview panel practice with multiple personas and difficulty levels
- **Progress Tracking**: XP system, streaks, difficulty mix analytics, and personalized goal setting
- **AI Coach**: GPT-4o mini-powered teaching assistant for on-demand explanations and clarifications
- **Practice Bank**: Curated question sets tagged by product type, concept, and difficulty level
- **Saved Answers & Journal**: Versioned answer history with self-assessment rubrics

## 🏗️ Tech Stack

### Frontend
- **Next.js 16** (App Router, React Compiler, Turbopack)
- **TypeScript**
- **Tailwind CSS 4** (vibrant, accessible design system)
- **React Query** (data fetching & caching)
- **Lucide React** (icons)

### Backend
- **NestJS** (modular API architecture)
- **Prisma** (type-safe database ORM)
- **PostgreSQL** (via Docker Compose)
- **OpenAI GPT-4o mini** (AI coaching)

### Infrastructure
- **Docker Compose** (local Postgres)
- **Git** (version control)

## 📋 Prerequisites

- **Node.js** 18+ (v24.11.0 tested)
- **Docker Desktop** (for Postgres)
- **npm** or compatible package manager
- **OpenAI API Key** (for AI coach feature - optional)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/mbdia22/Learning-everything.git
cd Learning-everything
```

### 2. Start PostgreSQL Database

```bash
docker compose up -d postgres
```

This starts a Postgres container on port `5432` with:
- Database: `aurora`
- User: `aurora`
- Password: `aurora`

### 3. Set Up Backend API

```bash
cd apps/api

# Copy environment template
cp env.sample .env

# Edit .env and add your OpenAI API key (optional, for AI coach)
# OPENAI_API_KEY=sk-your-key-here

# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev --name init

# Seed the database with Markets Treasurer content
npm run prisma:seed

# Start the API (defaults to port 3000, or set PORT env var)
PORT=4000 npm run start
```

The API will be available at `http://localhost:4000/api/v1`

### 4. Set Up Frontend

```bash
cd ../web

# Create environment file
echo "NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1" > .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000` (or another port if 3000 is busy)

## 📁 Project Structure

```
Learning-everything/
├── apps/
│   ├── api/                 # NestJS backend
│   │   ├── src/
│   │   │   ├── modules/     # Feature modules (learning, panels, progress)
│   │   │   └── prisma/      # Prisma service & module
│   │   └── prisma/          # Database schema & migrations
│   └── web/                 # Next.js frontend
│       └── src/
│           ├── app/         # App Router pages
│           ├── components/  # React components
│           └── hooks/        # React Query hooks
├── content/                 # Learning content & outlines
├── docs/                    # Documentation & PDFs
└── docker-compose.yml       # Postgres container config
```

## 🎓 Learning Tracks

### Markets Treasurer Track
- **Level 1 - Foundations**: Core concepts, liquidity basics, introductory risk
- **Level 2 - Applied**: Derivatives in treasury context, balance sheet strategies, risk measurement
- **Level 3 - Strategic**: Advanced structuring, regulatory governance, scenario leadership

Each level includes modules with lessons, practice drills, and case studies.

## 🔌 API Endpoints

- `GET /api/v1/health` - Health check
- `GET /api/v1/learning/modules` - Get learning track summary
- `GET /api/v1/panels/upcoming` - Get upcoming panel sessions
- `GET /api/v1/progress/overview` - Get progress metrics

See `docs/api_endpoints.md` for detailed API documentation.

## 🤖 AI Coach Integration

The AI coach uses OpenAI GPT-4o mini to provide:
- On-demand explanations for complex concepts
- Follow-up question generation during panel simulations
- Answer evaluation and feedback (coming soon)

To enable:
1. Get an OpenAI API key from https://platform.openai.com/
2. Add it to `apps/api/.env` as `OPENAI_API_KEY=sk-...`
3. Restart the API server

## 🛠️ Development

### Running Tests

```bash
# Backend
cd apps/api
npm run test

# Frontend
cd apps/web
npm run lint
```

### Database Management

```bash
# View database in Prisma Studio
cd apps/api
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Create new migration
npx prisma migrate dev --name your_migration_name
```

### Environment Variables

**Backend (`apps/api/.env`)**:
- `DATABASE_URL` - Postgres connection string
- `PORT` - API server port (default: 3000)
- `OPENAI_API_KEY` - OpenAI API key (optional)

**Frontend (`apps/web/.env.local`)**:
- `NEXT_PUBLIC_API_URL` - Backend API URL

## 📚 Documentation

- `docs/financial_derivatives_interview_tool_spec.md` - Product specification
- `docs/architecture_plan.md` - System architecture
- `docs/setup.md` - Detailed setup instructions
- `content/markets_treasurer_track_outline.md` - Learning track curriculum

## 🚧 Roadmap

- [ ] Module detail pages with lesson viewer
- [ ] Panel simulation engine with timer and scoring
- [ ] Practice question bank with filtering
- [ ] Saved answers editor with versioning
- [ ] AI-powered answer evaluation
- [ ] Progress analytics dashboard
- [ ] User authentication & multi-user support
- [ ] Mentor feedback system

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Markets Treasury domain expertise from industry specialists
- Interview prep materials from quantitative finance guides
- Built with love for aspiring treasury professionals

---

**Built with ❤️ for Markets Treasury candidates**

