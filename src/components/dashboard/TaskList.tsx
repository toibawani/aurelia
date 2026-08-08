import { Plus } from "lucide-react";
import type { Task } from "../../features/tasks/types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onAdd: () => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onAdd,
  onToggle,
  onDelete,
}: TaskListProps) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-stone-900">
            Today's Mission
          </h2>

          <p className="mt-1 text-sm text-stone-500">
            Focus on what matters most.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          <Plus size={17} />
          Add task
        </button>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="rounded-2xl bg-stone-50 px-6 py-10 text-center">
            <p className="font-medium text-stone-700">
              Your mission is clear.
            </p>

            <p className="mt-1 text-sm text-stone-500">
              Add your first task for today.
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </section>
  );
}