"use client";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { t } from "i18next";
const FinalPage = () => {
  const navigate = useRouter();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">{t("finalPageTitle")}</h2>
          <p>{t("finalPageText")}</p>
          <div className="text-center">
            <Button
              onClick={() => navigate.push("/newnotification")}
              variant="outline-secondary"
              className="mt-3"
            >
              {t("finalPageBackButton")}
            </Button>
            <Button
              onClick={() => navigate.push("/notificationlist")}
              variant="primary"
              className="mt-3 ms-3"
            >
              {t("finalPageListButton")}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalPage;
