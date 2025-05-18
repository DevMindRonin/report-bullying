import MainPage from "@/components/MainPage";
import { getDictionary } from "@/app/i18n";
import { getCategories } from "@/lib/categories";
import type { Locale } from "@/app/i18n/types";
import NewNotification from "@/components/NewNotification";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return <MainPage dict={dict} />;
}
