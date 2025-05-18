import React from "react";
import { Form } from "react-bootstrap";
import { OrganizationCodeInputProps } from "@/types/notification.types";

interface Props extends OrganizationCodeInputProps {
  dict: {
    labelOrganisation: string;
    findOrganisation: string;
  };
}

const OrganizationCodeInput: React.FC<Props> = ({
  organizationCode,
  setOrganizationCode,
  error,
  dict,
}) => {
  return (
    <Form.Group controlId="organizationCode">
      <Form.Label className="fw-bold mt-4">{dict.labelOrganisation}</Form.Label>
      <Form.Control
        type="text"
        value={organizationCode}
        onChange={(e) => setOrganizationCode(e.target.value)}
        placeholder={dict.findOrganisation}
        className="w-100"
      />
      {error && <div className="text-danger">{error}</div>}
    </Form.Group>
  );
};

export default OrganizationCodeInput;
