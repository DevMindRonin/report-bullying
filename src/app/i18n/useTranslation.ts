// src/i18n/useTranslation.ts
import { useLangStore } from "@/stores/langStore";

export const useTranslation = () => {
  const dict = useLangStore((state) => state.dict);
  const locale = useLangStore((state) => state.locale);
  return { dict: dict, locale };
};
