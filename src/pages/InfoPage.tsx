import { Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const SelectionPage = () => {
  const navigate = useNavigate();
  const { entityType } = useLocation().state || {};
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Testovací online schránka důvěry</h2>
          <p>
            <b>
              Tato schránka důvěry není opravdová. Můžeš si přes ni ale
              vyzkoušet poslat zkušební oznámení a podívat se, jak funguje.
            </b>
          </p>
          <p>
            Přes online schránku důvěry Nenech to být (NNTB) se mohou ozvat
            všichni, kteří jsou svědkem či obětí šikany, nevhodného jednání nebo
            mají problém, o kterém se stydí mluvit osobně. Oznámení jsou
            anonymní, proto se žáci nemusí bát, že by se oznámení obrátilo proti
            nim.
          </p>
          <p>
            Pokud chceš upozornit na opravdový případ šikany, vyhledej svoji
            školu a odešli oznámení této škole. V případě ohrožení života volej
            112.
          </p>
          <div className="d-flex justify-content-center mt-5">
            <Button
              onClick={() =>
                navigate("/newnotification", { state: { entityType } })
              }
              variant="primary"
              className="mt-3"
            >
              + Vytvořit testovací oznámení
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline-primary"
              className="mt-3 ms-3"
            >
              Jít zpět do vyhledávání škol
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectionPage;
