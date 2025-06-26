"use client";
import { useNotificationMetaStore } from "@/stores/notificationStore";
import type { Dictionary } from "@/types/i18n.types";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CategorySelect from "@/components/CategorySelect";
import FormFields from "@/components/FormFields";

import { useNotificationStore } from "@/stores/notificationStore";

export default function FormPage({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const navigate = useRouter();
  const addNotification = useNotificationStore((s) => s.addNotification);
  const store = useNotificationMetaStore();
  const { entityType, entityName, whistlerAge, whistlerFile, whistlerName } =
    store;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whistlerName || !whistlerAge) {
      alert("Vyplňte všechna pole formuláře.");
      return;
    }

    addNotification({
      entityType: entityType || "",
      entityName: entityName,
      whistlerName,
      whistlerAge: whistlerAge,
      whistlerFile,
    });
    navigate.push(`/${lang}/finalpage`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CategorySelect dict={dict} />
      <FormFields dict={dict} />

      {whistlerFile && (
        <div className="text-center">
          <small className="text-success text-center">
            {whistlerFile &&
              !(whistlerFile instanceof File) &&
              whistlerFile.originalname}
          </small>
        </div>
      )}
      <div className="d-flex justify-content-center mt-3">
        <Button type="submit" variant="primary" className="mt-3">
          {dict.sendButton}
        </Button>
      </div>
    </Form>
  );
}
