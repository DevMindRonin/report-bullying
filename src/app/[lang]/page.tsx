import type { Dictionary } from "@/app/i18n/types";
import MainPage from "@/components/MainPage";
import { getDictionary } from "@/app/i18n";
import { Locale } from "@/app/i18n/types";

interface Props {
  dict: Dictionary;
}

export default async function LangPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return <MainPage dict={dict} />;
}
