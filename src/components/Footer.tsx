import Logo from "../assets/images/nntb.jpg";
import { t } from "i18next";
const Header = () => {
  return (
    <footer className="d-flex flex-column align-items-center mb-3">
      <div className="border bg-success-subtle text-success p-2 d-inline-block">
        {t("encryptInfo")}
      </div>
      <div>
        <span className="text-black-50 small mt-1">{t("footerText")}</span>
        <img src={Logo} alt="Logo společnosti" />
      </div>
    </footer>
  );
};

export default Header;
