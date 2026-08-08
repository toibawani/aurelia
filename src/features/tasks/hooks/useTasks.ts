import { useEffect, useState } from "react";

import type {
  Task,
  TaskPriority,
} from "../types/task";

import {
  getTasks,
  saveTasks,
} from "../utils/storage";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(getTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function addTask(
    title: string,
    priority: TaskPriority = "medium",
  ) {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: cleanTitle,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };

    setTasks((current) => [
      newTask,
      ...current,
    ]);
  }

  function toggleTask(id: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function deleteTask(id: string) {
    setTasks((current) =>
      current.filter(
        (task) => task.id !== id,
      ),
    );
  }

  const completedTasks = tasks.filter(
    (task) => task.completed,
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks / tasks.length) * 100,
        );

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    completedTasks,
    progress,
  };
}
