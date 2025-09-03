"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "@/lib/tasks-api";
import { useTaskStore } from "@/stores/taskStore";

export default function TaskForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      clearText();
      router.push("/tasks");
    },
  });

  const { taskText, updateText, clearText } = useTaskStore();

  const handleSubmit = () => {
    mutation.mutate(taskText);
  };

  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Task text..."
        value={taskText}
        onChange={(e) => updateText(e.target.value)}
      />
      <button type="submit">
        {mutation.isPending ? "Creating task..." : "Create"}
      </button>
      <button type="button" onClick={() => router.push("/tasks")}>
        Cancel
      </button>
    </form>
  );
}
