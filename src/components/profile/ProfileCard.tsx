import {
  CheckCircle2,
  CloudSun,
  Flame,
  Target,
  TrendingUp,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import TaskList from "../components/dashboard/TaskList";
import { useTasks } from "../hooks/useTasks";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const {
    tasks = [],
    addTask,
    toggleTask,
    deleteTask,
    completedTasks = 0,
    progress = 0,
  } = useTasks();

  function handleAddTask() {
    const title = window.prompt(
      "What would you like to accomplish?",
    );

    if (title?.trim()) {
      addTask(title);
    }
  }

  const pendingTasks =
    tasks.length - completedTasks;

  const firstName =
    user?.name?.trim().split(" ")[0] || "there";

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";

    return "Good evening";
  };

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl space-y-8">

        {/* HEADER */}

        <section className="relative overflow-hidden rounded-[32px] border border-[#e8e4db] bg-[#faf9f5] p-7 shadow-sm sm:p-9">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#dfead9] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[#eee1d7] blur-3xl" />

          <div className="relative">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ddd9d0] bg-white/70 px-3 py-1.5 text-xs text-[#78847e]">
              <CloudSun size={14} />
              Your personal workspace
            </div>

            <h1 className="text-3xl font-medium tracking-[-0.04em] text-stone-900 sm:text-4xl">
              {getGreeting()}, {firstName}.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#78847e] sm:text-base">
              Keep your attention on what matters today.
              Progress does not have to be perfect to be meaningful.
            </p>

          </div>
        </section>

        {/* STATISTICS */}

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-[#e8e4db] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e6eee3] text-[#607566]">
                <Target size={19} />
              </div>

              <span className="text-xs text-[#8d9791]">
                TODAY
              </span>

            </div>

            <p className="mt-5 text-3xl font-medium text-stone-900">
              {progress}%
            </p>

            <p className="mt-1 text-sm text-[#7f8983]">
              Focus completed
            </p>
          </div>

          <div className="rounded-3xl border border-[#e8e4db] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f0e7df] text-[#826f61]">
                <CheckCircle2 size={19} />
              </div>

              <span className="text-xs text-[#8d9791]">
                DONE
              </span>

            </div>

            <p className="mt-5 text-3xl font-medium text-stone-900">
              {completedTasks}
            </p>

            <p className="mt-1 text-sm text-[#7f8983]">
              Tasks completed
            </p>
          </div>

          <div className="rounded-3xl border border-[#e8e4db] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e8eee9] text-[#64756a]">
                <TrendingUp size={19} />
              </div>

              <span className="text-xs text-[#8d9791]">
                NEXT
              </span>

            </div>

            <p className="mt-5 text-3xl font-medium text-stone-900">
              {pendingTasks}
            </p>

            <p className="mt-1 text-sm text-[#7f8983]">
              Still on your list
            </p>
          </div>

          <div className="rounded-3xl border border-[#e8e4db] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eee5dc] text-[#806d5f]">
                <Flame size={19} />
              </div>

              <span className="text-xs text-[#8d9791]">
                STREAK
              </span>

            </div>

            <p className="mt-5 text-3xl font-medium text-stone-900">
              7
            </p>

            <p className="mt-1 text-sm text-[#7f8983]">
              Days showing up
            </p>
          </div>

        </section>

        {/* PROGRESS */}

        <section className="rounded-[30px] border border-[#e8e4db] bg-white p-6 shadow-sm sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#929b96]">
                Today's rhythm
              </p>

              <h2 className="mt-2 text-2xl font-medium tracking-tight text-stone-900">
                {progress === 100
                  ? "You made it through everything."
                  : progress >= 50
                    ? "You're making good progress."
                    : tasks.length === 0
                      ? "A quiet start is still a start."
                      : "One step at a time."}
              </h2>
            </div>

            <div className="text-sm text-[#7d8882]">
              {completedTasks} of {tasks.length} tasks complete
            </div>

          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#eeeae3]">

            <div
              className="h-full rounded-full bg-[#65776c] transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="mt-3 flex justify-between text-xs text-[#929b96]">
            <span>Start</span>
            <span>{progress}%</span>
            <span>Complete</span>
          </div>

        </section>

        {/* TASK AREA */}

        <section className="rounded-[30px] border border-[#e8e4db] bg-[#faf9f5] p-5 shadow-sm sm:p-7">

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#929b96]">
                Your focus
              </p>

              <h2 className="mt-1 text-2xl font-medium tracking-tight text-stone-900">
                Today's tasks
              </h2>

              <p className="mt-1 text-sm text-[#7d8882]">
                Do what matters. Leave room to breathe.
              </p>
            </div>

            <div className="text-sm text-[#7d8882]">
              {pendingTasks} remaining
            </div>

          </div>

          <TaskList
            tasks={tasks}
            onAdd={handleAddTask}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />

        </section>

      </div>
    </DashboardLayout>
  );
}