import { BookOpenCheck, BrainCircuit, Calculator } from "lucide-react";

const practiceBands = [
  {
    title: "Concept Drills",
    icon: BookOpenCheck,
    description:
      "Flashcards and multiple-choice sets that reinforce derivatives, liquidity metrics, and regulatory definitions.",
    examples: [
      "IR swaps vs CCY swaps scenario",
      "Liquidity Coverage Ratio drivers",
      "FTP curve adjustments quiz",
    ],
  },
  {
    title: "Structured Calculations",
    icon: Calculator,
    description:
      "Step-by-step problem sets covering DV01, swap valuation, liquidity gap analysis, and FTP recalibration.",
    examples: [
      "DV01 hedge sizing worksheet",
      "Liquidity buffer depletion case",
      "FTP repricing post-policy hike",
    ],
  },
  {
    title: "Scenario Responses",
    icon: BrainCircuit,
    description:
      "Short- and long-form prompts to practice articulation, governance reasoning, and strategic framing.",
    examples: [
      "Funding squeeze escalation plan",
      "ALCO briefing on curve inversion",
      "Regulatory follow-up rationale",
    ],
  },
];

export default function PracticePage() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">
            Practice Engine
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Sharpen technical instincts across drills, calculations, and written
            responses
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Each mode is tuned to Markets Treasury panel prep: track your
            confidence, tag questions, and build muscle memory for high-stakes
            interviews.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {practiceBands.map((band) => (
            <article
              key={band.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/15"
            >
              <div className="flex items-center gap-3">
                <band.icon className="h-6 w-6 text-emerald-200" strokeWidth={1.6} />
                <h2 className="text-xl font-semibold text-white">{band.title}</h2>
              </div>
              <p className="text-sm text-white/60">{band.description}</p>
              <div className="flex-1 space-y-2 text-sm text-white/70">
                {band.examples.map((example) => (
                  <p
                    key={example}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {example}
                  </p>
                ))}
              </div>
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-emerald-200/60 hover:text-white">
                Start session
              </button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

