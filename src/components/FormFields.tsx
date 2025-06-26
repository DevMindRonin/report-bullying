import React from "react";
import { Form } from "react-bootstrap";

import type { Dictionary } from "@/types/i18n.types";
import { useNotificationMetaStore } from "@/stores/notificationStore";

const FormFields = ({ dict }: { dict: Dictionary }) => {
  const store = useNotificationMetaStore();
  const {
    whistlerName,
    setWhistlerName,
    whistlerAge,
    setWhistlerAge,
    setWhistlerFile,
  } = store;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setWhistlerFile(event.target.files[0]);
    } else {
      setWhistlerFile(null);
    }
  };

  return (
    <div>
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
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
    </div>
  );
};
export default FormFields;
