import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { LearningPath } from "@/components/dashboard/learning-path";
import { PanelPreview } from "@/components/dashboard/panel-preview";
import { ProgressOverview } from "@/components/dashboard/progress-overview";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <Sidebar />
      <main className="flex-1 p-4 pb-12 sm:p-6 lg:px-10 lg:py-8">
        <div className="mx-auto flex h-full max-w-6xl flex-col gap-6">
          <TopNav />

          <section className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">
                Today&apos;s cockpit
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready for your next Markets Treasury challenge
              </h1>
            </div>

            <ProgressOverview />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
              <div className="space-y-6">
                <LearningPath />
                <ActivityFeed />
              </div>
              <PanelPreview />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
