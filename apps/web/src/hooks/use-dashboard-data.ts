import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

type LearningModuleSummary = {
  id: string;
  title: string;
  description: string;
  lessonsCompleted: number;
  lessonsTotal: number;
  tags: string[];
};

type LearningLevelSummary = {
  id: string;
  title: string;
  status: "locked" | "in-progress" | "completed" | "queued";
  modules: LearningModuleSummary[];
};

type LearningTrackSummary = {
  track: string;
  focus: string[];
  level: "Beginner" | "Intermediate" | "Senior";
  currentLevel: LearningLevelSummary;
  upcomingLevel: LearningLevelSummary;
  referenceNotes: string[];
};

type PanelPersona = {
  role: string;
  focus: string;
  followUps: string[];
};

type PanelSchedule = {
  id: string;
  title: string;
  mode: "Rapid Fire" | "Case Study" | "Deep Dive";
  scheduledFor: string;
  durationMinutes: number;
  personas: PanelPersona[];
  focusAreas: string[];
  preparation: string[];
};

type QuickPractice = {
  id: string;
  title: string;
  durationMinutes: number;
  type: "drill" | "worksheet";
};

type PanelResponse = {
  panel: PanelSchedule;
  quickPractice: QuickPractice[];
};

type ProgressOverview = {
  track: string;
  level: string;
  xp: number;
  weeklyChange: number;
  completedPanels: number;
  streakDays: number;
  upcomingGoals: string[];
};

type DifficultyMix = {
  beginner: number;
  intermediate: number;
  senior: number;
};

type MetricSparkline = {
  label: string;
  values: number[];
};

type ProgressResponse = {
  overview: ProgressOverview;
  difficultyMix: DifficultyMix;
  metricSparklines: MetricSparkline[];
};

export function useLearningTrack() {
  return useQuery({
    queryKey: ["learning", "modules"],
    queryFn: async () => {
      const { data } = await api.get<LearningTrackSummary>(
        "/learning/modules",
      );
      return data;
    },
  });
}

export function useUpcomingPanel() {
  return useQuery({
    queryKey: ["panels", "upcoming"],
    queryFn: async () => {
      const { data } = await api.get<PanelResponse>("/panels/upcoming");
      return data;
    },
  });
}

export function useProgressOverview() {
  return useQuery({
    queryKey: ["progress", "overview"],
    queryFn: async () => {
      const { data } = await api.get<ProgressResponse>("/progress/overview");
      return data;
    },
  });
}

