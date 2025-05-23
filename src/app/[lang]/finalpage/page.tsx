// app/[lang]/finalpage/page.tsx
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";
import type { Dictionary } from "@/app/i18n/types";
import FinalPage from "@/components/FinalPage";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict: Dictionary = await getDictionary(lang);
  return <FinalPage dict={dict} lang={lang} />;
}
