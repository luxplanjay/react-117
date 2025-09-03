import { create } from "zustand";
import { persist } from "zustand/middleware";

type TaskStore = {
  taskText: string;
  updateText: (newText: string) => void;
  clearText: () => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      taskText: "",
      updateText: (newText) => set({ taskText: newText }),
      clearText: () => set({ taskText: "" }),
    }),
    {
      name: "task-draft",
      partialize: (state) => ({
        taskText: state.taskText,
      }),
    }
  )
);
