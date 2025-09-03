import { create } from "zustand";
import { persist } from "zustand/middleware";

type LangStore = {
  lang: string;
  a: number;
  b: number;
  changeLang: (newLang: string) => void;
};

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "uk",
      a: 5,
      b: 10,
      changeLang: (newLang) => set({ lang: newLang }),
    }),
    {
      name: "app-lang",
      partialize: (state) => ({
        lang: state.lang,
      }),
    }
  )
);
