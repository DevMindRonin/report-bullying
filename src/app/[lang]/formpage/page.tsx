import FormPage from "@/components/FormPage";
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/types/i18n.types";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <FormPage dict={dict} lang={lang} />;
}
