import { Check, Trash2 } from "lucide-react";
import type { Task } from "../../features/tasks/types/task";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({
  task,
  onToggle,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4">
      <button
        onClick={() => onToggle(task.id)}
        aria-label={
          task.completed
            ? "Mark task incomplete"
            : "Mark task complete"
        }
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition ${
          task.completed
            ? "border-stone-900 bg-stone-900 text-white"
            : "border-stone-300 hover:border-stone-700"
        }`}
      >
        {task.completed && <Check size={15} />}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`font-medium ${
            task.completed
              ? "text-stone-400 line-through"
              : "text-stone-900"
          }`}
        >
          {task.title}
        </p>

        <span className="text-xs capitalize text-stone-400">
          {task.priority} priority
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        className="rounded-xl p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}