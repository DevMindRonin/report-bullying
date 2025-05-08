import i18n from "i18next";
import { initReactI18next } from "react-i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: {
        [key: string]: string;
      };
    };
  }
}

const resources = {
  cs: {
    translation: {
      welcome: "Díky, že to nenecháváte být",
      home: "Domů",
      about: "O nás",
    },
  },
  en: {
    translation: {
      welcome: "Thank you for speaking up",
      home: "Home",
      about: "About",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "cz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
