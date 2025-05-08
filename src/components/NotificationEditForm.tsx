import React from "react";
import { Button, Form } from "react-bootstrap";
import { NotificationType, NotificationDetailFormProps } from "../types/types";
import { t } from "i18next";
const NotificationEditForm: React.FC<NotificationDetailFormProps> = ({
  editedNotification,
  setEditedNotification,
  handleSaveClick,
  setIsEditing,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedNotification((prevState: Partial<NotificationType>) => ({
      ...prevState,
      [name]: name === "whistlerAge" ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setEditedNotification((prevState: Partial<NotificationType>) => ({
        ...prevState,
        whistlerFile: file,
      }));
    } else {
      setEditedNotification((prevState: Partial<NotificationType>) => {
        const { whistlerFile, ...rest } = prevState;
        return rest;
      });
    }
  };

  return (
    <Form onSubmit={handleSaveClick}>
      <Form.Group controlId="whistlerName">
        <Form.Label className="fw-bold">{t("labelName")}</Form.Label>
        <Form.Control
          type="text"
          name="whistlerName"
          value={editedNotification.whistlerName || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="whistlerAge">
        <Form.Label className="fw-bold">{t("labelAge")}</Form.Label>
        <Form.Control
          type="number"
          name="whistlerAge"
          value={editedNotification.whistlerAge || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="whistlerFile">
        <Form.Label className="fw-bold">{t("loadFile")}</Form.Label>
        <Form.Control
          type="file"
          name="whistlerFile"
          onChange={handleFileChange}
        />
      </Form.Group>
      <div className="mt-5 d-flex justify-content-center">
        <Button type="submit" variant="primary">
          Uložit
        </Button>
        <Button
          variant="secondary"
          className="ms-2"
          onClick={() => setIsEditing(false)}
        >
          Zrušit
        </Button>
      </div>
    </Form>
  );
};

export default NotificationEditForm;
