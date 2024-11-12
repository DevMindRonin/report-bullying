import { NavigateFunction } from "react-router-dom";
export interface NotificationType {
  _id: string;
  entityType: string;
  entityName: string;
  whistlerName: string;
  whistlerAge: number;
  whistlerFile?:
    | File
    | {
        originalname: string;
        path: string;
        filename: string;
      }
    | null;
}

export interface NotiDetailViewProps {
  notification: NotificationType;
  onEditClick: () => void;
  navigate: NavigateFunction;
}

export interface FormFieldsProps {
  whistlerName: string;
  setWhistlerName: (value: string) => void;
  whistlerAge: number | "";
  setWhistlerAge: (value: number | "") => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NotificationListProps {
  notifications: NotificationType[];
  deleteNotification: (id: string) => void;
}

export interface SelectionTypeButtonsProps {
  selectionType: "school" | "organization";
  setSelectionType: React.Dispatch<
    React.SetStateAction<"school" | "organization">
  >;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface OrganizationCodeInputProps {
  organizationCode: string;
  setOrganizationCode: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
}

export interface NotificationItemProps {
  notification: NotificationType;
  deleteNotification: (id: string) => void;
}

export interface CategorySelectProps {
  categoryOption: string;
  setCategoryOption: (value: string) => void;
}

export interface NotificationDetailFormProps {
  editedNotification: Partial<NotificationType>;
  setEditedNotification: React.Dispatch<
    React.SetStateAction<Partial<NotificationType>>
  >;
  handleSaveClick: (e: React.FormEvent) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NotificationDetailProps {
  notifications: NotificationType[];
  deleteNotification: (id: string) => void;
  editNotification: (
    id: string,
    updatedData: Partial<NotificationType>
  ) => void;
}

export interface NotificationFormProps {
  addNotification: (notificationData: Partial<NotificationType>) => void;
}
