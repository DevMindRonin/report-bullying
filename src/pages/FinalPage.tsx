import { Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Oznámení bylo odesláno</h2>
          <p>
            Ve vyhledávání jsi zvolil/a "Testovací školu", díky které si můžeš
            vyzkoušet, jak formulář funguje. Pokud chceš upozornit na opravdový
            případ šikany, vyhledej svoji školu a odešli oznámení na ni. V
            případě vážného ohrožení života volej 112.
          </p>
          <div className="text-center">
            <Button
              onClick={() => navigate("/newnotification")}
              variant="outline-secondary"
              className="mt-3"
            >
              Zpět na úvodní stránku
            </Button>
            <Button
              onClick={() => navigate("/notificationlist")}
              variant="primary"
              className="mt-3 ms-3"
            >
              Seznam oznámení
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalPage;
