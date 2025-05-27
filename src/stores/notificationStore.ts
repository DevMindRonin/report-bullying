import { create } from "zustand";
import {
  fetchNotifications,
  createNotification,
  deleteNotificationById,
  editNotificationById,
} from "../services/notificationServices";
import { NotificationType } from "@/types/notification.types";

<<<<<<< HEAD
type WhistlerFileType =
  | File
  | {
      originalname: string;
      path: string;
      filename: string;
    }
  | null;
=======
interface NotificationState {
  entityType: string;
  entityName: string;
  setEntityType: (type: string) => void;
  setEntityName: (name: string) => void;
}
>>>>>>> origin/main

interface NotificationStore {
  notifications: NotificationType[];
  loadNotifications: () => Promise<void>;
  addNotification: (data: Partial<NotificationType>) => Promise<void>;
  editNotification: (
    id: string,
    data: Partial<NotificationType>
  ) => Promise<void>;
  deleteNotification: (id: string) => Promise<void>;
}

interface NotificationState {
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

export const useNotificationMetaStore = create<NotificationState>((set) => ({
  selectionType: "school",
  setSelectionType: (type) => set({ selectionType: type }),
  entityType: "",
  setEntityType: (type) => set({ entityType: type }),
  entityName: "",
<<<<<<< HEAD
  setEntityName: (name) => set({ entityName: name }),
  whistlerName: "",
  setWhistlerName: (name) => set({ whistlerName: name }),
  whistlerAge: 0,
  setWhistlerAge: (wAge) => set({ whistlerAge: wAge }),
  whistlerFile: null,
  setWhistlerFile: (file) => set({ whistlerFile: file }),
  organizationCode: "",
  setOrganizationCode: (code) => set({ organizationCode: code }),
  isEditing: false,
  setIsEditing: (isEditing) => set({ isEditing }),

  editedNotification: null,
  setEditedNotification: (notification) =>
    set({ editedNotification: notification }),
=======
  setEntityType: (type) => set({ entityType: type }),
  setEntityName: (name) => set({ entityName: name }),
>>>>>>> origin/main
}));

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  loadNotifications: async () => {
    const data = await fetchNotifications();
    set({ notifications: data });
  },

  addNotification: async (data) => {
    const newNotification = await createNotification(data);
    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));
  },

  editNotification: async (id, data) => {
    const updated = await editNotificationById(id, data);
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n._id === id ? updated : n
      ),
    }));
  },

  deleteNotification: async (id) => {
    await deleteNotificationById(id);
    set((state) => ({
      notifications: state.notifications.filter((n) => n._id !== id),
    }));
  },
}));
