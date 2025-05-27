"use client";
import type { Dictionary } from "@/app/i18n/types";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CategorySelect from "@/components/CategorySelect";
import FormFields from "@/components/FormFields";

<<<<<<< HEAD
=======
import { useNotificationMetaStore } from "@/stores/notificationStore";
>>>>>>> origin/main
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
<<<<<<< HEAD
  const {
    entityType,
    entityName,
    setEntityName,
    setWhistlerAge,
    whistlerAge,
    setWhistlerFile,
    whistlerFile,
    setWhistlerName,
    whistlerName,
  } = useNotificationMetaStore();
=======
  const { entityType, entityName } = useNotificationMetaStore();
  const [categoryOption, setCategoryOption] = useState<string>(
    entityName || ""
  );

  useEffect(() => {
    if (!categoryOption) {
      const nameFromParams = searchParams.get("entityName");
      if (nameFromParams) {
        setCategoryOption(nameFromParams);
      }
    }
  }, [searchParams, categoryOption]);
>>>>>>> origin/main

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setWhistlerFile(event.target.files[0]);
    } else {
      setWhistlerFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whistlerName || !whistlerAge) {
      alert("Vyplňte všechna pole formuláře.");
      return;
    }

    addNotification({
<<<<<<< HEAD
      entityType: entityType || "",
      entityName: entityName,
=======
      entityType: entityType,
      entityName: categoryOption,
>>>>>>> origin/main
      whistlerName,
      whistlerAge: whistlerAge,
      whistlerFile,
    });
    navigate.push(`/${lang}/finalpage`);
  };

  console.log(`Entity type: ${entityType}, Entity nema: ${entityName}`); // debug entit

  return (
    <Form onSubmit={handleSubmit}>
      <CategorySelect
        entityName={entityName}
        setEntityName={setEntityName}
        dict={dict}
      />
      <FormFields
        dict={dict}
        whistlerName={whistlerName}
        setWhistlerName={setWhistlerName}
        whistlerAge={whistlerAge}
        setWhistlerAge={setWhistlerAge}
        setWhistlerFileProps={handleFileChange}
      />

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
