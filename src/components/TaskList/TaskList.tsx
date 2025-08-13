import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask, updateTask } from "../../services/taskService";
import type { Task, TaskUpdateData } from "../../types/task";
import css from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTask: TaskUpdateData) => updateTask(updatedTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleUpdate = (task: Task) => {
    updateTaskMutation.mutate({
      id: task.id,
      completed: !task.completed,
    });
  };

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() => handleUpdate(task)}
            className={css.checkbox}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteTaskMutation.mutate(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
