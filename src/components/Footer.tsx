import Logo from "@/assets/images/nntb.jpg";
import Image from "next/image";
import { t } from "i18next";

const Header = () => {
  return (
    <footer className="d-flex flex-column align-items-center mb-3">
      <div className="border bg-success-subtle text-success p-2 d-inline-block">
        {t("encryptInfo")}
      </div>
      <div>
        <span className="text-black-50 small mt-1">{t("footerText")}</span>
        <Image src={Logo} alt="Logo společnosti" height={20} width={30} />
      </div>
    </footer>
  );
};

export default Header;
