"use client";
import Logo from "@/assets/images/nntb.jpg";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/useTranslation";

const Footer = () => {
  const { dict } = useTranslation();
  return (
    <footer className="d-flex flex-column align-items-center mb-3">
      <div className="border bg-success-subtle text-success p-2 d-inline-block">
        {dict.encryptInfo}
      </div>
      <div>
        <span className="text-black-50 small mt-1">{dict.footerText}</span>
        <Image src={Logo} alt="Logo společnosti" height={20} width={30} />
      </div>
    </footer>
  );
};

export default Footer;
