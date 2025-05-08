import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { getCategories } from "../components/categories";
import { t } from "i18next";

const NewNotification = () => {
  const categories = getCategories(t);
  const [entityName, setEntityName] = useState("");
  const { entityType } = useLocation().state || {};
  const navigate = useNavigate();

  const handleNotiSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityName(e.target.value);
  };

  const proceed = () => {
    if (entityName) {
      navigate("/formpage", { state: { entityType, entityName } });
    } else {
      alert("Please select a school.");
    }
  };

  return (
    <div>
      <h1>{t("newNotificationTitle")}</h1>
      <Form className="mt-5">
        <Form.Group controlId="categorySelect">
          <Form.Label className="fw-bold">{t("labelCategory")}</Form.Label>
          <Form.Control
            as="select"
            value={entityName}
            onChange={handleNotiSelect}
          >
            <option value="" disabled hidden>
              {t("labelChooseNotification")}
            </option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Button
            onClick={proceed}
            variant="primary"
            className="mt-3"
            disabled={!entityName}
          >
            {t("nextButton")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewNotification;
