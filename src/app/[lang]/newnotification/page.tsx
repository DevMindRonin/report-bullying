import { getDictionary } from "@/app/i18n";
import { getCategories } from "@/components/categories";
import type { Locale } from "@/app/i18n/types";
import NewNotification from "@/components/NewNotification";

export default async function NewNotificationPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  const categories = getCategories(dict);

  return <NewNotification dict={dict} categories={categories} />;
}
