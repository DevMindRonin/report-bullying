interface Dictionary {
  notification1: string;
  notification2: string;
  notification3: string;
  notification4: string;
}

export const getCategories = (dict: Dictionary) => [
  { value: "bullying", label: dict.notification1 },
  { value: "difficulties", label: dict.notification2 },
  { value: "problems", label: dict.notification3 },
  { value: "other", label: dict.notification4 },
];
