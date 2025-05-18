"use client";
import { useEffect } from "react";
import { useLangStore } from "@/stores/langStore";
import { useParams } from "next/navigation";
import { isLocale } from "@/app/i18n/types";

const InitLocaleClient = () => {
  const params = useParams();
  const urlLang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;

  useEffect(() => {
    if (isLocale(urlLang!)) {
      const storeLang = useLangStore.getState().locale;
      if (storeLang !== urlLang) {
        useLangStore.getState().setLocale(urlLang);
      }
    }
  }, [urlLang]);

  return null;
};

export default InitLocaleClient;
