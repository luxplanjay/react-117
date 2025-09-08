import { nextServer } from "./api";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export const fetchTasks = async () => {
  const res = await nextServer.get<Task[]>("/tasks");
  return res.data;
};

export const fetchTaskById = async (taskId: string) => {
  console.log("2 - fetchTaskById");
  const res = await nextServer.get<Task>(`/tasks/${taskId}`);
  console.log("4 - fetchTaskById after await");
  return res.data;
};
