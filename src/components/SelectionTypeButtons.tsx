"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { SelectionTypeButtonsProps } from "@/types/notification.types";
import { Dictionary } from "@/types/i18n.types";

const SelectionTypeButtons = ({
  selectionType,
  setSelectionType,
  setError,
  dict,
}: SelectionTypeButtonsProps & { dict: Dictionary }) => {
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
        {dict.schoolReport}
      </Button>
      <Button
        variant={selectionType === "organization" ? "secondary" : "light"}
        onClick={() => {
          setSelectionType("organization");
          setError(null);
        }}
      >
        {dict.organisationReport}
      </Button>
    </div>
  );
};

export default SelectionTypeButtons;
