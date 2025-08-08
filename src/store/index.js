import { create } from "zustand";
import { createMemoSlice } from "./memo";

export const useStore = create((...stateTools) => ({
  ...createMemoSlice(...stateTools),
}));
