"use client";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import type { Dictionary } from "@/types/i18n.types";
import { useNotificationMetaStore } from "@/stores/notificationStore";

const NewNotificationClient = ({
  dict,
  lang,
  categories,
}: {
  dict: Dictionary;
  lang: string;
  categories: { label: string; value: string }[];
}) => {
  const router = useRouter();
  const store = useNotificationMetaStore();
  const { entityName, setEntityName } = store;

  const proceed = () => {
    setEntityName(entityName);
    router.push(`/${lang}/formpage`);
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
