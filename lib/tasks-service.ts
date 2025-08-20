import axios from "axios";

export const fetchTasks = async (searchText: string) => {
  const res = await axios.get(
    "https://62584f320c918296a49543e7.mockapi.io/tasks",
    {
      params: {
        search: searchText,
      },
    }
  );
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete(
    `https://62584f320c918296a49543e7.mockapi.io/tasks/${taskId}`
  );
  return res.data;
};

export const fetchTaskById = async (taskId: string) => {
  const res = await axios.get(
    `https://62584f320c918296a49543e7.mockapi.io/tasks/${taskId}`
  );
  return res.data;
};
