// app/[lang]/selection/page.tsx
import SelectionPage from "@/components/InfoPage";
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return <SelectionPage dict={dict} />;
}
