import { t } from "i18next";
import { TFunction } from "i18next";
export const getCategories = (t: TFunction) => [
  { value: "bullying", label: t("notification1") },
  { value: "difficulties", label: t("notification2") },
  { value: "problems", label: t("notification3") },
  { value: "other", label: t("notification4") },
];
