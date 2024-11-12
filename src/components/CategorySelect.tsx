// CategorySelect.tsx
import React from "react";
import { Form } from "react-bootstrap";
import { categories } from "../components/categories";

interface CategorySelectProps {
  categoryOption: string;
  setCategoryOption: (value: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  categoryOption,
  setCategoryOption,
}) => (
  <Form.Group controlId="categorySelect">
    <Form.Label className="fw-bold">Kategorie</Form.Label>
    <Form.Control
      as="select"
      value={categoryOption}
      onChange={(e) => setCategoryOption(e.target.value)}
    >
      <option value="" disabled hidden>
        Vyberte jednu možnost
      </option>
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

export default CategorySelect;
