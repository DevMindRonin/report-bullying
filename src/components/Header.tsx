"use client";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/images/nntb.jpg";
import { locales } from "@/app/i18n/config";
import type { Locale } from "@/app/i18n/types";
import { useLangStore } from "@/stores/langStore";
import { isLocale } from "@/app/i18n/types";

const languageLabels: Record<Locale, string> = {
  cs: "Česky",
  en: "English (US)",
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLangStore((state) => state.locale);
  const setLocale = useLangStore((state) => state.setLocale);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;

    if (isLocale(newLang)) {
      setLocale(newLang);
      const currentPathWithoutLocale = pathname.split("/").slice(2).join("/");
      router.push(`/${newLang}/${currentPathWithoutLocale}`);
    } else {
      console.error("Invalid locale selected:", newLang);
    }
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
            value={locale}
            onChange={handleLanguageChange}
            className="border-0 bg-transparent"
            style={{ width: "100px", outline: "none" }}
          >
            {locales.map((loc) => (
              <option key={loc} value={loc}>
                {languageLabels[loc]}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
