"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/images/nntb.jpg";
import { locales } from "@/app/i18n/config";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const urlLang = pathname.split("/")[1];
    if (locales.includes(urlLang as any)) {
      setLanguage(urlLang);
    } else {
      const savedLang = localStorage.getItem("language");
      if (savedLang && locales.includes(savedLang as any)) {
        setLanguage(savedLang);
      }
    }
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem("language", newLang);

    const currentPathWithoutLocale = pathname.split("/").slice(2).join("/");
    router.push(`/${newLang}/${currentPathWithoutLocale}`);
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
