import InfoPage from "@/components/InfoPage";
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <InfoPage dict={dict} lang={lang} />;
}
