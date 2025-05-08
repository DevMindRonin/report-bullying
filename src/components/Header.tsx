import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/nntb.jpg";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [key, setKey] = useState(0);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setKey((prevKey) => prevKey + 1);
  }, [language, i18n]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    window.location.reload();
  };

  return (
    <Container fluid className="p-3">
      <Row className="align-items-center">
        <Col md={5} className="pe-0 d-flex justify-content-center">
          <img src={Logo} alt="Logo společnosti" style={{ height: "40px" }} />
        </Col>
        <Col className="px-0" md={2}></Col>
        <Col md={5} className="ps-0 d-flex justify-content-center">
          <Form.Select
            value={language}
            onChange={handleLanguageChange}
            className="border-0 bg-transparent"
            style={{ width: "100px", outline: "none" }}
          >
            <option value="en">English (US)</option>
            <option value="cs">Česky</option>
            <option value="cs">Corsu</option>
            <option value="cs">Dansk</option>
            <option value="cs">Deutch</option>
            <option value="cs">Eesti</option>
            <option value="cs">Espanol</option>
            <option value="cs">Euskara</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
