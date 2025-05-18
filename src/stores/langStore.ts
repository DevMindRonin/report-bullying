import { create } from "zustand";
import type { Dictionary } from "@/app/i18n/types";
import cs from "@/app/i18n/locales/cs/translation.json";
import en from "@/app/i18n/locales/en/translation.json";

type Locale = "cs" | "en";

interface LangState {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
}

const dictionaries: Record<Locale, Dictionary> = { cs, en };

export const useLangStore = create<LangState>((set) => ({
  locale: "cs",
  dict: dictionaries["cs"],
  setLocale: (locale) => set({ locale, dict: dictionaries[locale] }),
}));
