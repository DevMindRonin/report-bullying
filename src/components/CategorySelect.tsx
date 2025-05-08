import React from "react";
import { Form } from "react-bootstrap";
import { getCategories } from "../components/categories";
import { CategorySelectProps } from "../types/types";
import { t } from "i18next";

const CategorySelect: React.FC<CategorySelectProps> = ({
  categoryOption,
  setCategoryOption,
}) => {
  const categories = getCategories(t);
  return (
    <Form.Group controlId="categorySelect">
      <Form.Label className="fw-bold">{t("labelCategory")}</Form.Label>
      <Form.Control
        as="select"
        value={categoryOption}
        onChange={(e) => setCategoryOption(e.target.value)}
      >
        <option value="" disabled hidden>
          {t("labelChooseNotification")}
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
