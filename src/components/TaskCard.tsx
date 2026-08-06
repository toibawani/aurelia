import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  toggleTask: (id: number) => void;
}

function TaskCard({ task, toggleTask }: TaskCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-5
        shadow-lg
        flex
        items-center
        justify-between
        transition
        hover:scale-[1.02]
      "
    >
      <div>
        <h3 className="text-xl font-semibold">
          {task.title}
        </h3>

        <p className="text-gray-500 mt-1">
          {task.priority} Priority • {task.energy} Energy
        </p>
      </div>

      <button
        onClick={() => toggleTask(task.id)}
        className="
          text-3xl
          cursor-pointer
        "
      >
        {task.completed ? "🌱" : "⭕"}
      </button>
    </div>
  );
}

export default TaskCard;