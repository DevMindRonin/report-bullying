import React from "react";
import { Form } from "react-bootstrap";

interface OrganizationCodeInputProps {
  organizationCode: string;
  setOrganizationCode: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
}

const OrganizationCodeInput: React.FC<OrganizationCodeInputProps> = ({
  organizationCode,
  setOrganizationCode,
  error,
}) => {
  return (
    <Form.Group controlId="organizationCode">
      <Form.Label className="fw-bold mt-4">Kód organizace</Form.Label>
      <Form.Control
        type="text"
        value={organizationCode}
        onChange={(e) => setOrganizationCode(e.target.value)}
        placeholder="Zadejte kód organizace"
        className="w-100"
      />
      {error && <div className="text-danger">{error}</div>}
    </Form.Group>
  );
};

export default OrganizationCodeInput;
