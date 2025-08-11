import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task } from "../../types/task";
import css from "./TaskList.module.css";
import { deleteTask, updateTask } from "../../services/taskService";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTask,
    onSuccess(task) {
      console.log(`Task deleted!!!!`, task);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError() {
      console.log("Error deleting task!!!!");
    },
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError() {
      console.log("Error deleting task!!!!");
    },
  });

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() =>
              updateMutation({ id: task.id, completed: !task.completed })
            }
            className={css.checkbox}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteMutation(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
