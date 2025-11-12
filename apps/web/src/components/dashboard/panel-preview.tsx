"use client";
import { useUpcomingPanel } from "@/hooks/use-dashboard-data";
import { ChevronRight, Timer } from "lucide-react";
import { format } from "date-fns";

export function PanelPreview() {
  const { data, isLoading } = useUpcomingPanel();

  if (isLoading || !data) {
    return (
      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
        <div className="h-12 w-3/4 animate-pulse rounded-full bg-white/5" />
        <div className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
        <div className="space-y-3">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="h-14 animate-pulse rounded-2xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </section>
    );
  }

  const { panel, quickPractice } = data;
  const scheduledLabel = format(
    new Date(panel.scheduledFor),
    "EEEE · HH:mm",
  );

  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-white">{panel.title}</h2>
          <p className="mt-1 text-sm text-white/60">
            {panel.mode} · {scheduledLabel}
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-emerald-300/60 hover:text-white">
          View playbook
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Focus areas
        </p>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          {panel.focusAreas.map((area) => (
            <li key={area} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-white/50">
          Panel personas: {panel.personas.length}
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-white/50">
          Quick tune-ups
        </p>
        {quickPractice.map((item) => (
          <button
            key={item.id}
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80 transition hover:border-emerald-200/40 hover:bg-emerald-400/10 hover:text-white"
          >
            <span>{item.title}</span>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-200">
              <Timer className="h-3.5 w-3.5" strokeWidth={1.5} />
              {item.durationMinutes} min
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

