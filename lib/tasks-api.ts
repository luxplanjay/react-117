import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export const fetchTasks = async () => {
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
};

export const createTask = async (taskText: string) => {
  const res = await axios.post<Task>("/tasks", { text: taskText });
  return res.data;
};
