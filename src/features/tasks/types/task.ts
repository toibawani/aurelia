export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: TaskPriority;
  createdAt: string;
}