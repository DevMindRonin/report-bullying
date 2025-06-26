import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/types/i18n.types";
import WithClient from "@/components/WithClient";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <WithClient dict={dict} lang={lang} />;
}
