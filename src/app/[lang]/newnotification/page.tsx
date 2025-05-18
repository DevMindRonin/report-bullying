"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { getCategories } from "@/components/categories";
import { useTranslation } from "@/app/i18n/useTranslation";

const NewNotification = () => {
  const { dict } = useTranslation();
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const entityType = searchParams.get("entityType") ?? "";
  const categories = getCategories(dict);
  const [entityName, setEntityName] = useState("");

  const handleNotiSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityName(e.target.value);
  };

  const proceed = () => {
    if (entityName) {
      navigate.push(
        `/formpage?entityType=${encodeURIComponent(
          entityType
        )}&entityName=${encodeURIComponent(entityName)}`
      );
    } else {
      alert("Please select a school.");
    }
  };

  return (
    <div>
      <h1>{dict.newNotificationTitle}</h1>
      <Form className="mt-5">
        <Form.Group controlId="categorySelect">
          <Form.Label className="fw-bold">{dict.labelCategory}</Form.Label>
          <Form.Control
            as="select"
            value={entityName}
            onChange={handleNotiSelect}
          >
            <option value="" disabled hidden>
              {dict.labelChooseNotification}
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
            {dict.nextButton}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewNotification;
