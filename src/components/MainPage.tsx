"use client";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import SelectionTypeButtons from "@/components/SelectionTypeButtons";
import OrganizationCodeInput from "@/components/OrganizationCodeInput";
import { useTranslation } from "@/app/i18n/useTranslation";

const MainPage = () => {
  const { dict } = useTranslation();
  const navigate = useRouter();
  const [selectionType, setSelectionType] = useState<"school" | "organization">(
    "school"
  );
  const [organizationCode, setOrganizationCode] = useState<string>("");
  const [entityType, setEntityType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleEntityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityType(e.target.value);
  };

  const proceed = () => {
    if (selectionType === "school" && entityType) {
      navigate.push(`/infopage?entityType=${entityType}`);
    } else if (selectionType === "organization") {
      setError(dict.errorOrganizationCode);
    }
  };

  return (
    <div>
      <h1 className="text-center">{dict.welcome}</h1>
      <div className="d-flex justify-content-center mt-4">
        <SelectionTypeButtons
          dict={{
            schoolReport: dict.schoolReport,
            organisationReport: dict.organisationReport,
          }}
          selectionType={selectionType}
          setSelectionType={setSelectionType}
          setError={setError}
        />
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
              onChange={handleEntityTypeChange}
              placeholder="Vyhledej školu"
              className="w-100"
            >
              <option value="">{dict.findSchool}</option>
              <option value="TestSchool">{dict.findSchoolTest}</option>
            </Form.Control>
          </Form.Group>
        )}

        {selectionType === "organization" && (
          <OrganizationCodeInput
            dict={{
              labelOrganisation: dict.labelOrganisation,
              findOrganisation: dict.findOrganisation,
            }}
            organizationCode={organizationCode}
            setOrganizationCode={setOrganizationCode}
            error={error}
          />
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
