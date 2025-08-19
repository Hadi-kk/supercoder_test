import { create } from "zustand";

export const DUMMY_CREDENTIALS = {
  id: "demo@landas.test",
  password: "Demo1234",
};

type User = {
  id: string;
};

type AuthState = {
  user: User | null;
  login: (id: string) => void;
  logout: () => void;
};

const STORAGE_KEY = "app_auth_user";

const getInitialUser = (): User | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch (e) {
    return null;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getInitialUser(),
  login: (id: string) => {
    const user = { id };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      // ignore
    }
    set({ user });
  },
  logout: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
    set({ user: null });
  },
}));

export default useAuthStore;
