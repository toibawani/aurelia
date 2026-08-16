import { useState } from "react";
import { CheckCircle2, Plus } from "lucide-react";

import type {
  Task,
  TaskPriority,
} from "../../features/tasks/types/task";

import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

interface TaskListProps {
  tasks: Task[];
  onAdd: (
    title: string,
    priority: TaskPriority,
  ) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onAdd,
  onToggle,
  onDelete,
}: TaskListProps) {
  const [isAddOpen, setIsAddOpen] =
    useState(false);

  const completedCount = tasks.filter(
    (task) => task.completed,
  ).length;

  return (
    <>
      <section className="rounded-[28px] border border-stone-200/80 bg-white/80 p-6 shadow-[0_15px_45px_rgba(61,66,58,.06)] backdrop-blur">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold tracking-tight text-stone-900">
                Today's Mission
              </h2>

              {tasks.length > 0 && (
                <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-stone-500">
                  {completedCount}/{tasks.length}
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-stone-500">
              Focus on what matters most.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAddOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-700"
          >
            <Plus size={17} />
            Add task
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-stone-200 bg-stone-50/70 px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-stone-400 shadow-sm">
              <CheckCircle2 size={22} />
            </div>

            <p className="mt-4 font-medium text-stone-700">
              Your mission is clear.
            </p>

            <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-stone-500">
              Nothing is waiting for you yet. Add
              something meaningful to your day.
            </p>

            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="mt-5 text-sm font-medium text-stone-800 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-700"
            >
              Add your first task
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </section>

      <AddTask
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={onAdd}
      />
    </>
  );
}
