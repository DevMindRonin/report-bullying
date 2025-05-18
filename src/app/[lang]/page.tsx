import MainPage from "@/components/MainPage";
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <MainPage dict={dict} />;
}
