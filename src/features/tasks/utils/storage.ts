cat > src/features/tasks/utils/storage.ts <<'EOF'
import type { Task } from "../types/task";

const STORAGE_KEY = "aurelia_tasks";

export function getTasks(): Task[] {
  try {
    const stored =
      localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown =
      JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isTask);
  } catch {
    return [];
  }
}

export function saveTasks(
  tasks: Task[],
): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks),
    );
  } catch {
    // Storage may be unavailable.
  }
}

function isTask(
  value: unknown,
): value is Task {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const task = value as Record<
    string,
    unknown
  >;

  return (
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.completed === "boolean" &&
    (task.priority === "low" ||
      task.priority === "medium" ||
      task.priority === "high") &&
    typeof task.createdAt === "string"
  );
}
EOF