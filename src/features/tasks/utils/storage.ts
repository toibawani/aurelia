import type { Task } from "../types/task";

const STORAGE_KEY = "aurelia_tasks";

export function getTasks(): Task[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as Task[];
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks),
    );
  } catch {
    // Storage may be unavailable.
  }
}