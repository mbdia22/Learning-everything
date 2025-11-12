"use client";
import { useProgressOverview } from "@/hooks/use-dashboard-data";

export function ActivityFeed() {
  const { data, isLoading } = useProgressOverview();

  if (isLoading || !data) {
    return (
      <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="h-6 w-40 animate-pulse rounded-full bg-white/5" />
          <div className="h-5 w-16 animate-pulse rounded-full bg-white/5" />
        </div>
        <div className="mt-5 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-20 animate-pulse rounded-2xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </section>
    );
  }

  const { overview } = data;
  const goals =
    overview.upcomingGoals.length > 0
      ? overview.upcomingGoals
      : [
          "Define new weekly goal from dashboard settings.",
          "Log reflections after panel session.",
        ];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Recent activity</h2>
        <button className="text-xs font-medium text-emerald-200 hover:text-emerald-100">
          View all
        </button>
      </div>
      <div className="mt-5 space-y-4">
        {goals.map((goal) => (
          <article
            key={goal}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
          >
            <p className="font-medium text-white">{goal}</p>
            <p className="mt-1 text-xs text-white/60">
              Goal · align with Markets Treasurer track objectives
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

