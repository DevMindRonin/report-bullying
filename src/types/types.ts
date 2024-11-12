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

export interface NotificationListProps {
  notifications: NotificationType[];
  deleteNotification: (id: string) => void;
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
