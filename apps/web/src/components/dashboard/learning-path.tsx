"use client";
import { useLearningTrack } from "@/hooks/use-dashboard-data";
import { clsx } from "clsx";

export function LearningPath() {
  const { data, isLoading } = useLearningTrack();

  if (isLoading || !data) {
    return (
      <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
        <div className="h-12 w-2/3 animate-pulse rounded-full bg-white/5" />
        <div className="mt-6 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-24 animate-pulse rounded-2xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </section>
    );
  }

  const { currentLevel, upcomingLevel } = data;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Learning Path · {currentLevel.title}
          </h2>
          <p className="text-sm text-white/60">
            Keep momentum by completing two more lessons this week.
          </p>
        </div>
        <button className="rounded-full bg-emerald-400/80 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300">
          Continue module
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {[currentLevel, upcomingLevel].map((level) => (
          <article
            key={level.id}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-200/40 hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                  {level.id}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {level.title}
                </h3>
              </div>
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs",
                  level.status === "in-progress"
                    ? "bg-emerald-400/20 text-emerald-100"
                    : "bg-white/10 text-white/70",
                )}
              >
                {level.status === "in-progress"
                  ? "In progress"
                  : level.status === "queued"
                  ? "Queued"
                  : level.status === "completed"
                  ? "Completed"
                  : "Locked"}
              </span>
            </div>
            <div className="space-y-3">
              {level.modules.map((module) => (
                <div
                  key={module.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                        {module.id}
                      </p>
                      <h4 className="mt-1 text-sm font-semibold text-white">
                        {module.title}
                      </h4>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      {module.lessonsCompleted}/{module.lessonsTotal} lessons
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-white/60">
                    {module.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

