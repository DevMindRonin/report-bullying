"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Logo from "@/assets/images/nntb.jpg";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    setKey((prevKey) => prevKey + 1);
  }, [language]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    // window.location.reload();
  };

  return (
    <Container fluid className="p-3">
      <Row className="align-items-center">
        <Col md={5} className="pe-0 d-flex justify-content-center">
          <Image
            src={Logo}
            alt="Logo společnosti"
            height={40}
            style={{ height: "40px", width: "auto" }}
          />
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
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
