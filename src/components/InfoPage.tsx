"use client";
import type { Dictionary } from "@/types/i18n.types";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function InfoPage({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const navigate = useRouter();

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2 className="mb-4">{dict.infopageTitle}</h2>
      <p>
        <b>{dict.infopageBoldText}</b>
      </p>
      <p>{dict.infopageText1}</p>
      <p>{dict.infopageText2}</p>

      <div className="d-flex justify-content-center mt-4">
        <div>
          <Button
            onClick={() => navigate.push(`/${lang}/newnotification`)}
            variant="primary"
            className="mt-3"
          >
            {dict.createReportButton}
          </Button>
          <Button
            onClick={() => navigate.push(`/${lang}/`)}
            variant="outline-primary"
            className="mt-3 ms-3"
          >
            {dict.goBackButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
