import type { Locale, Dictionary } from "@/app/i18n/types";

const dictionaries = {
  cs: () =>
    import("./locales/cs/translation.json").then(
      (module): Dictionary => module.default
    ),
  en: () =>
    import("./locales/en/translation.json").then(
      (module): Dictionary => module.default
    ),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loader = dictionaries[locale];
  if (!loader)
    throw new Error(`No dictionary loader found for locale "${locale}"`);
  return await loader();
};
