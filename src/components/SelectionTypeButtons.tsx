import React from "react";
import { Button } from "react-bootstrap";

interface SelectionTypeButtonsProps {
  selectionType: "school" | "organization";
  setSelectionType: React.Dispatch<
    React.SetStateAction<"school" | "organization">
  >;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectionTypeButtons: React.FC<SelectionTypeButtonsProps> = ({
  selectionType,
  setSelectionType,
  setError,
}) => {
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
        Moje základní/střední škola
      </Button>
      <Button
        variant={selectionType === "organization" ? "secondary" : "light"}
        onClick={() => {
          setSelectionType("organization");
          setError(null);
        }}
      >
        Moje organizace
      </Button>
    </div>
  );
};

export default SelectionTypeButtons;
