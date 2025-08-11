import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { createTask } from "../../services/taskService";

interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createTask,
    onSuccess() {
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
        {isPending ? "Creating task..." : "Create"}
      </button>
    </form>
  );
}
