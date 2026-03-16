import { create } from "zustand";

interface AuthState {
  user: any | null;
  isLoading: boolean;
  login: (credentials: any) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  login: async (credentials) => {
    set({ isLoading: true });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({ user: { name: "Eduardo" }, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  },
}));
