import { create } from "zustand";
import {
  fetchNotifications,
  createNotification,
  deleteNotificationById,
  editNotificationById,
} from "../services/notificationServices";
import { NotificationType } from "@/types/notification.types";

interface NotificationState {
  entityType: string;
  entityName: string;
  setMeta: (type: string, name: string) => void;
}

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

export const useNotificationMetaStore = create<NotificationState>((set) => ({
  entityType: "",
  entityName: "",
  setMeta: (type, name) => set({ entityType: type, entityName: name }),
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
