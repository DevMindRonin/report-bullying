export const locales = ["cs", "en"] as const;
export const defaultLocale = "cs" as const;

export type Locale = (typeof locales)[number];
