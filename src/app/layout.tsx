"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center ">
        <Row>
          <Col>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
