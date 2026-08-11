import {
  ArrowRight,
  CheckCircle2,
  CloudSun,
  Flame,
  Leaf,
  Sparkles,
  Target,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import TaskList from "../components/dashboard/TaskList";
import { useTasks } from "../features/tasks/hooks/useTasks";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    progress,
  } = useTasks();

  const firstName =
    user?.name?.trim().split(" ")[0] || "there";

  const completedTasks = tasks.filter(
    (task) => task.completed,
  ).length;

  const totalTasks = tasks.length;

  function handleAddTask() {
    const title = window.prompt(
      "What would you like to accomplish?",
    );

    if (title?.trim()) {
      addTask(title.trim());
    }
  }

  const greetingHour = new Date().getHours();

  const greeting =
    greetingHour < 12
      ? "Good morning"
      : greetingHour < 18
        ? "Good afternoon"
        : "Good evening";

  return (
    <DashboardLayout>
      <div className="min-h-full pb-12">
        {/* HERO */}

        <section className="relative overflow-hidden rounded-[32px] border border-[#e6e1d8] bg-[#f8f7f2] p-7 shadow-[0_18px_60px_rgba(55,63,57,0.06)] sm:p-9">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#dce8d9] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#eadfd4] blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dcd8cf] bg-white/70 px-3.5 py-2 text-xs font-medium text-[#718078] backdrop-blur">
                <Leaf size={14} />
                Your personal workspace
              </div>

              <p className="text-sm font-medium text-[#87928c]">
                {greeting}, {firstName}.
              </p>

              <h1 className="mt-2 max-w-2xl text-4xl font-medium tracking-[-0.04em] text-[#27332f] sm:text-5xl">
                Make today count,
                <span className="text-[#78887f]">
                  {" "}
                  gently.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#78837e] sm:text-base">
                You don't need to do everything today.
                Focus on what matters most and let the
                rest wait.
              </p>
            </div>

            <div className="shrink-0 rounded-[24px] border border-white/80 bg-white/70 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e4eee1] text-[#607266]">
                  <Target size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#89938e]">
                    Today's focus
                  </p>

                  <p className="mt-1 text-xl font-semibold text-[#27332f]">
                    {progress}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[26px] border border-[#e6e1d8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,63,57,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#7d8882]">
                Focus score
              </p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f0e5] text-[#63756a]">
                <Target size={17} />
              </div>
            </div>

            <p className="mt-5 text-3xl font-medium tracking-tight text-[#27332f]">
              {progress}%
            </p>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#ece9e2]">
              <div
                className="h-full rounded-full bg-[#73877b] transition-all duration-700"
                style={{
                  width: `${Math.min(
                    Math.max(progress, 0),
                    100,
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className="rounded-[26px] border border-[#e6e1d8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,63,57,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#7d8882]">
                Completed
              </p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf1ec] text-[#68776e]">
                <CheckCircle2 size={17} />
              </div>
            </div>

            <p className="mt-5 text-3xl font-medium tracking-tight text-[#27332f]">
              {completedTasks}
            </p>

            <p className="mt-2 text-xs text-[#929b96]">
              {totalTasks === 0
                ? "Nothing planned yet"
                : `${totalTasks} task${
                    totalTasks === 1 ? "" : "s"
                  } planned`}
            </p>
          </div>

          <div className="rounded-[26px] border border-[#e6e1d8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,63,57,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#7d8882]">
                Life weather
              </p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2e9df] text-[#84786e]">
                <CloudSun size={17} />
              </div>
            </div>

            <p className="mt-5 text-3xl font-medium tracking-tight text-[#27332f]">
              Clear
            </p>

            <p className="mt-2 text-xs text-[#929b96]">
              A calm space to make progress.
            </p>
          </div>

          <div className="rounded-[26px] border border-[#e6e1d8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,63,57,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#7d8882]">
                Daily rhythm
              </p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0e9df] text-[#84766b]">
                <Flame size={17} />
              </div>
            </div>

            <p className="mt-5 text-3xl font-medium tracking-tight text-[#27332f]">
              Steady
            </p>

            <p className="mt-2 text-xs text-[#929b96]">
              Keep showing up for yourself.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}

        <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_330px]">
          <div className="rounded-[30px] border border-[#e6e1d8] bg-white p-6 sm:p-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#98a19c]">
                  Today
                </p>

                <h2 className="mt-1 text-2xl font-medium tracking-tight text-[#27332f]">
                  Your tasks
                </h2>
              </div>

              <button
                type="button"
                onClick={handleAddTask}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#27332f] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#35443e]"
              >
                Add task
                <ArrowRight size={16} />
              </button>
            </div>

            <TaskList
              tasks={tasks}
              onAdd={handleAddTask}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>

          {/* SIDE PANEL */}

          <aside className="space-y-6">
            <div className="rounded-[30px] border border-[#e6e1d8] bg-[#f3eee7] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-[#69776f]">
                <Sparkles size={19} />
              </div>

              <h3 className="mt-5 text-xl font-medium tracking-tight text-[#27332f]">
                A small reminder
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#7c827e]">
                Productivity isn't about filling every
                minute. It's about giving your attention
                to the things that deserve it.
              </p>

              <div className="mt-6 rounded-2xl bg-white/65 p-4">
                <p className="text-sm font-medium text-[#4d5b54]">
                  Progress still counts when it's quiet.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#e6e1d8] bg-[#eaf0e6] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#64756a]">
                  <Leaf size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#526259]">
                    Your pace
                  </p>

                  <p className="text-xs text-[#849088]">
                    No pressure required.
                  </p>
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/70">
                <div
                  className="h-full rounded-full bg-[#78907f] transition-all duration-700"
                  style={{
                    width: `${Math.min(
                      Math.max(progress, 0),
                      100,
                    )}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-xs text-[#7c8981]">
                {progress >= 100
                  ? "Everything is complete. Beautiful."
                  : progress > 0
                    ? "You're making progress."
                    : "Start with one small thing."}
              </p>
            </div>
          </aside>
        </section>
      </div>
    </DashboardLayout>
  );
}