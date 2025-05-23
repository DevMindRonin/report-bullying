import { getDictionary } from "@/app/i18n";
import { getCategories } from "@/lib/categories";
import type { Locale } from "@/app/i18n/types";
import NewNotification from "@/components/NewNotification";

export default async function NewNotificationPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const categories = getCategories(dict);

  return <NewNotification dict={dict} lang={lang} categories={categories} />;
}
