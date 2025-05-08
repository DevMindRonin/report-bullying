import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NotificationDetailProps, NotificationType } from "../types/types";
import NotificationDetailForm from "../components/NotificationEditForm";
import NotificationDetailView from "../components/NotificationDisplay";
import { t } from "i18next";

const NotificationDetail = ({
  notifications,
  editNotification,
}: NotificationDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const notificationId = id;

  const notification = notifications.find((n) => n._id === notificationId);

  const [isEditing, setIsEditing] = useState(false);
  const [editedNotification, setEditedNotification] = useState<
    Partial<NotificationType>
  >({
    ...notification,
  });

  if (!notification) {
    return <div>Poznámka nebyla nalezena.</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editedNotification && notificationId) {
        await editNotification(notificationId, editedNotification);
        setIsEditing(false);
        navigate("/notificationlist");
      } else {
        console.error(t("idError"));
      }
    } catch (error) {
      console.error(t("savingError"), error);
    }
  };

  return (
    <div>
      <h2 className="mb-5">{t("notificationDetail")}</h2>
      {isEditing ? (
        <NotificationDetailForm
          editedNotification={editedNotification}
          setEditedNotification={setEditedNotification}
          handleSaveClick={handleSaveClick}
          setIsEditing={setIsEditing}
        />
      ) : (
        <NotificationDetailView
          notification={notification}
          onEditClick={handleEditClick}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default NotificationDetail;
