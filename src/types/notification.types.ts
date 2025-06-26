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
  navigate: {
    push: (path: string) => void;
  };
}

export interface NotificationItemProps {
  notification: NotificationType;
  deleteNotification: (id: string) => void;
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
