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

export interface NotificationDetailViewProps {
  notification: NotificationType;
  onEditClick: () => void;
  navigate: { push: (href: string) => void };
}

export interface FormFieldsProps {
  whistlerName: string;
  setWhistlerName: (value: string) => void;
  whistlerAge: number | "";
  setWhistlerAge: (value: number | "") => void;
  setWhistlerFileProps: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NotificationListProps {
  notifications: NotificationType[];
  deleteNotification: (id: string) => void;
}

export interface SelectionTypeButtonsProps {
  selectionType: "school" | "organization";
  setSelectionType: (types: "school" | "organization") => void;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface OrganizationCodeInputProps {
  organizationCode: string;
  setOrganizationCode: (code: string) => void;
  error: string | null;
}

export interface NotificationItemProps {
  notification: NotificationType;
  deleteNotification: (id: string) => void;
}

export interface CategorySelectProps {
  entityName: string;
  setEntityName: (value: string) => void;
}

export interface NotificationDetailFormProps {
  editedNotification: Partial<NotificationType>;
  setEditedNotification: React.Dispatch<
    React.SetStateAction<Partial<NotificationType>>
  >;
  handleSaveClick: (e: React.FormEvent) => void;
  setIsEditing: (code: boolean) => void;
  notification: NotificationType;
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
