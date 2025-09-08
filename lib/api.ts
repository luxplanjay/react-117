import axios from "axios";

export const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});
