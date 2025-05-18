import React from "react";
import { Form } from "react-bootstrap";
import { FormFieldsProps } from "../types/notification.types";

interface Props extends FormFieldsProps {
  dict: {
    labelName: string;
    labelAge: string;
    loadFile: string;
  };
}

const FormFields: React.FC<Props> = ({
  whistlerName,
  setWhistlerName,
  whistlerAge,
  setWhistlerAge,
  handleFileChange,
  dict,
}) => (
  <>
    <Form.Group controlId="whistlerName">
      <Form.Label className="fw-bold">{dict.labelName}</Form.Label>
      <Form.Control
        type="text"
        value={whistlerName}
        onChange={(e) => setWhistlerName(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="whistlerAge">
      <Form.Label className="fw-bold">{dict.labelAge}</Form.Label>
      <Form.Control
        type="number"
        value={whistlerAge}
        onChange={(e) =>
          setWhistlerAge(e.target.value ? Number(e.target.value) : "")
        }
      />
    </Form.Group>

    <Form.Group controlId="fileUpload" className="mb-3">
      <Form.Label className="fw-bold">{dict.loadFile}</Form.Label>
      <Form.Control type="file" onChange={handleFileChange} />
    </Form.Group>
  </>
);

export default FormFields;
