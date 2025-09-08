import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const api = axios.create({
  baseURL: "https://62584f320c918296a49543e7.mockapi.io",
});
