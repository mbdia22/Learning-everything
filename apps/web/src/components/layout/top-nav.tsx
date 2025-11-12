import { Bell, Flame, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="hidden rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-100 md:flex md:items-center md:gap-2">
          <Flame className="h-4 w-4 text-emerald-200" strokeWidth={1.6} />
          <span>Streak 5</span>
        </div>
        <p className="text-sm text-white/70">
          Next panel in <span className="font-semibold text-white">2 days</span>
        </p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <div className="relative hidden max-w-sm flex-1 items-center md:flex">
          <Search
            className="pointer-events-none absolute left-4 h-4 w-4 text-white/50"
            strokeWidth={1.5}
          />
          <input
            className="w-full rounded-full border border-white/0 bg-white/10 px-11 py-2 text-sm text-white placeholder:text-white/50 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
            placeholder="Search modules, questions, or panels..."
          />
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-emerald-300/60 hover:text-white">
          <Bell className="h-4 w-4" strokeWidth={1.5} />
          <span className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </button>
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-full bg-white/10 px-3 py-1.5 pr-4 text-sm text-white transition hover:bg-emerald-400/30"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20">
            <Image
              src="https://i.pravatar.cc/80?img=56"
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden text-left leading-tight sm:block">
            <p className="text-xs text-white/60">Welcome back</p>
            <p className="text-sm font-semibold text-white">Ava Merchant</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

