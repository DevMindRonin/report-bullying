import React from "react";
import { Form } from "react-bootstrap";
import { OrganizationCodeInputProps } from "@/types/notification.types";
import { Dictionary } from "@/types/i18n.types";

const OrganizationCodeInput = ({
  organizationCode,
  setOrganizationCode,
  error,
  dict,
}: OrganizationCodeInputProps & { dict: Dictionary }) => {
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
