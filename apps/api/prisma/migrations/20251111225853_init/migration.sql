-- CreateTable
CREATE TABLE "TrackSnapshot" (
    "id" SERIAL NOT NULL,
    "track" TEXT NOT NULL,
    "focus" TEXT[],
    "level" TEXT NOT NULL,
    "currentLevel" JSONB NOT NULL,
    "upcomingLevel" JSONB NOT NULL,
    "referenceNotes" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrackSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PanelSnapshot" (
    "id" SERIAL NOT NULL,
    "panel" JSONB NOT NULL,
    "quickPractice" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PanelSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressSnapshot" (
    "id" SERIAL NOT NULL,
    "track" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "xp" INTEGER NOT NULL,
    "weeklyChange" INTEGER NOT NULL,
    "completedPanels" INTEGER NOT NULL,
    "streakDays" INTEGER NOT NULL,
    "upcomingGoals" TEXT[],
    "difficultyMix" JSONB NOT NULL,
    "metricSparklines" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgressSnapshot_pkey" PRIMARY KEY ("id")
);
