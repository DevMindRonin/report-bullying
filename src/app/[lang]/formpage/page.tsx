import FormPage from "@/components/FormPage";
import { getDictionary } from "@/app/i18n";
import type { Locale } from "@/app/i18n/types";

<<<<<<< HEAD
export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <FormPage dict={dict} lang={lang} />;
}
=======
export const Page = async ({ params }: { params: { lang: Locale } }) => {
  const dict = await getDictionary(params.lang);
  return <FormPage dict={dict} />;
};
export default Page;
>>>>>>> origin/main
