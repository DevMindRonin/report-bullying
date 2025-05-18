import FormPage from "@/components/FormPage";
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return <FormPage dict={dict} />;
}
