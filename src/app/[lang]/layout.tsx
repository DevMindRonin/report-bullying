import { Locale, locales } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/index";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Row, Col } from "react-bootstrap";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  return getDictionary(params.lang).then((dict) => ({
    title: dict.welcome || "App",
  }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Header />
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
