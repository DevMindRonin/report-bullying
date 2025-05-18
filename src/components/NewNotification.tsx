"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import type { Dictionary } from "@/app/i18n/types";

const NewNotificationClient = ({
  dict,
  categories,
}: {
  dict: Dictionary;
  categories: { label: string; value: string }[];
}) => {
  const [entityName, setEntityName] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const entityType = searchParams.get("entityType") ?? "";

  const proceed = () => {
    if (entityName) {
      router.push(
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
            onChange={(e) => setEntityName(e.target.value)}
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

export default NewNotificationClient;
