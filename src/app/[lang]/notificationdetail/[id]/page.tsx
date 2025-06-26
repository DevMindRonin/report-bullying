import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/types/i18n.types";
import NotificationDetail from "@/components/NotificationDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <NotificationDetail dict={dict} lang={lang} />;
}
