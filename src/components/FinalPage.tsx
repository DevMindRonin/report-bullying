"use client";

import { Button, Container, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import type { Dictionary } from "@/app/i18n/types";

export default function FinalPage({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const navigate = useRouter();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">{dict.finalPageTitle}</h2>
          <p>{dict.finalPageText}</p>
          <div className="text-center">
            <Button
              onClick={() => navigate.push(`/${lang}/newnotification`)}
              variant="outline-secondary"
              className="mt-3"
            >
              {dict.finalPageBackButton}
            </Button>
            <Button
              onClick={() => navigate.push(`/${lang}/notificationlist`)}
              variant="primary"
              className="mt-3 ms-3"
            >
              {dict.finalPageListButton}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
