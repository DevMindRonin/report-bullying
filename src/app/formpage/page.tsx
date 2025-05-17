"use client";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import CategorySelect from "@/components/CategorySelect";
import FormFields from "@/components/FormFields";
import { Trans } from "react-i18next";
import { t } from "i18next";
import { useNotificationStore } from "@/stores/notificationStore";

const FormPage = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const entityType = searchParams.get("entityType") ?? "";
  const entityName = searchParams.get("entityName") ?? "";

  const [categoryOption, setCategoryOption] = useState<string>(entityName);
  const [whistlerName, setWhistlerName] = useState<string>("");
  const [whistlerAge, setWhistlerAge] = useState<number | "">("");
  const [whistlerFile, setFile] = useState<File | null>(null);
  const addNotification = useNotificationStore((s) => s.addNotification);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whistlerName || !whistlerAge) {
      alert("Vyplňte všechna pole formuláře.");
      return;
    }
    addNotification({
      entityType: entityType || "",
      entityName: categoryOption,
      whistlerName,
      whistlerAge: Number(whistlerAge),
      whistlerFile,
    });
    navigate.push("/finalpage");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CategorySelect
        categoryOption={categoryOption}
        setCategoryOption={setCategoryOption}
      />
      <FormFields
        whistlerName={whistlerName}
        setWhistlerName={setWhistlerName}
        whistlerAge={whistlerAge}
        setWhistlerAge={setWhistlerAge}
        handleFileChange={handleFileChange}
      />

      <Trans
        i18nKey="personalDataInfo"
        components={{
          1: (
            <a
              href="https://www.app.nntb.cz/cs/information-on-personal-data-processing-school"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
        }}
      />

      <div className="d-flex justify-content-center mt-3">
        <Button type="submit" variant="primary" className="mt-3">
          {t("sendButton")}
        </Button>
      </div>
    </Form>
  );
};

export default FormPage;
