cat > src/pages/Dashboard.tsx <<'EOF'
import {
  CloudSun,
  Flame,
  Target,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import TaskList from "../components/dashboard/TaskList";
import { useTasks } from "../features/tasks/hooks/useTasks";
import type { TaskPriority } from "../features/tasks/types/task";

export default function Dashboard() {
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    progress,
  } = useTasks();

  function handleAddTask(
    title: string,
    priority: TaskPriority,
  ) {
    addTask(title, priority);
  }

  return (
    <DashboardLayout>
      <div className="space-y-7">
        <section>
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
              Your workspace
            </p>

            <h1 className="mt-1 text-3xl font-medium tracking-[-0.03em] text-stone-900">
              Your day at a glance
            </h1>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              A simple view of what matters today.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <StatCard
              label="Focus Score"
              value={`${progress}%`}
              description="Based on today's completed tasks."
              icon={Target}
            />

            <StatCard
              label="Life Weather"
              value="Calm"
              description="Your current energy feels balanced."
              icon={CloudSun}
            />

            <StatCard
              label="Daily Streak"
              value="7 days"
              description="Keep showing up tomorrow."
              icon={Flame}
            />
          </div>
        </section>

        <TaskList
          tasks={tasks}
          onAdd={handleAddTask}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </DashboardLayout>
  );
}
EOF