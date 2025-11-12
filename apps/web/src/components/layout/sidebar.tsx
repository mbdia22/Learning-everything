"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  PanelsTopLeft,
  LineChart,
  NotebookPen,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Learn", href: "/learn", icon: BookOpen },
  { label: "Practice", href: "/practice", icon: Brain },
  { label: "Panel Sim", href: "/panels", icon: PanelsTopLeft },
  { label: "Progress", href: "/progress", icon: LineChart },
  { label: "Journal", href: "/journal", icon: NotebookPen },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/5 bg-white/5 lg:flex lg:flex-col">
      <div className="px-6 py-8">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/90 text-lg font-semibold text-white shadow-lg shadow-emerald-500/40">
            MT
          </span>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-200">
              Aurora
            </p>
            <p className="text-lg font-semibold text-white">
              Markets Interview Studio
            </p>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-white/20 text-white shadow-lg shadow-emerald-500/10"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon
                className={clsx(
                  "h-5 w-5 transition-transform duration-200",
                  isActive ? "text-emerald-300" : "text-white/60",
                  "group-hover:scale-105"
                )}
                strokeWidth={1.8}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 pb-10 pt-6">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-white/80 backdrop-blur">
          <p className="font-semibold text-white">Daily Focus</p>
          <p className="mt-2 text-xs text-white/70">
            Finish the liquidity case panel and capture takeaways in your
            journal.
          </p>
        </div>
      </div>
    </aside>
  );
}

