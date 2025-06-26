"use client";

import MainPage from "./MainPage";
import type { Dictionary } from "@/types/i18n.types";

export default function WithClient({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  return (
    <>
      <MainPage dict={dict} lang={lang} />
    </>
  );
}
