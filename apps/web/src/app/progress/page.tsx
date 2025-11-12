import { LineChart } from "lucide-react";

const metrics = [
  {
    label: "Confidence",
    description: "Self-assessed after each panel session.",
    values: [6.2, 6.5, 6.9, 7.1, 7.5, 7.8],
  },
  {
    label: "Accuracy",
    description: "Panel rubric scores (accuracy dimension).",
    values: [58, 61, 63, 67, 70, 72],
  },
  {
    label: "Depth",
    description: "Panel rubric scores (depth/structure dimension).",
    values: [54, 56, 60, 64, 66, 70],
  },
];

const goals = [
  "Complete Balance Sheet Strategies module",
  "Schedule crisis escalation dry-run with mentor",
  "Publish strategic funding memo update",
];

export default function ProgressPage() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">
            Progress Intelligence
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Track how your Markets Treasury mastery is advancing
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Review KPIs across experience, difficulty mix, and rubric scores. Use
            the insights to plan your next week of modules, practice, and panel
            rehearsals.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Track
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Markets Treasurer
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Currently progressing through Level 2 — Applied. XP growth +12%
              week-on-week. Next milestone: unlock Level 3 Strategic panels.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Difficulty Mix
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                Beginner · 24%
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                Intermediate · 52%
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                Senior · 24%
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Active Streak
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">5 days 🔥</h2>
            <p className="mt-4 text-sm text-white/70">
              Keep the streak to unlock a challenge panel with real-time LLM
              follow-ups and mentor feedback credits.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="flex items-center gap-3">
            <LineChart className="h-5 w-5 text-emerald-200" strokeWidth={1.6} />
            <h2 className="text-lg font-semibold text-white">Performance curves</h2>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
              >
                <p className="text-sm font-semibold text-white">{metric.label}</p>
                <p className="mt-1 text-xs">{metric.description}</p>
                <div className="mt-3 flex items-end gap-1">
                  {metric.values.map((value, idx) => (
                    <span
                      key={idx}
                      className="h-16 w-1.5 rounded-full bg-emerald-400/40"
                      style={{ height: `${value * 2}px` }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-white/50">
                  Latest: {metric.values.at(-1)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Upcoming Goals
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {goals.map((goal) => (
              <li
                key={goal}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {goal}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

