"use client";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import SelectionTypeButtons from "@/components/SelectionTypeButtons";
import OrganizationCodeInput from "@/components/OrganizationCodeInput";
import type { Dictionary } from "@/types/i18n.types";
import { useNotificationMetaStore } from "@/stores/notificationStore";

const MainPage = ({ dict, lang }: { dict: Dictionary; lang: string }) => {
  const navigate = useRouter();
  const store = useNotificationMetaStore();
  const { setError, entityType, setEntityType, selectionType } = store;

  const proceed = () => {
    if (selectionType === "school" && entityType) {
      navigate.push(`/${lang}/infopage`);
    } else if (selectionType === "organization") {
      setError("errorOrganizationCode");
    }
  };

  return (
    <div>
      <h1 className="text-center">{dict.welcome}</h1>
      <div className="d-flex justify-content-center mt-4">
        <SelectionTypeButtons dict={dict} />
      </div>

      <Form>
        {selectionType === "school" && (
          <Form.Group controlId="schoolSelect">
            <Form.Label className="fw-bold text-start mt-4">
              {dict.labelSchool}
            </Form.Label>
            <Form.Control
              as="select"
              value={entityType}
              onChange={(e) => {
                setEntityType(e.target.value);
              }}
              className="w-100"
            >
              <option value="">{dict.findSchool}</option>
              <option value="TestSchool">{dict.findSchoolTest}</option>
            </Form.Control>
          </Form.Group>
        )}

        {selectionType === "organization" && (
          <OrganizationCodeInput dict={dict} />
        )}
      </Form>

      <div className="d-flex justify-content-center mt-3">
        <Button onClick={proceed} variant="primary">
          {dict.nextButton}
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
