import React from "react";
import { Form } from "react-bootstrap";
import { OrganizationCodeInputProps } from "@/types/types";
import { useTranslation } from "react-i18next";
const OrganizationCodeInput: React.FC<OrganizationCodeInputProps> = ({
  organizationCode,
  setOrganizationCode,
  error,
}) => {
  const { t } = useTranslation();
  return (
    <Form.Group controlId="organizationCode">
      <Form.Label className="fw-bold mt-4">{t("labelOrganisation")}</Form.Label>
      <Form.Control
        type="text"
        value={organizationCode}
        onChange={(e) => setOrganizationCode(e.target.value)}
        placeholder={t("findOrganisation")}
        className="w-100"
      />
      {error && <div className="text-danger">{error}</div>}
    </Form.Group>
  );
};

export default OrganizationCodeInput;
