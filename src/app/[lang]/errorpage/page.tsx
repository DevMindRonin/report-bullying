import Link from "next/link";
import { getDictionary } from "@/app/i18n/index";
import type { Locale } from "@/app/i18n/types";

export default async function ErrorPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div>
      <h3>
        {dict.notFoundMessage}{" "}
        <Link href={`/${params.lang}/`}>{dict.back}</Link>
      </h3>
    </div>
  );
}
