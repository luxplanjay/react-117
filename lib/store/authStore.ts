// lib/store/authStore.ts

import { create } from "zustand";
import { User } from "../api";

type AuthStore = {
  isAuth: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  user: null,
  setUser: (user: User) => {
    set(() => ({ user, isAuth: true }));
  },
  clearIsAuth: () => {
    set(() => ({ user: null, isAuth: false }));
  },
}));
