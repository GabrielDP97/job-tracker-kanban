import { create } from "zustand";
import type { User } from "../types/user";
import { getUser, saveUser, clearUser } from "../lib/authStorage";

type AuthState = {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getUser(),

  login: (username) => {
    const user = { username };
    saveUser(user);
    set({ user });
  },

  logout: () => {
    clearUser();
    set({ user: null });
  },
}));
