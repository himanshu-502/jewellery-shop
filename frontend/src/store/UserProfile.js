import { create } from "zustand";

export const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (profile) => set({ userProfile: profile }),
}));
