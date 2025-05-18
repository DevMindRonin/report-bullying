"use client";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import { t } from "i18next";

const SelectionPage = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const entityType = searchParams.get("entityType") ?? "";

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">{t("infopageTitle")}</h2>
          <p>
            <b>{t("infopageBoldText")}</b>
          </p>
          <p>{t("infopageText1")}</p>
          <p>{t("infopageText2")}</p>
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
              {t("createReportButton")}
            </Button>
            <Button
              onClick={() => navigate.push("/")}
              variant="outline-primary"
              className="mt-3 ms-3"
            >
              {t("goBackButton")}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectionPage;
