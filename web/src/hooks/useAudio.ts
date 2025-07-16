import { create } from "zustand";

interface AudioState {
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
}

export const useAudio = create<AudioState>((set) => ({
  isPlaying: false,
  setIsPlaying: (val) => set({ isPlaying: val }),
}));