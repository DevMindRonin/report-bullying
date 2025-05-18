import { Button, Form } from "react-bootstrap";
import {
  NotificationType,
  NotificationDetailFormProps,
} from "@/types/notification.types";

interface Props extends NotificationDetailFormProps {
  dict: {
    labelName: string;
    labelAge: string;
    loadFile: string;
    save: string;
    cancel: string;
  };
}

const NotificationEditForm: React.FC<Props> = ({
  editedNotification,
  setEditedNotification,
  handleSaveClick,
  setIsEditing,
  dict,
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
        <Form.Label className="fw-bold">{dict.labelName}</Form.Label>
        <Form.Control
          type="text"
          name="whistlerName"
          value={editedNotification.whistlerName || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="whistlerAge">
        <Form.Label className="fw-bold">{dict.labelAge}</Form.Label>
        <Form.Control
          type="number"
          name="whistlerAge"
          value={editedNotification.whistlerAge || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="whistlerFile">
        <Form.Label className="fw-bold">{dict.loadFile}</Form.Label>
        <Form.Control
          type="file"
          name="whistlerFile"
          onChange={handleFileChange}
        />
      </Form.Group>
      <div className="mt-5 d-flex justify-content-center">
        <Button type="submit" variant="primary">
          {dict.save}
        </Button>
        <Button
          variant="secondary"
          className="ms-2"
          onClick={() => setIsEditing(false)}
        >
          {dict.cancel}
        </Button>
      </div>
    </Form>
  );
};

export default NotificationEditForm;
