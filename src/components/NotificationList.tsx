"use client";

import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import NotificationItem from "@/components/NotificationItem";
import { useNotificationStore } from "@/stores/notificationStore";
import type { Dictionary } from "@/types/i18n.types";

export const NotificationList = ({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) => {
  const navigate = useRouter();
  const { notifications, loadNotifications, deleteNotification } =
    useNotificationStore();

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <div className="text-center">
      <h2>{dict.admistrationTitle}</h2>
      <Table responsive className="mt-5">
        <tbody>
          {notifications.map((notification) => (
            <NotificationItem
              dict={dict}
              lang={lang}
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
        onClick={() => navigate.push(`/${lang}/`)}
      >
        {dict.newNotificationButton}
      </Button>
    </div>
  );
};
export default NotificationList;
