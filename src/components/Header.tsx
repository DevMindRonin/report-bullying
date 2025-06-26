"use client";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/images/nntb.jpg";
import { locales } from "@/app/i18n/config";
import type { Locale } from "@/types/i18n.types";
import { isLocale } from "@/types/i18n.types";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.split("/")[1] as Locale;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Locale;
    if (!isLocale(newLang)) return;

    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
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
            value={currentLang}
            onChange={handleLanguageChange}
            className="border-0 bg-transparent"
            style={{ width: "100px", outline: "none" }}
          >
            {locales.map((loc) => (
              <option key={loc} value={loc}>
                {loc === "cs" ? "Čeština" : "English"}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
