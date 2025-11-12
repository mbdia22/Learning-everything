"use client";
import { useProgressOverview } from "@/hooks/use-dashboard-data";

export function ProgressOverview() {
  const { data, isLoading } = useProgressOverview();

  if (isLoading || !data) {
    return (
      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <article
            key={index}
            className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
          >
            <div className="h-24 animate-pulse rounded-2xl bg-white/5" />
          </article>
        ))}
      </section>
    );
  }

  const {
    overview: { track, level, weeklyChange },
    difficultyMix,
    metricSparklines,
  } = data;

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <article className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/20">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/30 via-emerald-500/5 to-transparent p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/50">
            {track}
          </p>
          <p className="mt-3 text-2xl font-semibold text-white">{level}</p>
          <p className="mt-2 text-xs text-white/60">
            {weeklyChange > 0 ? "+" : ""}
            {weeklyChange}% vs last week
          </p>
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/20">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/30 via-sky-500/5 to-transparent p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/50">
            Difficulty mix
          </p>
          <div className="mt-3 flex gap-3 text-sm text-white">
            <span className="rounded-full bg-white/10 px-3 py-1">
              Beginner {difficultyMix.beginner}%
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Intermediate {difficultyMix.intermediate}%
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Senior {difficultyMix.senior}%
            </span>
          </div>
          <p className="mt-2 text-xs text-white/60">
            Balanced exposure across question bank
          </p>
        </div>
      </article>

        <article
        className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/20"
        >
        <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/30 via-fuchsia-500/5 to-transparent p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/50">
            Momentum
          </p>
          <div className="mt-3 space-y-2 text-sm text-white">
            {metricSparklines.map((metric) => (
              <p key={metric.label} className="flex justify-between text-xs">
                <span>{metric.label}</span>
                <span>{metric.values.at(-1)}</span>
              </p>
            ))}
          </div>
          <p className="mt-2 text-xs text-white/60">
            Latest scores from panel sessions
          </p>
        </div>
        </article>
    </section>
  );
}

