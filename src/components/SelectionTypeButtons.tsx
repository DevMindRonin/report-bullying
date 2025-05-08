import React from "react";
import { Button } from "react-bootstrap";
import { SelectionTypeButtonsProps } from "../types/types";
import { useTranslation } from "react-i18next";

const SelectionTypeButtons: React.FC<SelectionTypeButtonsProps> = ({
  selectionType,
  setSelectionType,
  setError,
}) => {
  const { t } = useTranslation();
  return (
    <div className="d-inline-flex bg-light p-1 rounded">
      <Button
        variant={selectionType === "school" ? "secondary" : "light"}
        onClick={() => {
          setSelectionType("school");
          setError(null);
        }}
        className="me-2"
      >
        {t("schoolReport")}
      </Button>
      <Button
        variant={selectionType === "organization" ? "secondary" : "light"}
        onClick={() => {
          setSelectionType("organization");
          setError(null);
        }}
      >
        {t("organisationReport")}
      </Button>
    </div>
  );
};

export default SelectionTypeButtons;
