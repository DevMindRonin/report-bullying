import React from "react";
import { Form } from "react-bootstrap";
import { getCategories } from "../components/categories";
import { CategorySelectProps } from "@/types/types";

interface Props extends CategorySelectProps {
  dict: {
    labelCategory: string;
    labelChooseNotification: string;
    notification1: string;
    notification2: string;
    notification3: string;
    notification4: string;
  };
}

const CategorySelect: React.FC<Props> = ({
  categoryOption,
  setCategoryOption,
  dict,
}) => {
  const categories = getCategories(dict);
  return (
    <Form.Group controlId="categorySelect">
      <Form.Label className="fw-bold">{dict.labelCategory}</Form.Label>
      <Form.Control
        as="select"
        value={categoryOption}
        onChange={(e) => setCategoryOption(e.target.value)}
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
