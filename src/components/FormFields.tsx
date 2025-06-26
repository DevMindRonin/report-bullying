import React from "react";
import { Form } from "react-bootstrap";
import type { FormFieldsProps } from "@/types/notification.types";
import type { Dictionary } from "@/types/i18n.types";

const FormFields = ({
  whistlerName,
  setWhistlerName,
  whistlerAge,
  setWhistlerAge,
  setWhistlerFileProps,
  dict,
}: FormFieldsProps & { dict: Dictionary }) => (
  <>
    <Form.Group controlId="whistlerName" className="mb-3">
      <Form.Label className="fw-bold">{dict.labelName}</Form.Label>
      <Form.Control
        type="text"
        value={whistlerName}
        onChange={(e) => setWhistlerName(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="whistlerAge" className="mb-3">
      <Form.Label className="fw-bold">{dict.labelAge}</Form.Label>
      <Form.Control
        type="number"
        value={whistlerAge}
        onChange={(e) =>
          setWhistlerAge(e.target.value ? Number(e.target.value) : "")
        }
      />
    </Form.Group>

    <Form.Group controlId="fileUpload">
      <Form.Label className="fw-bold">{dict.loadFile}</Form.Label>
      <Form.Control type="file" onChange={setWhistlerFileProps} />
    </Form.Group>
  </>
);

export default FormFields;
