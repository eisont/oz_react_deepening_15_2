import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useBoardStore = create(
  persist(
    (set) => ({
      data: [],
      addBoard: (value) => set((state) => ({ data: [...state.data, value] })),
      removeBoard: (value) => set((state) => ({ data: state.data.filter((el) => el.id !== value) })),
      updateBoard: (item, value) =>
        set((state) => ({ data: state.data.map((el) => (el.id === item.id ? value : el)) })),
    }),
    {
      name: 'counter-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
