import type { NotificationType } from "@/types/notification.types";

export type WhistlerFileType =
  | File
  | {
      originalname: string;
      path: string;
      filename: string;
    }
  | null;

export interface NotificationStore {
  notifications: NotificationType[];
  loadNotifications: () => Promise<void>;
  addNotification: (data: Partial<NotificationType>) => Promise<void>;
  editNotification: (
    id: string,
    data: Partial<NotificationType>
  ) => Promise<void>;
  deleteNotification: (id: string) => Promise<void>;
}

export interface NotificationState {
  selectionType: "school" | "organization";
  setSelectionType: (type: "school" | "organization") => void;
  entityType: string;
  setEntityType: (entityType: string) => void;
  entityName: string;
  setEntityName: (entityName: string) => void;
  whistlerName: string;
  setWhistlerName: (whistlerName: string) => void;
  whistlerAge: number | "";
  setWhistlerAge: (wAge: number | "") => void;
  whistlerFile: WhistlerFileType;
  setWhistlerFile: (file: WhistlerFileType) => void;
  organizationCode: string;
  setOrganizationCode: (code: string) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;

  editedNotification: NotificationType | null;
  setEditedNotification: (notification: NotificationType | null) => void;
}
