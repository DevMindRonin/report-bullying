import React from "react";
import { Form } from "react-bootstrap";
import { FormFieldsProps } from "../types/types";

const FormFields: React.FC<FormFieldsProps> = ({
  whistlerName,
  setWhistlerName,
  whistlerAge,
  setWhistlerAge,
  handleFileChange,
}) => (
  <>
    <Form.Group controlId="whistlerName">
      <Form.Label className="fw-bold">Jméno</Form.Label>
      <Form.Control
        type="text"
        value={whistlerName}
        onChange={(e) => setWhistlerName(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="whistlerAge">
      <Form.Label className="fw-bold">Věk</Form.Label>
      <Form.Control
        type="number"
        value={whistlerAge}
        onChange={(e) =>
          setWhistlerAge(e.target.value ? Number(e.target.value) : "")
        }
      />
    </Form.Group>

    <Form.Group controlId="fileUpload" className="mb-3">
      <Form.Label className="fw-bold">Nahrej soubor</Form.Label>
      <Form.Control type="file" onChange={handleFileChange} />
    </Form.Group>
  </>
);

export default FormFields;
