import { getDictionary } from "@/app/i18n";
import type { Locale, Dictionary } from "@/types/i18n.types";
import NotificationList from "@/components/NotificationList";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <NotificationList dict={dict} lang={lang} />;
}
