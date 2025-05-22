"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import type { Dictionary } from "@/app/i18n/types";
import { useNotificationMetaStore } from "@/stores/notificationStore";

const NewNotificationClient = ({
  dict,
  categories,
}: {
  dict: Dictionary;
  categories: { label: string; value: string }[];
}) => {
  const [entityNewName, setEntityNewName] = useState("");
  const router = useRouter();
  const setEntityName = useNotificationMetaStore((s) => s.setEntityName);
  const { entityType } = useNotificationMetaStore();
  const proceed = () => {
    if (!entityNewName || entityNewName.trim() === "") {
      alert("Vyberte prosím školu nebo organizaci.");
      return;
    }

    console.log(`Entity type: ${entityType}, Entity nema: ${entityNewName}`); // debug entit

    setEntityName(entityNewName);
    router.push("/formpage");
  };

  return (
    <div>
      <h1>{dict.newNotificationTitle}</h1>
      <Form className="mt-5">
        <Form.Group controlId="categorySelect">
          <Form.Label className="fw-bold">{dict.labelCategory}</Form.Label>
          <Form.Control
            as="select"
            value={entityNewName}
            onChange={(e) => setEntityNewName(e.target.value)} // setEntityName
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
            disabled={!entityNewName}
          >
            {dict.nextButton}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewNotificationClient;
