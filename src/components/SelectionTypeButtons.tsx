"use client";
import React, { use } from "react";
import { Button } from "react-bootstrap";
import type { Dictionary } from "@/types/i18n.types";
import { useNotificationMetaStore } from "@/stores/notificationStore";

const SelectionTypeButtons = ({ dict }: { dict: Dictionary }) => {
  const store = useNotificationMetaStore();
  const { selectionType, setSelectionType, setError } = store;
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
