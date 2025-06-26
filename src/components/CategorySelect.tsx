import React from "react";
import { Form } from "react-bootstrap";
import { getCategories } from "../lib/categories";
import type { CategorySelectProps } from "@/types/notification.types";
import type { Dictionary } from "@/types/i18n.types";

const CategorySelect = ({
  entityName,
  setEntityName,
  dict,
}: CategorySelectProps & { dict: Dictionary }) => {
  const categories = getCategories(dict);
  return (
    <Form.Group controlId="categorySelect" className="mb-3">
      <Form.Label className="fw-bold">{dict.labelCategory}</Form.Label>
      <Form.Control
        as="select"
        value={entityName}
        onChange={(e) => setEntityName(e.target.value)}
      >
        <option value="" disabled hidden>
          {dict.labelChooseNotification}
        </option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CategorySelect;
