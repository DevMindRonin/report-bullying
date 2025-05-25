"use client";

import { useNotificationStore } from "@/stores/notificationStore";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import type { NotificationType } from "@/types/notification.types";
import NotificationDetailForm from "@/components/NotificationEditForm";
import NotificationDetailView from "@/components/NotificationDisplay";
import type { Dictionary } from "@/app/i18n/types";

export default function NotificationDetail({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const notifications = useNotificationStore((s) => s.notifications);
  const editNotification = useNotificationStore((s) => s.editNotification);
  const navigate = useRouter();
  const params = useParams();
  const notificationId = params?.id as string;
  const notification = notifications.find((n) => n._id === notificationId);
  const [editedNotification, setEditedNotification] = useState<
    Partial<NotificationType>
  >({ ...notification });

  if (!notification) {
    return <div>{dict.notFoundMessage}</div>;
  }

  const handleSaveClick = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editedNotification && notificationId) {
        await editNotification(notificationId, editedNotification);
        setIsEditing(false);
        navigate.push(`/${lang}/notificationlist`);
      } else {
        console.error(dict.idError);
      }
    } catch (error) {
      console.error(dict.savingError, error);
    }
  };
  if (!notification) return <div>Nic tu není{dict.notFoundMessage}</div>;
  return (
    <div>
      <h2 className="mb-5">{dict.notificationDetail}</h2>
      {isEditing ? (
        <NotificationDetailForm
          dict={dict}
          editedNotification={editedNotification}
          setEditedNotification={setEditedNotification}
          handleSaveClick={handleSaveClick}
          setIsEditing={setIsEditing}
          notification={notification}
        />
      ) : (
        <NotificationDetailView
          dict={dict}
          lang={lang}
          notification={notification}
          onEditClick={() => setIsEditing(true)}
          navigate={navigate}
        />
      )}
    </div>
  );
}
