import { Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
const FinalPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">{t("finalPageTitle")}</h2>
          <p>{t("finalPageText")}</p>
          <div className="text-center">
            <Button
              onClick={() => navigate("/newnotification")}
              variant="outline-secondary"
              className="mt-3"
            >
              {t("finalPageBackButton")}
            </Button>
            <Button
              onClick={() => navigate("/notificationlist")}
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
