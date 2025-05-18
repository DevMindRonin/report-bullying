"use client";
import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { NotificationListProps } from "@/types/types";
import NotificationItem from "@/components/NotificationItem";
import { t } from "i18next";
import { useNotificationStore } from "@/stores/notificationStore";

const NotificationList = () => {
  const navigate = useRouter();
  const { notifications, loadNotifications, deleteNotification } =
    useNotificationStore();

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <div className="text-center">
      <h2>{t("admistrationTitle")}</h2>
      <Table responsive className="mt-5">
        <tbody>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification._id}
              notification={notification}
              deleteNotification={deleteNotification}
            />
          ))}
        </tbody>
      </Table>

      <Button
        variant="primary"
        className="mt-3"
        onClick={() => navigate.push("/")}
      >
        {t("newNotificationButton")}
      </Button>
    </div>
  );
};

export default NotificationList;
