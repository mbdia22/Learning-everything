import Link from "next/link";

const modules = [
  {
    id: "L1",
    title: "Foundations",
    description: "Conceptual grounding for derivatives and treasury basics.",
    sections: ["Core Concepts", "Liquidity & Capital Basics", "Introductory Risk"],
  },
  {
    id: "L2",
    title: "Applied",
    description: "Treasury derivative usage, balance sheet strategies, risk measurement.",
    sections: [
      "Derivatives in Treasury Context",
      "Balance Sheet Strategies",
      "Risk Measurement & Reporting",
    ],
  },
  {
    id: "L3",
    title: "Strategic",
    description:
      "Advanced structuring, governance, and scenario leadership for senior roles.",
    sections: [
      "Advanced Structuring",
      "Regulatory & Governance",
      "Strategic Advisory & Scenario Leadership",
    ],
  },
];

export default function LearnPage() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">
            Learning Pathways
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Master Markets Treasury fundamentals to strategic leadership
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Each level blends theory, calculators, and case work pulled from the
            Markets Treasurer track. You can jump into a module for quick review
            or follow the recommended order to unlock senior-level panels.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {modules.map((module) => (
            <article
              key={module.id}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:border-emerald-200/40 hover:bg-white/15"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {module.id}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {module.title}
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  {module.description}
                </p>
              </div>
              <div className="flex-1 space-y-2 text-sm text-white/70">
                {module.sections.map((section) => (
                  <p
                    key={section}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {section}
                  </p>
                ))}
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400/80 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
              >
                View module
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

