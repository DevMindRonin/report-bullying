import { create } from "zustand";
import {
  fetchNotifications,
  createNotification,
  deleteNotificationById,
  editNotificationById,
} from "../services/notificationServices";
import type {
  NotificationState,
  NotificationStore,
} from "@/types/notificationStore.types";

export const useNotificationMetaStore = create<NotificationState>((set) => ({
  selectionType: "school",
  setSelectionType: (type) => set({ selectionType: type }),
  entityType: "",
  setEntityType: (type) => set({ entityType: type }),
  entityName: "",
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
  error: "",
  setError: (error) => set({ error }),

  editedNotification: null,
  setEditedNotification: (notification) =>
    set({ editedNotification: notification }),
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
