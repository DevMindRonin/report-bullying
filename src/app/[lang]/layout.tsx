import { Locale, locales } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/index";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import InitLocaleClient from "@/components/InitLocaleClient";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Header />
      <InitLocaleClient />
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer dict={dict} />
    </>
  );
}
