import { nextServer } from "./api";

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/auth/me");
  return data;
};
