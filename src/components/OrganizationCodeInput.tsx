import React from "react";
import { Form } from "react-bootstrap";
import type { Dictionary } from "@/types/i18n.types";
import { useNotificationMetaStore } from "@/stores/notificationStore";

const OrganizationCodeInput = ({ dict }: { dict: Dictionary }) => {
  const store = useNotificationMetaStore();
  const { organizationCode, setOrganizationCode, error } = store;

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
      {error && (
        <div className="text-danger">{dict[error as keyof typeof dict]}</div>
      )}
    </Form.Group>
  );
};

export default OrganizationCodeInput;
