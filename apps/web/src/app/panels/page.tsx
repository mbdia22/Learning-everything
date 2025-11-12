import Link from "next/link";

const panelModes = [
  {
    title: "Rapid Fire",
    description:
      "10 timed questions to blitz key concepts across derivatives, liquidity, and governance.",
    idealFor: "Pre-interview warmups or quick daily streaks.",
    features: ["Timer per question", "Self-score rubric", "Instant replay"],
  },
  {
    title: "Case Study",
    description:
      "Structured scenario with data packs and evolving constraints to mimic on-site panels.",
    idealFor: "Practicing digestion of information under time pressure.",
    features: [
      "Multi-round data releases",
      "Persona-specific follow-ups",
      "Auto-generated scorecard",
    ],
  },
  {
    title: "Deep Dive",
    description:
      "Three thematic threads designed to test strategic insight, risk framing, and communication depth.",
    idealFor: "Final-round practice and senior interviews.",
    features: [
      "Branching follow-up questions",
      "Reflection prompts",
      "Saved answer comparison",
    ],
  },
];

const personas = [
  {
    role: "Head of Treasury Trading",
    focus: "Hedge design, execution detail, P&L guardrails.",
  },
  {
    role: "Liquidity Risk Lead",
    focus: "LCR/NSFR impact, stress assumptions, governance.",
  },
  {
    role: "Regulatory Affairs",
    focus: "Documentation, reporting cadence, policy alignment.",
  },
  {
    role: "Markets Strategist",
    focus: "Macro narratives, cross-asset linkages, client advisory.",
  },
];

export default function PanelsPage() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">
            Panel Simulator
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Configure realistic Markets Treasury interview panels
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Choose your mode, tailor the panel persona mix, and review your
            saved answers alongside rubric feedback. The engine mirrors the
            Banks’ multi-round interview cadence.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {panelModes.map((mode) => (
            <article
              key={mode.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/15"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Mode
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {mode.title}
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  {mode.description}
                </p>
                <p className="mt-2 text-xs text-white/50">{mode.idealFor}</p>
              </div>
              <ul className="flex-1 space-y-2 text-sm text-white/70">
                {mode.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400/80 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
              >
                Launch mode
              </Link>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Panel Personas
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {personas.map((persona) => (
              <article
                key={persona.role}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
              >
                <p className="text-sm font-semibold text-white">
                  {persona.role}
                </p>
                <p className="mt-2 text-xs">{persona.focus}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

