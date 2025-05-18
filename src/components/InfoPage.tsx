// components/SelectionPage.tsx
"use client";
import type { Dictionary } from "@/app/i18n/types";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";

export default function SelectionPage({ dict }: { dict: Dictionary }) {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const entityType = searchParams.get("entityType") ?? "";

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">{dict.infopageTitle}</h2>
          <p>
            <b>{dict.infopageBoldText}</b>
          </p>
          <p>{dict.infopageText1}</p>
          <p>{dict.infopageText2}</p>
          <div className="d-flex justify-content-center mt-5">
            <Button
              onClick={() =>
                navigate.push(
                  `/newnotification?entityType=${encodeURIComponent(
                    entityType
                  )}`
                )
              }
              variant="primary"
              className="mt-3"
            >
              {dict.createReportButton}
            </Button>
            <Button
              onClick={() => navigate.push("/")}
              variant="outline-primary"
              className="mt-3 ms-3"
            >
              {dict.goBackButton}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
