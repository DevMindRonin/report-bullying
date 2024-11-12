import { useState, useEffect } from "react";
import {
  fetchNotifications,
  createNotification,
  deleteNotificationById,
  editNotificationById,
} from "../services/notificationServices";
import { NotificationType } from "../types/types";

const useNoti = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  const addNotification = (notificationData: Partial<NotificationType>) => {
    createNotification(notificationData).then((newNotification) =>
      setNotifications([...notifications, newNotification])
    );
  };

  const editNotification = (
    id: string,
    updatedData: Partial<NotificationType>
  ) => {
    editNotificationById(id, updatedData).then((updatedNotification) => {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === id ? updatedNotification : notification
        )
      );
    });
  };

  const deleteNotification = (id: string) => {
    deleteNotificationById(id).then(() => {
      setNotifications(
        notifications.filter((notifications) => notifications._id !== id)
      );
    });
  };

  return {
    notifications,
    addNotification,
    deleteNotification,
    editNotification,
  };
};

export default useNoti;
