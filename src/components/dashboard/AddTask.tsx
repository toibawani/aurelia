import { Plus, X } from "lucide-react";
import { useState } from "react";

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

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[28px] border border-[#e6e1d8] bg-[#f8f7f2] p-6 shadow-[0_24px_80px_rgba(55,63,57,0.18)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#98a19c]">
              New task
            </p>

            <h2 className="mt-1 text-2xl font-medium tracking-tight text-[#27332f]">
              What needs doing?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-[#7d8882] transition hover:bg-white hover:text-[#27332f]"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="task-title"
              className="mb-2 block text-sm font-medium text-[#5f6b65]"
            >
              Task
            </label>

            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="e.g. Finish physics assignment"
              autoFocus
              className="w-full rounded-2xl border border-[#dedbd3] bg-white px-4 py-3 text-sm text-[#27332f] outline-none transition placeholder:text-[#a4aaa6] focus:border-[#9baa9f] focus:ring-4 focus:ring-[#dce8d9]/60"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-[#5f6b65]">
              Priority
            </p>

            <div className="grid grid-cols-3 gap-2">
              {(
                ["low", "medium", "high"] as TaskPriority[]
              ).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setPriority(option)
                  }
                  className={`rounded-2xl border px-3 py-3 text-sm capitalize transition ${
                    priority === option
                      ? "border-[#9baa9f] bg-[#e4eee1] font-medium text-[#52645a]"
                      : "border-[#dedbd3] bg-white text-[#7d8882] hover:border-[#c8cec9]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-[#dedbd3] bg-white px-4 py-3 text-sm font-medium text-[#68736e] transition hover:bg-[#f3f2ed]"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!title.trim()}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#73877b] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#63766b] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Plus size={17} />
              Add task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}