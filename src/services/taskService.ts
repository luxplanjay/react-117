import axios from "axios";
import type { Task, TaskId } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async () => {
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
};

export const deleteTask = async (taskId: TaskId) => {
  const res = await axios.delete<Task>(`/tasks/${taskId}`);
  return res.data;
};

interface TaskUpdate {
  id: TaskId;
  text?: string;
  completed?: boolean;
}

// type TaskUpdate = { id: TaskId } & Partial<Omit<Task, "id">>;
// type TaskUpdate = { id: TaskId } & { text?: string; completed?: boolean };

export const updateTask = async (taskUpdate: TaskUpdate) => {
  const res = await axios.put<Task>(`/tasks/${taskUpdate.id}`, taskUpdate);
  return res.data;
};

export const createTask = async (newTask: Pick<Task, "text">) => {
  const res = await axios.post<Task>("/tasks", newTask);
  return res.data;
};
