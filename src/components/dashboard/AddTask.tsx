cd ~/Documents/aurelia

cat > src/components/dashboard/AddTask.tsx <<'EOF'
import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { TaskPriority } from "../../features/tasks/types/task";

interface AddTaskProps {
  open: boolean;
  onClose: () => void;
  onAdd: (
    title: string,
    priority: TaskPriority,
  ) => void;
}

export default function AddTask({
  open,
  onClose,
  onAdd,
}: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState<TaskPriority>("medium");

  if (!open) {
    return null;
  }

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
    onClose();
  }

  function handleClose() {
    setTitle("");
    setPriority("medium");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/30 px-4 backdrop-blur-sm"
      onMouseDown={handleClose}
    >
      <div
        className="w-full max-w-md rounded-3xl border border-stone-200 bg-[#faf9f5] p-6 shadow-[0_30px_80px_rgba(0,0,0,.16)]"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
              New task
            </p>

            <h2 className="mt-1 text-2xl font-medium tracking-tight text-stone-900">
              What matters today?
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              Keep it clear, realistic, and intentional.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-7"
        >
          <label
            htmlFor="task-title"
            className="text-sm font-medium text-stone-700"
          >
            Task
          </label>

          <input
            id="task-title"
            autoFocus
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="e.g. Finish physics assignment"
            className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:ring-4 focus:ring-stone-100"
          />

          <div className="mt-6">
            <p className="text-sm font-medium text-stone-700">
              Priority
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {(
                [
                  ["low", "Low"],
                  ["medium", "Medium"],
                  ["high", "High"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setPriority(value)
                  }
                  className={`rounded-xl border px-3 py-2.5 text-sm transition ${
                    priority === value
                      ? "border-stone-800 bg-stone-800 text-white"
                      : "border-stone-200 bg-white text-stone-600 hover:border-stone-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!title.trim()}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-900 px-4 py-3.5 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus size={17} />
            Add to today's mission
          </button>
        </form>
      </div>
    </div>
  );
}
EOF