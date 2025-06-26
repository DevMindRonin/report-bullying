import Link from "next/link";
import { getDictionary } from "@/app/i18n/index";
import type { Locale } from "@/types/i18n.types";

export default async function ErrorPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h3>
        {dict.notFoundMessage} <Link href={`/${lang}/`}>{dict.back}</Link>
      </h3>
    </div>
  );
}
