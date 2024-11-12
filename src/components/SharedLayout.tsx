import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const SharedLayout = () => {
  return (
    <div className="vh-100 d-flex flex-column ">
      <Header />
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Row className="justify-content-center">
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SharedLayout;
