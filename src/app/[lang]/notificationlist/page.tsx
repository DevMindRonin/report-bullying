// app/[lang]/notificationlist/page.tsx
import { getDictionary } from "@/app/i18n";
import type { Locale, Dictionary } from "@/app/i18n/types";
import NotificationList from "@/components/NotificationList";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict: Dictionary = await getDictionary(params.lang);
  return <NotificationList dict={dict} />;
}
