import { getDictionary } from "@/app/i18n";
import type { Locale, Dictionary } from "@/app/i18n/types";
import NotificationDetail from "@/components/NotificationDetail";

export default async function Page({
  params,
}: {
  params: { lang: Locale; id: string };
}) {
  const dict: Dictionary = await getDictionary(params.lang);
  return <NotificationDetail dict={dict} />;
}
