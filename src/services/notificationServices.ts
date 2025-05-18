import { NotificationType } from "@/types/notification.types";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createNotification = async (
  notificationData: Partial<NotificationType>
): Promise<NotificationType> => {
  const formData = new FormData();
  Object.entries(notificationData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(
        key,
        key === "whistlerAge" ? String(value) : (value as string | Blob)
      );
    }
  });
  const response = await fetch(`${API_BASE_URL}/api/notifications`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const fetchNotifications = async (): Promise<NotificationType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/notifications`);
  return response.json();
};

export const editNotificationById = async (
  id: string,
  updatedData: Partial<NotificationType>
): Promise<NotificationType> => {
  const { _id: _, ...dataWithoutId } = updatedData;

  const formData = new FormData();
  Object.entries(dataWithoutId).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === "whistlerFile") {
        if (value instanceof File) {
          formData.append(key, value);
        }
      } else {
        formData.append(key, value.toString());
      }
    }
  });

  const response = await fetch(`${API_BASE_URL}/api/notifications/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(`Server error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const deleteNotificationById = async (id: string): Promise<void> => {
  await fetch(`${API_BASE_URL}/api/notifications/${id}`, {
    method: "DELETE",
  });
};
