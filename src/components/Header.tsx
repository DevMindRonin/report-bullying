import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/nntb.jpg";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [key, setKey] = useState(0); // Pomůže vynutit re-render

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setKey((prevKey) => prevKey + 1); // Vynutí re-render
  }, [language, i18n]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    window.location.reload();
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 key={key}>">
      <img src={Logo} alt="Logo společnosti" className="ms-3" />
      <Form.Select
        value={language}
        onChange={handleLanguageChange}
        className="border-0 bg-transparent custom-select"
        style={{ width: "150px", outline: "none" }}
      >
        <option value="en">English (US)</option>
        <option value="cs">Cesky</option>
        <option value="cs">Corsu</option>
        <option value="cs">Dansk</option>
        <option value="cs">Deutch</option>
        <option value="cs">Eesti</option>
        <option value="cs">Espanol</option>
        <option value="cs">Euskara</option>
      </Form.Select>
    </div>
  );
};

export default Header;
