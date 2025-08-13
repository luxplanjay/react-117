import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { addTask } from "../../services/taskService";
import { type NewTaskData } from "../../types/task";

interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (taskData: NewTaskData) => addTask(taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onSuccess();
    },
  });

  const handleSubmit = (formData: FormData) => {
    mutate({
      text: formData.get("text") as string,
    });
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {isPending ? "Creating new task..." : "Create"}
      </button>
    </form>
  );
}
