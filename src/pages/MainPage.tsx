import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SelectionTypeButtons from "../components/SelectionTypeButtons";
import OrganizationCodeInput from "../components/OrganizationCodeInput";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [selectionType, setSelectionType] = useState<"school" | "organization">(
    "school"
  );
  const [entityType, setEntityType] = useState<string>("");
  const [organizationCode, setOrganizationCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleEntityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityType(e.target.value);
  };

  const proceed = () => {
    if (selectionType === "school" && entityType) {
      navigate("/infopage", { state: { entityType } });
    } else if (selectionType === "organization") {
      setError("Nesprávný přístupový kód. ");
    }
  };

  return (
    <div>
      <h1 className="text-center">{t("welcome")}</h1>
      <div className="d-flex justify-content-center mt-4">
        <SelectionTypeButtons
          selectionType={selectionType}
          setSelectionType={setSelectionType}
          setError={setError}
        />
      </div>

      <Form>
        {selectionType === "school" && (
          <Form.Group controlId="schoolSelect">
            <Form.Label className="fw-bold text-start mt-4">Škola</Form.Label>
            <Form.Control
              as="select"
              value={entityType}
              onChange={handleEntityTypeChange}
              placeholder="Vyhledej školu"
              className="w-100"
            >
              <option value="">-- Vyhledej školu --</option>
              <option value="TestSchool">
                Testovací škola - Neboj se NNTB vyzkoušet
              </option>
            </Form.Control>
          </Form.Group>
        )}

        {selectionType === "organization" && (
          <OrganizationCodeInput
            organizationCode={organizationCode}
            setOrganizationCode={setOrganizationCode}
            error={error}
          />
        )}
      </Form>

      <div className="d-flex justify-content-center mt-3">
        <Button onClick={proceed} variant="primary">
          Pokračovat
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
