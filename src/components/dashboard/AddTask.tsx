import { Plus, X } from "lucide-react";
import { useState } from "react";

import type { TaskPriority } from "../../features/tasks/types/task";

interface AddTaskProps {
  onAdd: (
    title: string,
    priority?: TaskPriority,
  ) => void;
  onClose?: () => void;
}

export default function AddTask({
  onAdd,
  onClose,
}: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState<TaskPriority>("medium");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const cleanTitle = title.trim();

    if (!cleanTitle) {
      return;
    }

    onAdd(cleanTitle, priority);
    setTitle("");
    setPriority("medium");

    onClose?.();
  }

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-400">
            New task
          </p>

          <h3 className="mt-1 text-xl font-semibold text-stone-900">
            What needs your attention?
          </h3>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-xl p-2 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          autoFocus
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="e.g. Finish physics assignment"
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-4 focus:ring-stone-100"
        />

        <div>
          <p className="mb-2 text-xs font-medium text-stone-500">
            Priority
          </p>

          <div className="grid grid-cols-3 gap-2">
            {(
              ["low", "medium", "high"] as TaskPriority[]
            ).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() =>
                  setPriority(level)
                }
                className={`rounded-xl border px-3 py-2.5 text-sm capitalize transition ${
                  priority === level
                    ? "border-stone-800 bg-stone-900 text-white"
                    : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!title.trim()}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-900 px-4 py-3.5 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus size={17} />
          Add task
        </button>
      </form>
    </div>
  );
}