// app/[lang]/finalpage/page.tsx
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";
import type { Dictionary } from "@/app/i18n/types";
import FinalPage from "@/components/FinalPage";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict: Dictionary = await getDictionary(params.lang);
  return <FinalPage dict={dict} />;
}
